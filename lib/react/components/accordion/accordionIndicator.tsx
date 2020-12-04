import React, { useContext } from 'react';
import cn from 'classnames';

import { AccordionContext } from './accordionContext';

export interface AccordionIndicatorProps {
    opened?: React.ReactElement<any>;
    closed?: React.ReactElement<any>;
    className?: string;
    style?: React.StyleHTMLAttributes<HTMLSpanElement>;
}

export const AccordionIndicator: React.FC<AccordionIndicatorProps> = ({
    opened,
    closed,
    className,
    style,
}) => {
    const { isOpen } = useContext(AccordionContext);

    const openElement = opened || <i className="fa fa-fw fa-minus" />;
    const closeElement = closed || <i className="fa fa-fw fa-plus" />;

    return isOpen ?
        React.cloneElement(openElement, {
            className: cn(className, openElement.props.className),
            style
        }) :
        React.cloneElement(closeElement, {
            className: cn(className, closeElement.props.className),
            style
        });
}
