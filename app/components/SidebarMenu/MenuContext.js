import React from 'react';

const MenuContext = React.createContext({
    entries: { },
    addEntry: () => { },
    removeEntry: () => { }
});

export { MenuContext };