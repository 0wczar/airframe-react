import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export const CustomSelections = () => (
    <Typeahead
        allowNew
        multiple
        newSelectionPrefix="Add a new item: "
        options={[]}
        placeholder="Type anything..."
    />
);
