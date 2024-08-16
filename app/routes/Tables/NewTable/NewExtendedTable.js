import React from 'react'
import { Container, Row, Col } from '../../../components'
import { AdvancedTableA } from '../ExtendedTable/components/AdvancedTableA'
import { HeaderMain } from '../../components/HeaderMain'

const NewExtendedTable = () => (
    <Container>
        <HeaderMain
            title="New Extended Table"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col>
                <AdvancedTableA customData={[]} />
            </Col>
        </Row>
    </Container>
)

export default NewExtendedTable
