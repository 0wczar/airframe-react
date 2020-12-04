import React from 'react';

export function withDefaultProps<TDefaultProps>(defaultProps: TDefaultProps) {
    return function <TProps extends TDefaultProps>(Component: React.ComponentType<TProps>) {
        return function DefaultPropsWrap(props: TProps) {
            return (
                <Component { ...{ ...defaultProps, ...props } } />
            );
        }
    }
}
