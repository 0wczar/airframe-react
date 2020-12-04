import React from 'react';
import cn from 'classnames';
import {
    CardHeader as BsCardHeader,
    CardHeaderProps as BsCardHeaderProps,
} from 'reactstrap';

export interface CardHeaderProps extends BsCardHeaderProps {
    type?: 'none'
    | 'border-dash'
    | 'border-dot'
    | 'border'
    | 'shadow',
    color?: string,
    className?: string,
    children?: React.ReactNode,
}

export const CardHeader: React.FC<CardHeaderProps> = ({
    type,
    color,
    className,
    children,
    ...cardHeaderProps
}) => {
    const cardHeaderClass = cn(className,
        'custom-card-header',
        type && `custom-card-header--${ type }`,
        color && `custom-card-header--color-${ color }`
    );

    return (
        <BsCardHeader className={ cardHeaderClass } { ...cardHeaderProps }>
            { children }
        </BsCardHeader>
    );
}
