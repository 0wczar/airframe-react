import { createContext } from 'react';

export const AlertContext = createContext<{
    color: string,
    inline: boolean
}>({
    color: 'primary',
    inline: false
});
