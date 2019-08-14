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
        text: 'Product Name',
    }, {
        dataField: 'price',
        text: 'Product Price',
    }
];

const data = _.times(5, (index) => ({
    id: index,
    name: faker.commerce.productName(),
    price: Math.round(2000 + Math.random() * 500)
}));

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
};

export const SelectAll = () => (
    <React.Fragment>
        <h6 className="mt-0">
            Select All
        </h6>
        <BootstrapTable
            classes="table-responsive"
            keyField='id'
            data={ data }
            columns={ columns }
            bordered={ false }
            selectRow={ selectRow }
        />
    </React.Fragment>
);
