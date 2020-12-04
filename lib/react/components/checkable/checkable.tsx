import React from 'react';

import { CustomizableComponent } from '@types';

import { CheckableContext } from './checkableContext';
import { withDefaultProps } from 'components/common';

export type CheckableProps = CustomizableComponent & CheckableDefaultProps & {
    defaultChecked?: boolean,
    checked?: boolean,
    onChange?: (isChecked: boolean) => void,
}

type CheckableDefaultProps = typeof defaultProps;

const defaultProps = {
    component: 'div',
}

const Checkable = ({ defaultChecked, checked, onChange, component: Component, ...otherProps }: CheckableProps) => (
    <CheckableContext.Provider value={{ defaultChecked, checked, onChange }}>
        <Component { ...otherProps } />
    </CheckableContext.Provider>
);

const CheckableExtended = withDefaultProps(defaultProps)(Checkable);

export { CheckableExtended as Checkable }
