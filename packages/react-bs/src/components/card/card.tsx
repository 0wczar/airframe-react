import React from 'react';
import {
    CardProps as BsCardProps,
    Card as BsCard
} from 'reactstrap';
import cn from 'classnames';

export interface CardProps extends BsCardProps {
    type?: 'none'
        | 'border-dash'
        | 'border-dot'
        | 'border'
        | 'shadow',
    color?: string,
    className?: string,
    children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
    type,
    color,
    className,
    children,
    ...cardProps
}) => {
    const cardClass = cn(className,
        'custom-card',
        `custom-card--${ type }`,
        color && `custom-card--color-${ color }`
    );
    return (
        <BsCard className={ cardClass } { ...cardProps }>
            { children }
        </BsCard>
    );
}
