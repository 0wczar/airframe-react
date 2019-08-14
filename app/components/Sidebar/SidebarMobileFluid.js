import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarMobileFluid = (props) => {
    const wrapClass = classNames("sidebar__mobile-fluid", props.className);

    return (
        <div className={ wrapClass }>
            { props.children }
        </div>
    );
};

SidebarMobileFluid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export {
    SidebarMobileFluid
};
