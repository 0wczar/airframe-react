import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class BasicExample extends React.Component {
    state = {
        multiple: false,
    };
  
    render() {
        const {multiple} = this.state;
    
        return (
            <React.Fragment>
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    placeholder="Choose a state..."
                />
                <FormGroup className="mt-2">
                    <CustomInput
                        checked={multiple}
                        onChange={(e) => this.setState({multiple: e.target.checked})}
                        type="checkbox"
                        id="basic-example-multiselect"
                        label="Multi-Select"
                    />
                </FormGroup>
            </React.Fragment>
        );
    }
}
