import React from 'react';
import cn from 'classnames';
import { DropdownMenu } from 'reactstrap';

interface ExtendedDropdownProps {
    className?: string
}

export const ExtendedDropdown: React.FC<ExtendedDropdownProps> = ({
    className,
    ...otherProps
}) => {
    const classes = cn(
        className,
        'af__extended-dropdown'
    );
    return (
        <DropdownMenu className={ classes } { ...otherProps } />
    );
}
