import React from 'react';
import _ from 'lodash';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class MenuAlignment extends React.Component {
    state = {
        align: 'justify',
    };
  
    render() {
        const {align} = this.state;
        const radios = [
            {label: 'Justify (default)', value: 'justify'},
            {label: 'Align left', value: 'left'},
            {label: 'Align right', value: 'right'},
        ];
    
        return (
            <React.Fragment>
                <Typeahead
                    align={align}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />
                <FormGroup className="mt-2">
                {
                    _.map(radios, ({ label, value }) => (
                        <CustomInput
                            checked={align === value}
                            key={value || 'default'}
                            onChange={() => this.setState({align: value})}
                            type="radio"
                            value={value}
                            id={`input-align-${value}`}
                            label={ label }
                        />
                    ))
                }
                </FormGroup>
            </React.Fragment>
        );
    }
}
