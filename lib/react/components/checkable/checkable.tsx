import React, { useCallback, memo } from 'react';
import { CustomInput } from 'reactstrap';
import cn from 'classnames';

import { CustomizableComponent } from '@types';

export type CheckableRenderFuncParams = {
    checked: boolean,
    onChange: (isChecked: boolean) => void,
    type: 'radio' | 'checkbox'
};

export type CheckableProps = CustomizableComponent & {
    className?: string,
    type?: 'radio' | 'checkbox',
    defaultChecked?: boolean,
    checked?: boolean,
    onChange?: (isChecked: boolean) => void,
    children: (params: CheckableRenderFuncParams & {
        inputElement: React.ReactNode
    }) => React.ReactNode,
    renderInput?: (params: CheckableRenderFuncParams) => React.ReactNode;
}

export const Checkable = memo(({
    className,
    defaultChecked,
    checked,
    onChange,
    type,
    component,
    children,
    renderInput,
    ...otherProps
}: CheckableProps) => {
    const clickHandler = useCallback(() => onChange(!checked), [onChange, checked]);

    const inputRender = renderInput || (({ checked, onChange, type }) => {
        const changeHandler = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
            onChange(ev.target.checked);
        }, []);

        return (
            <CustomInput
                type={ type }
                onChange={ changeHandler }
                checked={ checked ?? defaultChecked }
            />
        );
    });

    const inputElement = inputRender({ checked, onChange, type });

    const Component = component ?? 'div';

    return (
        <Component
            role="checkbox"
            aria-checked={ checked ? 'true' : 'false' }
            onClick={ clickHandler }
            className={ cn(className, 'af--checkable') }
            { ...otherProps }
        >
            { children({ checked: checked ?? defaultChecked, onChange, type, inputElement }) }
        </Component>
    );
});

