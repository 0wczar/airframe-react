import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../../components'

import {
  AdvancedTableB
} from './components'
import { HeaderMain } from '../../components/HeaderMain'
// import { data } from '../../../Apis/contabilidad_ventas_data.json'

export const ContabilidadVentas = () => {
  const [tableData, setTableData] = useState([])
  const [columNames, setColumNames] = useState([])
  const [columFields, setColumsFields] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {// TODO: 1) pasar esto a una carpeta de conexion con apis para ser mas ordenado, 2) Migrar a axios
      try {
        const response = await fetch('http://127.0.0.1:5500/app/Apis/contabilidad_ventas_data.json') // esto esta corriendo en un servidor local
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        console.log(result)
        if (result) {
          const { columnNames, columnFields, dataTable } = result

          setTableData(dataTable)
          setColumNames(columnNames)
          setColumsFields(columnFields)

          console.log(columnNames)
          console.log(columnFields)
          console.log('fetch', dataTable)
        } else {
          throw new Error('Network response was empty')
        }
        // setData(result)
      } catch (error) {
        console.log(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  console.log('renderrr', tableData)
  return (
    <Container>
        <HeaderMain
            title="Contabilidad - Ventas"
            className="mb-5 mt-4"
        />
       {
        loading || (tableData.length === 0 || columNames.length === 0 || columFields.length === 0)// hasta que esta cargado y todos los elementos tiene datos mostramos el componente
          ? <div>
             <i className="fa fa-spinner fa-spin" style={{ fontSize: '2em', color: '#1EB7FF', marginRight: '8px' }}></i>
        Por Favor Espera. Cargando...
        </div>
          : <Row className="mb-5">
            <Col>
                <AdvancedTableB tableData={tableData} columNames={columNames} columFields={columFields} />
            </Col>
        </Row>
        }
    </Container>
  )
}
