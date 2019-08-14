import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import faker from 'faker/locale/en_US';

import classes from './LargeTable.scss';
import { Card, CardHeader } from './../../../../components';

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

const data = _.times(500, (index) => ({
    id: index,
    name: faker.commerce.productName(),
    price: Math.round(2000 + Math.random() * 500)
}));

const expandRow = {
    showExpandColumn: true,
    renderer: function ExtendedRowRender(row) {
        return (
            <div>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        );
    },
    expandHeaderColumnRenderer: ({ isAnyExpands }) => isAnyExpands ? (
            <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
        ) : (
            <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
        ),
    expandColumnRenderer: ({ expanded }) =>
        expanded ? (
            <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
        ) : (
            <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
        )
};

export const LargeTable = () => (
    <React.Fragment>
        <Card>
            <CardHeader>
                Large Table
            </CardHeader>
            <div className={ classes['table-scroll-wrap'] }>
                <BootstrapTable
                    classes="table-responsive-sm"                
                    keyField='id'
                    data={ data }
                    columns={ columns }
                    bordered={ false }
                    selectRow={ { mode: 'checkbox', clickToSelect: true } }
                    expandRow={ expandRow }    
                />
            </div>
        </Card>
    </React.Fragment>
);
