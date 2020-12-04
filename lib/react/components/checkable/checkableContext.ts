import { createContext } from 'react';

export const CheckableContext = createContext<{
    checked?: boolean,
    defaultChecked?: boolean,
    onChange?: (isChecked: boolean) => void
}>({});
