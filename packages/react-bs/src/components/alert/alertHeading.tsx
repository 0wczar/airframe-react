import React, { useContext } from 'react';
import cn from 'classnames';

import { AlertContext } from './alertContext';

export interface AlertHeadingProps {
    children: string,
    component?: string | React.ComponentType<{ className?: string }>,
    className?: string
}

export const AlertHeading: React.FC<AlertHeadingProps> = ({ children, component, className }) => {
    const Component = component ?? 'span';

    const { inline } = useContext(AlertContext);

    return (
        <Component
            className={ cn(className, 'alert__heading', {
                'alert__heading--inline': inline
            }) }
        >
            { children }
        </Component>
    );
}
