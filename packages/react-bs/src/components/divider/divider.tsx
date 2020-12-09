import React from 'react';
import cn from 'classnames';

export interface DividerProps {
    position?: 'left' | 'center' | 'right',
    children?: string | React.ReactNode,
    className?: string,
}

export const Divider: React.FC<DividerProps> = ({
    position,
    children,
    className,
    ...otherProps
}) => {
    const dividerClass = cn({
        'af__divider--center': position === 'center',
        'af__divider--right': position === 'right'
    }, 'af__divider', className);

    return (
        <div className={ dividerClass } { ...otherProps }>
            { children }
        </div>
    );
}
