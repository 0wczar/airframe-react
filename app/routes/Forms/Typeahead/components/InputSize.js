import React from 'react';
import _ from 'lodash';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class InputSize extends React.Component {
    state = {
        bsSize: undefined
    };
  
    render() {
        const {bsSize} = this.state;
        const radios = [
            {label: 'Small', value: 'small'},
            {label: 'Default', value: undefined},
            {label: 'Large', value: 'large'},
        ];
    
        return (
            <React.Fragment>
                <Typeahead
                    bsSize={bsSize}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />
                <FormGroup className="mt-2">
                {
                    _.map(radios, ({ label, value }) => (
                        <CustomInput
                            checked={bsSize === value}
                            key={value || 'default'}
                            onChange={() => this.setState({bsSize: value})}
                            type="radio"
                            value={value}
                            id={`input-size-${label}`}
                            label={ label }
                        />
                    ))
                }
                </FormGroup>
            </React.Fragment>
        );
    }
}
