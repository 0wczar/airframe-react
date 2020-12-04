import React, { useCallback, useState, useEffect } from 'react';
import cn from 'classnames';

import { Card } from '../card';

import { AccordionContext } from './accordionContext';

export interface AccordionProps {
    initialOpen?: boolean,
    onToggle?: (opened: boolean) => void,
    open?: boolean,
    children?: React.ReactNode,
    className?: string,
    style?: React.StyleHTMLAttributes<HTMLDivElement>
}

export const Accordion: React.FC<AccordionProps> = ({
    initialOpen,
    onToggle,
    open,
    children,
    className,
    style,
}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    
    const toggleHandler = useCallback(() => {
        if (!onToggle) {
            setIsOpen(!isOpen);
        } else {
            onToggle(!isOpen);
        }
    }, [isOpen, onToggle]);

    useEffect(() => {
        if (typeof open !== 'undefined' && typeof onToggle === 'undefined') {
            throw "Accordion: props.open has to be used combined with props.onToggle " +
                "use props.initialOpen to create an uncontrolled Accordion."
        }
    }, [open, onToggle]);

    return (
        <AccordionContext.Provider
            value={{
                onToggle: toggleHandler,
                isOpen: !onToggle ? isOpen : open
            }}
        >
            <Card className={ cn(className, 'card--accordion') } style={ style }>
                { children }
            </Card>
        </AccordionContext.Provider>
    )
}
