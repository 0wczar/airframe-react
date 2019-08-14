import React from 'react';
import PropTypes from 'prop-types';

const SidebarClose = (props) => (
    <div className="sidebar__close">
        { props.children }
    </div>
);
SidebarClose.propTypes = {
    children: PropTypes.node
};

export { SidebarClose };