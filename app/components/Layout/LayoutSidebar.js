import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutSidebar = (props) => {
    const sidebarClass = classNames("layout__sidebar", {
        "layout__sidebar--slim": props.sidebarSlim,
        "layout__sidebar--collapsed": props.sidebarCollapsed
    });

    return (
        <div className={ sidebarClass }>
            { props.children }
        </div>
    );
};

LayoutSidebar.propTypes = {
    children: PropTypes.node,
    sidebarSlim: PropTypes.bool,
    sidebarCollapsed: PropTypes.bool
};
LayoutSidebar.layoutPartName = "sidebar";

export {
    LayoutSidebar
};
