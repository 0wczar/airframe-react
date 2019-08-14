import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import moment from 'moment';
import _ from 'lodash';
import faker from 'faker/locale/en_US';

import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Row,
    Col
} from './../../../../components';
import { CustomExportCSV } from './CustomExportButton';
import { CustomSearch } from './CustomSearch';
import { randomArray, randomAvatar } from './../../../../utilities';

const generateRow = (id) => ({
    id,
    photo: randomAvatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: faker.name.jobType(),
    status: randomArray([
        'Active',
        'Suspended',
        'Waiting',
        'Unknown'
    ]),
    region: randomArray(['North', 'South', 'East', 'West']),
    earnings: 500 + Math.random() * 1000,
    earningsCurrencyIcon: randomArray([
        <i className="fa fa-fw fa-euro text-muted" key="cur_eur"></i>,
        <i className="fa fa-fw fa-dollar text-muted" key="cur_usd"></i>
    ]),
    lastLoginDate: faker.date.recent(),
    ipAddress: faker.internet.ip(),
    browser: 'Safari 9.1.1(11601.6.17)',
    os: 'OS X El Capitan',
    planSelected: randomArray(['Basic', 'Premium', 'Enterprise']),
    planEnd: faker.date.future()
});

const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
};

export class AdvancedTableB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: _.times(10, generateRow)
        }
    }

    handleAddRow() {
        const usersLength = this.state.users.length;

        this.setState({
            users: [
                generateRow(usersLength + 1),
                ...this.state.users
            ]
        })
    }

    createColumnDefinitions() {
        return [
            {
                dataField: 'photo',
                text: 'Photo',
                formatter: (cell) => (
                    <Avatar.Image src={ cell } />
                )
            }, {
                dataField: 'firstName',
                text: 'First Name',
                sort: true,
                sortCaret
            }, {
                dataField: 'lastName',
                text: 'Last Name',
                sort: true,
                sortCaret
            }, {
                dataField: 'role',
                text: 'Role',
                sort: true,
                sortCaret
            }, {
                dataField: 'status',
                text: 'Status',
                sort: true,
                sortCaret,
                formatter: (cell) => {
                    const color = (status) => {
                        const map = {
                            'Active': 'success',
                            'Suspended': 'danger',
                            'Waiting': 'info',
                            'Unknown': 'secondary'
                        };
                        return map[status];
                    }

                    return (
                        <Badge color={ color(cell) }>
                            { cell }
                        </Badge>
                    );
                }
            }, {
                dataField: 'region',
                text: 'Region',
                sort: true,
                sortCaret
            }, {
                dataField: 'earnings',
                text: 'Earnings',
                sort: true,
                sortCaret,
                formatter: (cell, row) => (
                    <span>
                        { row.earningsCurrencyIcon }
                        { _.isNumber(cell) && cell.toFixed(2) }
                    </span>
                )
            }
        ]; 
    }

    render() {
        const columnDefs = this.createColumnDefinitions();

        const expandRow = {
            renderer: row => (
                <Row>
                    <Col md={ 6 }>
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Last Login</dt>
                            <dd className="col-sm-6">{ moment(row.lastLoginDate).format('DD-MMM-YYYY') }</dd>

                            <dt className="col-sm-6 text-right">IP Address</dt>
                            <dd className="col-sm-6">{ row.ipAddress }</dd>

                            <dt className="col-sm-6 text-right">Browser</dt>
                            <dd className="col-sm-6">{ row.browser }</dd>
                        </dl>
                    </Col>
                    <Col md={ 6 }>
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Operating System</dt>
                            <dd className="col-sm-6">{ row.os }</dd>

                            <dt className="col-sm-6 text-right">Selected Plan</dt>
                            <dd className="col-sm-6">{ row.planSelected }</dd>

                            <dt className="col-sm-6 text-right">Plan Expiriation</dt>
                            <dd className="col-sm-6">{ moment(row.planEnd).format('DD-MMM-YYYY') }</dd>
                        </dl>
                    </Col>
                </Row>
            ),
            showExpandColumn: true,
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
        }

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.users }
                columns={ columnDefs }
                search
                exportCSV
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <h6 className="my-0">
                                AdvancedTable B
                            </h6>
                            <div className="d-flex ml-auto">
                                <CustomSearch
                                    className="mr-2"
                                    { ...props.searchProps }
                                />
                                <ButtonGroup>
                                    <CustomExportCSV
                                        { ...props.csvProps }
                                    >
                                        Export
                                    </CustomExportCSV>
                                    <Button
                                        size="sm"
                                        outline
                                        onClick={ this.handleAddRow.bind(this) }
                                    >
                                        Add <i className="fa fa-fw fa-plus"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <BootstrapTable
                            classes="table-responsive-lg"
                            bordered={ false }
                            expandRow={ expandRow }
                            responsive
                            hover
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );
    }
}