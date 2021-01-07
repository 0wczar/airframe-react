import React from 'react';

import { FaIconProps } from './faIcon';

export interface FaStackProps {
    children: React.ReactNode
}

export const FaStack: React.FC<FaStackProps> = ({ children }) => {
    const modifiedChildren =
        React.Children.toArray(children)
            .filter(child => React.isValidElement(child))
            .map((child: React.ReactElement<FaIconProps>, key) =>
                React.cloneElement(child, { stack: true, key })
            );
    return (
        <span className="fa-stack fa-2x">
            { modifiedChildren }
        </span>
    );
}
