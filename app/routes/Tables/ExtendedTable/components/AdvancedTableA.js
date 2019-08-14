import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { Comparator, dateFilter } from 'react-bootstrap-table2-filter'
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import moment from 'moment';

import {
    Badge,
    Button,
    CustomInput,
    StarRating,
    ButtonGroup
} from './../../../../components';
import { CustomExportCSV } from './CustomExportButton';
import { CustomSearch } from './CustomSearch';
import { CustomPaginationPanel } from './CustomPaginationPanel';
import { CustomSizePerPageButton } from './CustomSizePerPageButton';
import { CustomPaginationTotal } from './CustomPaginationTotal';
import { randomArray } from './../../../../utilities';
import {
    buildCustomTextFilter,
    buildCustomSelectFilter,
    buildCustomNumberFilter
} from './../filters';

const INITIAL_PRODUCTS_COUNT = 500;

const ProductQuality = {
    Good: 'product-quality__good',
    Bad: 'product-quality__bad',
    Unknown: 'product-quality__unknown'
};

const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

const generateRow = (index) => ({
    id: index,
    name: faker.commerce.productName(),
    quality: randomArray([
        ProductQuality.Bad,
        ProductQuality.Good,
        ProductQuality.Unknown
    ]),
    price: (1000 + Math.random() * 1000).toFixed(2),
    satisfaction: Math.round(Math.random() * 6),
    inStockDate: faker.date.past()
});

export class AdvancedTableA extends React.Component {
    constructor() {
        super();
        
        this.state = {
            products: _.times(INITIAL_PRODUCTS_COUNT, generateRow),
            selected: []
        };

        this.headerCheckboxRef = React.createRef();
    }

    handleSelect(row, isSelected) {
        if (isSelected) {
            this.setState({ selected: [...this.state.selected, row.id] })
        } else {
            this.setState({
                selected: this.state.selected.filter(itemId => itemId !== row.id)
            })
        }
    }

    handleSelectAll(isSelected, rows) {
        if (isSelected) {
            this.setState({ selected: _.map(rows, 'id') })
        } else {
            this.setState({ selected: [] });
        }
    }

    handleAddRow() {
        const currentSize = this.state.products.length;

        this.setState({
            products: [
                generateRow(currentSize + 1),
                ...this.state.products,
            ]
        });
    }

    handleDeleteRow() {
        this.setState({
            products: _.filter(this.state.products, product =>
                !_.includes(this.state.selected, product.id))
        })
    }

    handleResetFilters() {
        this.nameFilter('');
        this.qualityFilter('');
        this.priceFilter('');
        this.satisfactionFilter('');
    }

    createColumnDefinitions() {
        return [{
            dataField: 'id',
            text: 'Product ID',
            headerFormatter: column => (
                <React.Fragment>
                    <span className="text-nowrap">{ column.text }</span>
                    <a
                        href="javascript:;"
                        className="d-block small text-decoration-none text-nowrap"
                        onClick={ this.handleResetFilters.bind(this) }
                    >
                        Reset Filters <i className="fa fa-times fa-fw text-danger"></i>
                    </a>
                </React.Fragment>
            )
        }, {
            dataField: 'name',
            text: 'Product Name',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text-inverse">
                    { cell }
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter product name...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'quality',
            text: 'Product Quality',
            formatter: (cell) => {
                let pqProps;
                switch (cell) {
                    case ProductQuality.Good:
                        pqProps = {
                            color: 'success',
                            text: 'Good'
                        }
                    break;
                    case ProductQuality.Bad:
                        pqProps = {
                            color: 'danger',
                            text: 'Bad'
                        }
                    break;
                    case ProductQuality.Unknown:
                    default:
                        pqProps = {
                            color: 'secondary',
                            text: 'Unknown'
                        }
                }

                return (
                    <Badge color={pqProps.color}>
                        { pqProps.text }
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomSelectFilter({
                placeholder: 'Select Quality',
                options: [
                    { value: ProductQuality.Good, label: 'Good' },
                    { value: ProductQuality.Bad, label: 'Bad' },
                    { value: ProductQuality.Unknown, label: 'Unknown' }
                ],
                getFilter: filter => { this.qualityFilter = filter; }
            })
        }, {
            dataField: 'price',
            text: 'Product Price',
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
            })
        }, {
            dataField: 'satisfaction',
            text: 'Buyer Satisfaction',
            sort: true,
            sortCaret,
            formatter: (cell) =>
                <StarRating at={ cell } max={ 6 } />,
            ...buildCustomSelectFilter({
                placeholder: 'Select Satisfaction',
                options: _.times(6, (i) => ({ value: i + 1, label: i + 1 })),
                getFilter: filter => { this.satisfactionFilter = filter; }
            })
        }, {
            dataField: 'inStockDate',
            text: 'In Stock From',
            formatter: (cell) =>
                moment(cell).format('DD/MM/YYYY'),
            filter: dateFilter({
                className: 'd-flex align-items-center',
                comparatorClassName: 'd-none',
                dateClassName: 'form-control form-control-sm',
                comparator: Comparator.GT,
                getFilter: filter => { this.stockDateFilter = filter; }
            }),
            sort: true,
            sortCaret
        }]; 
    }

    render() {
        const columnDefs = this.createColumnDefinitions();
        const paginationDef = paginationFactory({
            paginationSize: 5,
            showTotal: true,
            pageListRenderer: (props) => (
                <CustomPaginationPanel { ...props } size="sm" className="ml-md-auto mt-2 mt-md-0" />
            ),
            sizePerPageRenderer: (props) => (
                <CustomSizePerPageButton { ...props } />
            ),
            paginationTotalRenderer: (from, to, size) => (
                <CustomPaginationTotal { ...{ from, to, size } } />
            )
        });
        const selectRowConfig = {
            mode: 'checkbox',
            selected: this.state.selected,
            onSelect: this.handleSelect.bind(this),
            onSelectAll: this.handleSelectAll.bind(this),
            selectionRenderer: ({ mode, checked, disabled }) => (
                <CustomInput type={ mode } checked={ checked } disabled={ disabled } />
            ),
            selectionHeaderRenderer: ({ mode, checked, indeterminate }) => (
                <CustomInput type={ mode } checked={ checked } innerRef={el => el && (el.indeterminate = indeterminate)} />
            )
        };

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.products }
                columns={ columnDefs }
                search
                exportCSV
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <h6 className="my-0">
                                AdvancedTable A
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
                                        onClick={ this.handleDeleteRow.bind(this) }
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        size="sm"
                                        outline
                                        onClick={ this.handleAddRow.bind(this) }
                                    >
                                        <i className="fa fa-fw fa-plus"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <BootstrapTable
                            classes="table-responsive"
                            pagination={ paginationDef }
                            filter={ filterFactory() }
                            selectRow={ selectRowConfig }
                            bordered={ false }
                            responsive
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );
    }
}