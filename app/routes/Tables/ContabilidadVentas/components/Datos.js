import React from 'react'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, {
  Comparator,
  dateFilter
} from 'react-bootstrap-table2-filter'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import { CustomPaginationPanel } from './CustomPaginationPanel'
import { CustomSizePerPageButton } from './CustomSizePerPageButton'
import { CustomPaginationTotal } from './CustomPaginationTotal'
import moment from 'moment'
import _ from 'lodash'

import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Row,
  Col
} from '../../../../components'
import { CustomExportCSV } from './CustomExportButton'
import { CustomSearch } from './CustomSearch'
import {
  buildCustomTextFilter,
  buildCustomSelectFilter,
  buildCustomNumberFilter
} from './../filters'

const sortCaret = (order) => {
  if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
  if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

export class AdvancedTableB extends React.Component {
  constructor (props) {
    super(props)

    console.log('xxxx', this.props.tableData[0])

    this.state = {
      tableData: this.props.tableData || [],
      filters: []
    }
  }

  addFilterFunction (filter) {
    this.setState((prevState) => ({
      filters: [...prevState.filters, filter]
    }))
  }

  handleAddRow () {
    const tableDataLength = this.state.tableData.length

    this.setState({
      tableData: []
    })
  }

  handleSelect (row, isSelected) {
    if (isSelected) {
      this.setState({ selected: [...this.state.selected, row.id] })
    } else {
      this.setState({
        selected: this.state.selected.filter((itemId) => itemId !== row.id)
      })
    }
  }

  handleSelectAll (isSelected, rows) {
    if (isSelected) {
      this.setState({ selected: _.map(rows, 'id') })
    } else {
      this.setState({ selected: [] })
    }
  }

  handleResetFilters () {
    this.state.filters.map((func) => {
      func('')
    })
  }

  createColumnDefinitions () {
    const nombresColumnas = this.props.columNames || []
    const campos = this.props.columFields || []

    console.log('nombresColumnas', nombresColumnas)
    console.log('campos', campos)

    const mapeoCampos = [
      {
        dataField: 'a',
        text: '',
        headerFormatter: (column) => (
          <React.Fragment>
            <span className="text-nowrap">{column.text}</span>
            <a
              href="javascript:;"
              className="d-block small text-decoration-none text-nowrap"
              onClick={() => this.handleResetFilters()}
            >
              Reset Filters <i className="fa fa-times fa-fw text-danger"></i>
            </a>
          </React.Fragment>
        )
      }
    ]

    for (let i = 0; i < campos.length; i++) {
      mapeoCampos.push(
        {
          dataField: campos[i],
          text: nombresColumnas[i],
          sort: true,
          sortCaret,
          ...buildCustomTextFilter({
            placeholder: '...',
            getFilter: (filter) => {
              this.addFilterFunction(filter)
            }
          })
        })
    }

    return mapeoCampos
  }

  render () {
    const columnDefs = this.createColumnDefinitions()
    const paginationDef = paginationFactory({
      paginationSize: 5,
      showTotal: true,
      pageListRenderer: (props) => (
        <CustomPaginationPanel
          {...props}
          size="sm"
          className="ml-md-auto mt-2 mt-md-0"
        />
      ),
      sizePerPageRenderer: (props) => <CustomSizePerPageButton {...props} />,
      paginationTotalRenderer: (from, to, size) => (
        <CustomPaginationTotal {...{ from, to, size }} />
      )
    })

    console.log('state table', this.state.tableData)

    return (
      <ToolkitProvider
        keyField="id"
        data={this.state.tableData}
        columns={columnDefs}
        search
        exportCSV
      >
        {(props) => (
          <React.Fragment>
            <div className="d-flex justify-content-end align-items-center mb-2">
              <h6 className="my-0">Ventas</h6>
              <div className="d-flex ml-auto">
                <CustomSearch className="mr-2" {...props.searchProps} />
                <ButtonGroup>
                  <CustomExportCSV {...props.csvProps}>Export</CustomExportCSV>
                  <Button
                    size="sm"
                    outline
                    onClick={this.handleAddRow.bind(this)}
                  >
                    Add <i className="fa fa-fw fa-plus"></i>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <BootstrapTable
              classes="table-responsive"
              pagination={paginationDef}
              bordered={false}
              filter={filterFactory()}
              responsive
              hover
              {...props.baseProps}
            />
          </React.Fragment>
        )}
      </ToolkitProvider>
    )
  }
}
