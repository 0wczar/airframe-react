import React from 'react';
import _ from 'lodash';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';

export class PaginationExample extends React.Component {
    state = {
      paginate: true,
    };
  
    render() {
        const {paginate} = this.state;
  
        return (
            <React.Fragment>
                <Typeahead
                    onPaginate={() => console.log('Results paginated')}
                    options={_.range(0, 1000).map((o) => o.toString())}
                    paginate={paginate}
                    placeholder="Pick a number..."
                />
                <FormGroup className="mt-2">
                    <CustomInput
                        checked={paginate}
                        onChange={(e) => this.setState({paginate: !!e.target.checked})}
                        type="checkbox"
                        id="enable-pagination"
                        label="Paginate results"
                    />
                </FormGroup>
            </React.Fragment>
        );
    }
}
