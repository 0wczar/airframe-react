import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import faker from 'faker/locale/en_US';

import { randomArray } from './../../../../utilities';

const regions = [
    { value: 'Europe', label: 'Europe' },
    { value: 'North America', label: 'North America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Australia', label: 'Australia' },
];

const columns = [
    {
        dataField: 'id',
        text: 'Product ID',
        headerClasses: 'text-nowrap'
    }, {
        dataField: 'available',
        text: 'Available',
        editor: {
            type: Type.CHECKBOX,
            value: 'Y:N'
        },
        formatter: function AvailableFormatter(cell) {
            return cell === 'Y' ?
                <i className="fa fa-fw fa-check"></i> :
                <i className="fa fa-fw fa-times"></i>;
        },
        headerClasses: 'text-nowrap'
    }, {
        dataField: 'name',
        text: 'Product Name',
        editor: {
            type: Type.TEXT
        },
        headerClasses: 'text-nowrap'
    }, {
        dataField: 'description',
        text: 'Product Description',
        editor: {
            type: Type.TEXTAREA
        },
        style: {
            width: '40%'
        },
        headerClasses: 'text-nowrap'
    }, {
        dataField: 'price',
        text: 'Product Price',
        headerClasses: 'text-nowrap'
    }, {
        dataField: 'region',
        text: 'Region',
        headerClasses: 'text-nowrap',
        editor: {
            type: Type.SELECT,
            options: regions
        }
    }
];

const data = _.times(5, (index) => ({
    id: index,
    available: !Math.round(Math.random()) ? 'Y' : 'N',
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    price: Math.round(2000 + Math.random() * 500),
    region: randomArray(_.map(regions, 'value'))
}))

export const CellEdit = () => (
    <React.Fragment>
        <h6 className="mt-0">
            Cell Edit
        </h6>
        <BootstrapTable
            classes="table-responsive"
            keyField='id'
            data={ data }
            columns={ columns }
            bordered={ false }
            cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
        />
    </React.Fragment>
);
