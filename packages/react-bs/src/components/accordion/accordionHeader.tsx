import React, { useContext, useCallback } from 'react';

import { AccordionContext } from './accordionContext';
import { CardHeader } from 'reactstrap';

export interface AccordionHeaderProps {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    style?: React.StyleHTMLAttributes<HTMLDivElement>;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    children,
    onClick,
    className,
    style
}) => {
    const { onToggle } = useContext(AccordionContext);

    const clickHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (onToggle) {
            onToggle();
        }
        if (onClick) {
            onClick(e);
        }
    }, [onClick, onToggle]);

    return (
        <CardHeader
            onClick={ clickHandler }
            className={ className }
            style={ style }
        >
            { children }
        </CardHeader>
    );
}
