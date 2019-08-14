import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SidebarShowSlim = ({ children }) => {
    return React.Children.map(children, (child) =>
        React.cloneElement(child, {
            className: classNames(
                child.props.className,
                'sidebar__show-slim'
            )  
        })
    );
};

SidebarShowSlim.propTypes = {
    children: PropTypes.node,
};
