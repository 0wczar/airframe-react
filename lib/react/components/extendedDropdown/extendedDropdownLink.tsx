import React, { useCallback, useContext } from 'react';

// Workaround - there is a problem with importing the Context via TS
const { DropdownContext } = require('reactstrap');

interface ExtendedDropdownLinkProps {
    children?: string | React.ReactNode,
    component?: string | React.ComponentType<any>
}

export const ExtendedDropdownLink: React.FC<ExtendedDropdownLinkProps> = ({
    children,
    component,
    ...otherProps
}) => {
    const LinkComponent = component ?? 'a';
    const { toggle } = useContext<{
        toggle: () => void
    }>(DropdownContext);

    const clickHandler = useCallback(() => toggle(), [toggle]);

    return (
        <LinkComponent { ...otherProps } onClick={ clickHandler }>
            { children }
        </LinkComponent>
    );
}
