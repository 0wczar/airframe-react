import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import faker from 'faker/locale/en_US';

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

export const BorderedTable = () => (
    <React.Fragment>
        <h6 className="mt-0">
            Bordered Table
        </h6>
        <BootstrapTable
            classes='table-responsive-sm'
            keyField='id'
            data={ data }
            columns={ columns }
            bordered
        />
    </React.Fragment>
);
