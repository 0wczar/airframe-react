import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import options from './exampleData';

export const ControllingSelections = () => (
    <Typeahead
        clearButton
        defaultSelected={options.slice(0, 5)}
        labelKey="name"
        multiple
        options={options}
        placeholder="Choose a state..."
    />
)
