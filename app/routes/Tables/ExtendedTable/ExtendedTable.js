import React from 'react';
import { Container, Row, Col } from './../../../components';

import {
    AdvancedTableA,
    AdvancedTableB,
    BasicTable,
    BorderedTable,
    CellEdit,
    ClearSearch,
    LargeTable,
    SortTable
} from './components';
import { HeaderMain } from "../../components/HeaderMain";

export const ExtendedTable = () => (
    <Container>
        <HeaderMain 
            title="Extended Tables"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col>
                <AdvancedTableA />
            </Col>
        </Row>
        <Row className="mb-5">
            <Col>
                <AdvancedTableB />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <BasicTable />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <LargeTable />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <BorderedTable />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <SortTable />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <ClearSearch />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <CellEdit />
            </Col>
        </Row>
    </Container>
);
