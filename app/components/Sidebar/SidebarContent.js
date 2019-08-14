import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from './../../common';

export class SidebarContent extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        slim: PropTypes.bool,
        collapsed: PropTypes.bool,
        animationsDisabled: PropTypes.bool,
        pageConfig: PropTypes.object
    }

    sidebarRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            entryAnimationFinished: false,
        };
    }

    componentDidMount() {
        this.sidebarEntryAnimate = new Common.SidebarEntryAnimate();
        this.slimSidebarAnimate = new Common.SlimSidebarAnimate();
        this.slimMenuAnimate = new Common.SlimMenuAnimate();

        this.sidebarEntryAnimate.assignParentElement(this.sidebarRef.current);
        this.slimSidebarAnimate.assignParentElement(this.sidebarRef.current);
        this.slimMenuAnimate.assignSidebarElement(this.sidebarRef.current);

        this.sidebarEntryAnimate.executeAnimation()
            .then(() => {
                this.setState({ entryAnimationFinished: true });
            });
    }

    componentWillUnmount() {
        this.sidebarEntryAnimate.destroy();
        this.slimSidebarAnimate.destroy();
        this.slimMenuAnimate.destroy();
    }

    render() {
        const {
            animationsDisabled,
            collapsed,
            pageConfig,
            slim,
            children,
        } = this.props;

        const sidebarClass = classNames('sidebar', 'sidebar--animations-enabled', {
            'sidebar--slim': slim || pageConfig.sidebarSlim,
            'sidebar--collapsed': collapsed || pageConfig.sidebarCollapsed,
            'sidebar--animations-disabled': animationsDisabled || pageConfig.animationsDisabled,
            'sidebar--animate-entry-complete': this.state.entryAnimationFinished,
        });

        return (
            <div className={ sidebarClass } ref={ this.sidebarRef }>
                { children }
            </div>
        );
    }
}