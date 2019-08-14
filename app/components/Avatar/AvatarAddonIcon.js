import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import avatarColors from './../../colors.scss';

const AvatarAddonIcon = (props) => {
    const addOnClass = classNames({
        'avatar__icon__inner': props.small
    }, avatarColors[`fg-color--${ props.color }`]);

    return (
        <i className={ classNames(addOnClass, props.className) }></i>
    );
};
AvatarAddonIcon.propTypes = {
    small: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string
};
AvatarAddonIcon.defaultProps = {
    color: "success"
};
AvatarAddonIcon.addOnId = "avatar--icon";

export { AvatarAddonIcon };