import React from 'react';
import _ from 'lodash';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    InputGroup,
    InputGroupAddon,
    FormGroup,
    Button
} from './../../../../components';
import options from './exampleData';

const getInitialState = () => ({
    index: Math.floor(Math.random() * options.length),
    selected: [],
});
  
export class FormExample extends React.Component {
    state = getInitialState();
  
    render() {
        const {index, selected} = this.state;
        const state = options[index];

        let isInvalid;
        let isValid;

        if (selected.length) {
            const isMatch = selected[0].name === state.name;

            // BS4 validation
            isInvalid = !isMatch;
            isValid = isMatch;
        }

        return (
            <React.Fragment>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                                The capital of {state.name} is
                            </span>
                        </InputGroupAddon>
                        <Typeahead
                            isInvalid={isInvalid}
                            isValid={isValid}
                            labelKey="capital"
                            onChange={(selected) => this.setState({selected})}
                            options={_.sortBy(options, 'capital')}
                            placeholder="Select a capital..."
                            selected={selected}
                        />
                        <InputGroupAddon addonType="append">
                            <Button
                                className="btn-outline-secondary"
                                onClick={() => this.setState(getInitialState())}
                            >
                                Play Again
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </React.Fragment>
        );
    }
}
