import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import faker from 'faker/locale/en_US';

const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

const columns = [
    {
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true,
        sortCaret
    }, {
        dataField: 'price',
        text: 'Product Price',
        sort: true,
        sortCaret
    }
];

const data = _.times(10, (index) => ({
    id: index,
    name: faker.commerce.productName(),
    price: Math.round(2000 + Math.random() * 500)
}));

export const SortTable = () => (
    <React.Fragment>
        <h6 className="mt-0">
            Sort Table
        </h6>
        <BootstrapTable
            classes="table-responsive-sm"
            keyField='id'
            data={ data }
            columns={ columns }
            bordered={ false }
        />
    </React.Fragment>
);
