import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import classNames from 'classnames';

import { withPageConfig } from './../Layout/withPageConfig'
import Common from './../../common';
import { MenuContext } from './MenuContext';

class SidebarMenu extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        currentUrl: PropTypes.string,
        slim: PropTypes.bool,
        location: PropTypes.object,
        pageConfig: PropTypes.object,
        disabled: PropTypes.bool
    }

    containerRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            entries: this.entries = { }
        };
    }

    addEntry(entry) {
        this.setState({
            entries: this.entries = {
                ...this.entries,
                [entry.id]: {
                    open: false,
                    active: false,
                    ...entry
                }
            }
        });
    }

    updateEntry(id, stateMods) {
        this.setState({
            entries: this.entries = {
                ...this.state.entries,
                [id]: {
                    ...this.state.entries[id],
                    ...stateMods
                }
            }
        });
    }

    removeEntry(id) {
        // eslint-disable-next-line no-unused-vars
        const { [id]: toRemove, ...rest } = this.state.entries;
        this.setState({ entries: this.entries = rest });
    }

    setActiveEntries(openActive = false) {
        const activeId = (childEntry, entries, previous = []) => {
            if (childEntry.parentId) {
                const parentEntry = entries[childEntry.parentId];
                const activeIds = [...previous, parentEntry.id];
                return activeId(parentEntry, entries, activeIds);
            }
            return previous;
        }
        
        const activeChild = _.find(this.state.entries, (entry) => {
            const { pathname } = this.props.location;

            const noTailSlashLocation = pathname[pathname.length - 1] === '/' && pathname.length > 1 ?
                pathname.replace(/\/$/, '') : pathname;

            return entry.exact ?
                entry.url === noTailSlashLocation :
                _.includes(noTailSlashLocation, entry.url)
        });

        if (activeChild) {
            const activeEntries = [...activeId(activeChild, this.entries), activeChild.id];

            this.setState({
                entries: this.entries = _.mapValues(this.entries, (entry) => {
                    const isActive = _.includes(activeEntries, entry.id);

                    return {
                        ...entry,
                        active: isActive,
                        open: openActive ? (!entry.url && isActive) : entry.open
                    };
                })
            });
        }
    }

    componentDidMount() {
        this.sidebarAnimation = new Common.SideMenuAnimate();
        this.sidebarAnimation.assignParentElement(
            this.containerRef.current
        ); 
        
        setTimeout(() => {
            this.setActiveEntries(true);
        }, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setActiveEntries();
        }
    }

    componentWillUnmount() {
        if (this.sidebarAnimation) {
            this.sidebarAnimation.destroy();
        }
    }

    render() {
        const isSlim = this.props.slim || (
            this.props.pageConfig.sidebarSlim &&
            this.props.pageConfig.sidebarCollapsed && (
                this.props.pageConfig.screenSize === 'lg' ||
                this.props.pageConfig.screenSize === 'xl'
            )
        );
        const sidebarMenuClass = classNames('sidebar-menu', {
            'sidebar-menu--slim': isSlim,
            'sidebar-menu--disabled': this.props.disabled
        });

        return (
            <MenuContext.Provider
                value={{
                    entries: this.state.entries,
                    addEntry: this.addEntry.bind(this),
                    updateEntry: this.updateEntry.bind(this),
                    removeEntry: this.removeEntry.bind(this)
                }}
            >
            <ul className={ sidebarMenuClass } ref={ this.containerRef }>
            {
                React.Children.map(this.props.children, (child) => {
                    return child ? 
                        <MenuContext.Consumer>
                          {
                              (ctx) => React.cloneElement(child, {
                                  ...ctx,
                                  currentUrl: this.props.location.pathname,
                                  slim: isSlim
                              })
                          }
                      </MenuContext.Consumer> : null;                    
                })
            }
            </ul>
            </MenuContext.Provider>
        )
    }
}

const RouterSidebarMenu = withPageConfig(withRouter(SidebarMenu));

export {
    RouterSidebarMenu as SidebarMenu
};
