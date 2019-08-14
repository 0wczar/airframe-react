import React from 'react';
import _ from 'lodash';
import { Highlighter, Menu, MenuItem, Token, Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class RenderingExample extends React.Component {
    state = {
      selectedOption: 'renderMenu',
    };
  
    render() {
        const {selectedOption} = this.state;
        const props = {};
        const radios = [
            {label: 'Custom menu', value: 'renderMenu'},
            {label: 'Custom menu item contents', value: 'renderMenuItemChildren'},
            {label: 'Custom token', value: 'renderToken'},
        ];
    
        switch (selectedOption) {
            case radios[0].value:
                props.renderMenu = this._renderMenu;
            break;
            case radios[1].value:
                props.renderMenuItemChildren = this._renderMenuItemChildren;
            break;
            case radios[2].value:
                props.multiple = true;
                props.renderToken = this._renderToken;
            break;
        }
  
        return (
            <React.Fragment>
                <Typeahead
                    {...props}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />
                <FormGroup className="mt-2">
                    {radios.map(({label, value}) => (
                        <CustomInput
                            checked={selectedOption === value}
                            key={value}
                            onChange={() => this.setState({selectedOption: value})}
                            type="radio"
                            value={value}
                            id={`rendering-type-${value}`}
                            label={label}
                        />
                    ))}
                </FormGroup>
            </React.Fragment>
        );
    }
  
    _renderMenu(results, menuProps) {
        let idx = 0;
        const grouped = _.groupBy(results, (r) => r.region);
        const items = Object.keys(grouped).sort().map((region) => {
            return [
                !!idx && <Menu.Divider key={`${region}-divider`} />,
                <Menu.Header key={`${region}-header`}>
                    {region}
                </Menu.Header>,
                _.map(grouped[region], (state) => {
                    const item =
                    <MenuItem key={idx} option={state} position={idx}>
                        <Highlighter search={menuProps.text}>
                        {state.name}
                        </Highlighter>
                    </MenuItem>;
        
                    idx++;
                    return item;
                }),
            ];
        });
  
        return <Menu {...menuProps}>{items}</Menu>;
    }
  
    _renderMenuItemChildren(option, props) {
        return [
            <Highlighter key="name" search={props.text}>
                {option.name}
            </Highlighter>,
            <div key="population">
                <small>
                    Population: {option.population.toLocaleString()}
                </small>
            </div>,
        ];
    }
  
    _renderToken(option, props, index) {
        return (
            <Token
                key={index}
                onRemove={props.onRemove}>
                {`${option.name} (Pop: ${option.population.toLocaleString()})`}
            </Token>
        );
    }
}
