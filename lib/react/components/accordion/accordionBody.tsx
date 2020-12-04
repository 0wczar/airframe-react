import React, { useContext } from 'react';
import cn from 'classnames';
import { Collapse, CardBody } from 'reactstrap';

import { AccordionContext } from './accordionContext';

export interface AccordionBodyProps {
    children?: React.ReactNode,
    className?: string,
    style?: React.StyleHTMLAttributes<HTMLDivElement>,
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({
    children,
    className,
    style
}) => {
    const {
        isOpen,
    } = useContext(AccordionContext);

    return (
        <Collapse isOpen={ isOpen }>
            <CardBody
                className={ cn(className, 'pt-0') }
                style={ style }
            >
                { children }
            </CardBody>
        </Collapse>
    );
}
