import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import { FormGroup, CustomInput } from './../../../../components';

export class FilteringExample extends React.Component {
    state = {
        caseSensitive: false,
        ignoreDiacritics: true,
    };
  
    render() {
        const {caseSensitive, ignoreDiacritics} = this.state;
    
        return (
            <React.Fragment>
                <Typeahead
                    {...this.state}
                    options={[
                        'Warsaw',
                        'Kraków',
                        'Łódź',
                        'Wrocław',
                        'Poznań',
                        'Gdańsk',
                        'Szczecin',
                        'Bydgoszcz',
                        'Lublin',
                        'Katowice',
                        'Białystok',
                        'Gdynia',
                        'Częstochowa',
                        'Radom',
                        'Sosnowiec',
                        'Toruń',
                        'Kielce',
                        'Gliwice',
                        'Zabrze',
                        'Bytom',
                        'Olsztyn',
                        'Bielsko-Biała',
                        'Rzeszów',
                        'Ruda Śląska',
                        'Rybnik',
                    ]}
                    placeholder="Cities in Poland..."
                />
                <FormGroup className="mt-2">
                    <CustomInput
                        checked={caseSensitive}
                        onChange={(e) => this.setState({caseSensitive: e.target.checked})}
                        type="checkbox"
                        id="case-sensitive-enabled"
                        label="Case-sensitive filtering"
                    />
                    <CustomInput
                        checked={!ignoreDiacritics}
                        onChange={(e) => {
                            this.setState({ignoreDiacritics: !e.target.checked});
                        }}
                        type="checkbox"
                        id="ignore-diactrical-enabled"
                        label="Don't ignore diacritical marks"
                    />
                </FormGroup>
            </React.Fragment>
        );
    }
  }