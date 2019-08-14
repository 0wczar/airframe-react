import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class CustomFilteringExample extends React.Component {
    state = {
      filterBy: 'callback',
    };
  
    render() {
        const {filterBy} = this.state;
        const radios = [
            {label: 'Use callback', value: 'callback'},
            {label: 'Use data fields', value: 'fields'},
        ];
    
        const filterByCallback = (option, props) => {
            return (
                option.capital.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
                option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
            );
        };
    
        const filterByFields = ['capital', 'name'];
    
        return (
            <React.Fragment>
                <Typeahead
                    filterBy={filterBy === 'callback' ? filterByCallback : filterByFields}
                    labelKey="name"
                    options={options}
                    placeholder="Filter by state name or capital..."
                    renderMenuItemChildren={(option) => (
                        <div>
                            {option.name}
                            <div>
                                <small>Capital: {option.capital}</small>
                            </div>
                        </div>
                    )}
                />
                <FormGroup className="mt-2">
                {
                    radios.map(({label, value}) => (
                        <CustomInput
                            checked={filterBy === value}
                            key={value}
                            onChange={() => this.setState({filterBy: value})}
                            type="radio"
                            value={value}
                            id={`capital-option-${value}`}
                            label={label}
                        />
                    ))
                }
                </FormGroup>
            </React.Fragment>
        );
    }
}