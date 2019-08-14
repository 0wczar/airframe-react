import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownMenu } from 'reactstrap';

export const ExtendedDropdown = ({ className, ...otherProps }) => {
    const classes = classNames(
        className,
        'extended-dropdown'
    );
    return (
        <DropdownMenu className={ classes } { ...otherProps } />
    );
}
ExtendedDropdown.propTypes = {
    className: PropTypes.string,
};
