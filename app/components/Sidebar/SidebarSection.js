import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarSection = (props) => {
    const sectionClass = classNames("sidebar__section", {
        'sidebar__section--fluid': props.fluid,
        'sidebar__section--cover': props.cover
    }, props.className);

    return (
        <div className={ sectionClass }>
            { props.children }
        </div>
    );
};

SidebarSection.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool,
    cover: PropTypes.bool,
    className: PropTypes.string
};

export {
    SidebarSection
};
