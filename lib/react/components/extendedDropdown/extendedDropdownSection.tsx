import React from 'react';
import cn from 'classnames';

interface ExtendedDropdownSectionProps {
    children?: string | React.ReactNode,
    list?: boolean,
    className?: string,
    component?: string | React.ComponentType<any>
}

export const ExtendedDropdownSection: React.FC<ExtendedDropdownSectionProps> = ({
    children,
    list,
    className,
    component,
    ...otherProps
}) => {
    const sectionClass = cn(
        'af__extended-dropdown__section', className, {
            'af__extended-dropdown__section--list': list
        }
    );
    const Component = component ?? 'div';

    return (
        <Component className={ sectionClass } { ...otherProps }>
            { children }
        </Component>
    );
}
