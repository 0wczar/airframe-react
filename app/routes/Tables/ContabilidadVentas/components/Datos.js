import React from 'react'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, {
} from 'react-bootstrap-table2-filter'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import { CustomPaginationPanel } from './CustomPaginationPanel'
import { CustomSizePerPageButton } from './CustomSizePerPageButton'
import { CustomPaginationTotal } from './CustomPaginationTotal'
import _ from 'lodash'

import {
  Button,
  CustomInput,
  ButtonGroup,
} from '../../../../components'


import { CustomExportCSV } from './CustomExportButton'
import { CustomSearch } from './CustomSearch'
import {
  buildCustomTextFilter,
} from './../filters'


const sortCaret = (order) => {
  if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
  if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

export class TableData extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableData: this.props.tableData || [],
      filters: []
    }
  }

  addFilterFunction(filter) {
    this.setState((prevState) => ({
      filters: [...prevState.filters, filter]
    }))
  }

  handleSelect(row, isSelected) {
    if (isSelected) {
      this.setState({ selected: [...this.state.selected, row.id] })
    } else {
      this.setState({
        selected: this.state.selected.filter((itemId) => itemId !== row.id)
      })
    }
  }

  handleSelectAll(isSelected, rows) {
    if (isSelected) {
      this.setState({ selected: _.map(rows, 'id') })
    } else {
      this.setState({ selected: [] })
    }
  }

  handleResetFilters() {
    this.state.filters.map((func) => {
      func('')
    })
  }

  createColumnDefinitions() {
    const nombresColumnas = this.props.columNames || []
    const campos = this.props.columFields || []

    console.log('nombresColumnas', nombresColumnas)
    console.log('campos', campos)

    const mapeoCampos = []

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


  render() {
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

    const selectRowConfig = {
      mode: 'checkbox',
      selected: this.state.selected,
      onSelect: this.handleSelect.bind(this),
      onSelectAll: this.handleSelectAll.bind(this),
      selectionRenderer: ({ mode, checked, disabled }) => (
        <CustomInput type={mode} checked={checked} disabled={disabled} />
      ),
      selectionHeaderRenderer: ({ mode, checked, indeterminate }) => (
        <CustomInput
          type={mode}
          checked={checked}
          innerRef={(el) => el && (el.indeterminate = indeterminate)}
        />
      )
    }

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
             
              <div className="d-flex ml-auto">
                <CustomSearch className="mr-2" {...props.searchProps} />
                <ButtonGroup>
                  <CustomExportCSV {...props.csvProps}>Exportar</CustomExportCSV>
                  <Button
                    size="sm"
                    outline
                    onClick={() => this.handleResetFilters()}
                  >
                    Limpiar Filtros <i className="fa fa-times fa-fw text-danger"></i>
                  </Button>

                </ButtonGroup>
              </div>
            </div>
            <BootstrapTable
              classes="table-responsive"
              pagination={paginationDef}
              bordered={false}
              filter={filterFactory()}
              selectRow={selectRowConfig}
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
