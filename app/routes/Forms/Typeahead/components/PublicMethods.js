import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    ButtonToolbar,
    Button
} from './../../../../components';
import data from './exampleData';

export class PublicMethods extends React.Component {
    _typeahead = React.createRef();

    render() {
        return (
            <React.Fragment>
                <Typeahead
                    labelKey="name"
                    multiple
                    options={data}
                    placeholder="Choose a state..."
                    ref={this._typeahead}
                    selected={data.slice(0, 4)}
                />
                <ButtonToolbar className="mt-2">
                    <Button
                        outline
                        color="secondary"
                        onClick={() => this._typeahead.getInstance().clear()}
                        className="mr-2"
                    >
                        Clear
                    </Button>
                    <Button
                        outline
                        color="secondary"
                        onClick={() => this._typeahead.getInstance().focus()}
                        className="mr-2"
                    >
                        Focus
                    </Button>
                    <Button
                        outline
                        color="secondary"
                        onClick={() => {
                            const instance = this._typeahead.getInstance();
                            instance.focus();
                            setTimeout(() => instance.blur(), 1000);
                        }}
                        className="mr-2"
                    >
                        Focus, then blur after 1 second
                    </Button>
                </ButtonToolbar>
            </React.Fragment>
        );
    }
}
