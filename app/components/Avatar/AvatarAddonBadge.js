import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge } from 'reactstrap';

const AvatarAddonBadge = (props) => {
    const { children, ...badgeProps } = props;

    return (
        <Badge {...badgeProps}>
            { children }
        </Badge>
    );
};
AvatarAddonBadge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
AvatarAddonBadge.addOnId = "avatar--badge";

export { AvatarAddonBadge };