import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import faker from 'faker/locale/en_US';

import { CustomSearch } from './CustomSearch';

const columns = [
    {
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }
];

const data = _.times(5, (index) => ({
    id: index,
    name: faker.commerce.productName(),
    price: Math.round(2000 + Math.random() * 500)
}));

export const ClearSearch = () => (
    <ToolkitProvider
        keyField="id"
        data={ data }
        columns={ columns }
        search
    >
    {
        props => (
            <React.Fragment>
                <div className="d-flex align-items-center justify-content-between">
                <h6 className="mt-0">
                        Table Search with Clear
                    </h6>

                    <div>
                        <CustomSearch
                            className="mb-2"
                            { ...props.searchProps }
                        />
                    </div>
                </div>
                <BootstrapTable
                    classes="table-responsive-sm"
                    bordered={ false }
                    { ...props.baseProps }
                />
            </React.Fragment>
        )
    }
    </ToolkitProvider>
);
