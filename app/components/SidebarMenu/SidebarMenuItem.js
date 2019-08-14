import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import uuid from 'uuid/v4';

import { MenuContext } from './MenuContext';

/**
 * Renders a collapse trigger or a ReactRouter Link 
 */
const SidebarMenuItemLink = (props) => (
    (props.to || props.href) ? (
        props.to ? (
            <Link to={ props.to } className={`${props.classBase}__entry__link`}>
                { props.children }
            </Link>
        ) : (
            <a
                href={ props.href }
                target="_blank"
                rel="noopener noreferrer"
                className={`${props.classBase}__entry__link`}
            >
                { props.children }
            </a>
        )
        
    ) : (
        <a
            href="javascript:;"
            className={`${props.classBase}__entry__link`}
            onClick={ () => props.onToggle() }
        >
            { props.children }
        </a>
    )
)
SidebarMenuItemLink.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    active: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.node,
    classBase: PropTypes.string
}

/**
 * The main menu entry component
 */
export class SidebarMenuItem extends React.Component {
    static propTypes = {
        // MenuContext props
        addEntry: PropTypes.func,
        updateEntry: PropTypes.func,
        removeEntry: PropTypes.func,
        entries: PropTypes.object,
        // Provided props
        parentId: PropTypes.string,
        children: PropTypes.node,
        isSubNode: PropTypes.bool,
        currentUrl: PropTypes.string,
        slim: PropTypes.bool,
        // User props
        icon: PropTypes.node,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        to: PropTypes.string,
        href: PropTypes.string,
        exact: PropTypes.bool,
        noCaret: PropTypes.bool,
    }

    static defaultProps = {
        exact: true
    }

    constructor(props) {
        super(props);

        this.id = uuid();
    }

    componentDidMount() {
        const entry = {
            id: this.id,
            parentId: this.props.parentId,
            exact: !!this.props.exact
        };
        
        if (this.props.to) {
            entry.url = this.props.to;
        }

        this.props.addEntry(entry);
    }

    componentWillUnmount() {
        this.props.removeEntry(this.id);
    }

    getEntry() {
        return this.props.entries[this.id];
    }

    toggleNode() {
        const entry = this.getEntry();

        this.props.updateEntry(this.id, { open: !entry.open });
    }

    render() {
        const entry = this.getEntry();
        const classBase = this.props.isSubNode ? "sidebar-submenu" : "sidebar-menu";
        const itemClass = classNames(`${classBase}__entry`, {
            [`${classBase}__entry--nested`]: !!this.props.children,
            'open': entry && entry.open,
            'active': entry && entry.active
        });

        return (
            <li
                className={classNames(itemClass, {
                    'sidebar-menu__entry--no-caret': this.props.noCaret,
                })}
            >
                <SidebarMenuItemLink
                    to={ this.props.to || null }
                    href={ this.props.href || null }
                    onToggle={ this.toggleNode.bind(this) }
                    classBase={ classBase }
                >
                    {
                        this.props.icon && React.cloneElement(this.props.icon, {
                            className: classNames(
                                this.props.icon.props.className,
                                `${classBase}__entry__icon`
                            )
                        })
                    }
                    {
                        typeof this.props.title === 'string' ?
                            <span>{ this.props.title }</span> :
                            this.props.title
                    }
                </SidebarMenuItemLink>
                {
                    this.props.children && (
                        <ul className="sidebar-submenu">
                        {
                            React.Children.map(this.props.children, (child) => (
                                <MenuContext.Consumer>
                                {
                                    (ctx) => React.cloneElement(child, {
                                        isSubNode: true,
                                        parentId: this.id,
                                        currentUrl: this.props.currentUrl,
                                        slim: this.props.slim,
                                        ...ctx
                                    })
                                }
                                </MenuContext.Consumer>
                            ))
                        }
                        </ul>
                    )
                }
            </li>
        );
    }
}
