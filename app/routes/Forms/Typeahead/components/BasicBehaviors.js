import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'lodash';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class BasicBehaviors extends React.Component {
    state = {
        disabled: false,
        dropup: false,
        flip: false,
        highlightOnlyResult: false,
        minLength: 0,
        selectHintOnEnter: false
    };

    render() {
        const {
            disabled,
            dropup,
            emptyLabel,
            flip,
            highlightOnlyResult,
            minLength,
            selectHintOnEnter,
        } = this.state;
    
        const checkboxes = [
            /* eslint-disable max-len */
            {checked: disabled, label: 'Disable the input', name: 'disabled'},
            {checked: dropup, label: 'Dropup menu', name: 'dropup'},
            {checked: flip, label: 'Flip the menu position when it reaches the viewport bounds', name: 'flip'},
            {checked: !!minLength, label: 'Require minimum input before showing results (2 chars)', name: 'minLength'},
            {checked: emptyLabel, label: 'Hide the menu when there are no results', name: 'emptyLabel'},
            {checked: selectHintOnEnter, label: 'Select the hinted result by pressing enter', name: 'selectHintOnEnter'},
            {checked: highlightOnlyResult, label: 'Highlight the only result', name: 'highlightOnlyResult'},
            /* eslint-enable max-len */
        ];

        return (
            <React.Fragment>
                <Typeahead
                    {...this.state}
                    emptyLabel={emptyLabel ? '' : undefined}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />
                <FormGroup className="mt-2">
                {
                    _.map(checkboxes, checkbox => (
                        <CustomInput
                            {...checkbox}
                            key={checkbox.name}
                            onChange={this._handleChange}
                            type="checkbox"
                            id={`basic-behaviors-${checkbox.name}`}
                        />
                    ))
                }
                </FormGroup>
                
            </React.Fragment>
        );
    }

    _handleChange = (e) => {
        const {checked, name} = e.target;
        const newState = {[name]: checked};

        if (name === 'minLength') {
            newState.minLength = checked ? 2 : 0;
        }

        this.setState(newState);
    }
}
