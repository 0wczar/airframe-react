import { createContext } from 'react';

export const AccordionContext = createContext<{
    onToggle: () => void,
    isOpen: boolean
}>({
    onToggle: () => { throw new TypeError('onToggle not provided by conext') },
    isOpen: false,
});
