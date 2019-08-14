import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import { GithubMenuItem } from './GithubMenuItem';
import { makeAndHandleRequest } from './utils';

export class AsyncSearch extends React.Component {
    state = {
        allowNew: false,
        isLoading: false,
        multiple: false,
        options: [],
    };
  
    render() {
        return (
            <React.Fragment>
                <AsyncTypeahead
                    {...this.state}
                    labelKey="login"
                    minLength={3}
                    onSearch={this._handleSearch}
                    placeholder="Search for a Github user..."
                    renderMenuItemChildren={(option) => (
                        <GithubMenuItem key={option.id} user={option} />
                    )}
                />
                <FormGroup className="mt-2">
                    {this._renderCheckboxes()}
                </FormGroup>
            </React.Fragment>
        );
    }
  
    _renderCheckboxes() {
        const checkboxes = [
            {label: 'Multi-Select', name: 'multiple'},
            {label: 'Allow custom selections', name: 'allowNew'},
        ];
    
        return checkboxes.map(({label, name}) => (
            <CustomInput
                checked={this.state[name]}
                key={name}
                name={name}
                onChange={this._handleChange}
                type="checkbox"
                id={`control-${name}`}
                label={label}
            />
        ));
    }
  
    _handleChange = (e) => {
        const {checked, name} = e.target;
        this.setState({[name]: checked});
    }
  
    _handleSearch = (query) => {
        this.setState({isLoading: true});

        makeAndHandleRequest(query)
            .then(({options}) => {
                this.setState({
                    isLoading: false,
                    options,
                });
            });
    }
}
