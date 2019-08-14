import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Table,
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import {
    HeaderDemo
} from "../../components/HeaderDemo";

import {
    TrTableDefault
} from "./components/TrTableDefault";
import {
    TrTableResponsive
} from "./components/TrTableResponsive";
import {
    TrTableStriped
} from "./components/TrTableStriped";
import {
    TrTableHoverable
} from "./components/TrTableHoverable";
import {
    TrTableSmall
} from "./components/TrTableSmall";
import {
    TrTableBorderless
} from "./components/TrTableBorderless";
import {
    TrTableBordered
} from "./components/TrTableBordered";
import {
    TrTableHeads
} from "./components/TrTableHeads";
import {
    TrTableContextual
} from "./components/TrTableContextual";

const Tables = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tables"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Tables" 
                        subTitle={(
                            <React.Fragment>
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Using the most basic table markup, here’s how <code>.table-based</code> tables look in Bootstrap. 
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the 
                                same manner as the parent.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Project</th>
                                    <th className="bt-0">Deadline</th>
                                    <th className="bt-0">Leader</th>
                                    <th className="bt-0">Budget</th>
                                    <th className="bt-0">Status</th>
                                    <th className="text-right bt-0">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableDefault />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Section 2 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Responsive
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Responsive tables allow tables to be scrolled horizontally with ease. 
                                Make any table responsive across all viewports by wrapping a <code>Table</code> with <code>responsive</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">Browser & OS</th>
                                    <th className="bt-0">IP</th>
                                    <th className="bt-0">Location</th>
                                    <th className="bt-0">Signed In</th>
                                    <th className="text-right bt-0">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableResponsive />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Section 3 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Striped
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Use <code>striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" striped responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">Product Name</th>
                                    <th className="bt-0">Last Refresh</th>
                                    <th className="text-right bt-0">
                                        Last Month
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableStriped />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Section 4 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Hoverable
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Use <code>hover</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">Name</th>
                                    <th className="bt-0">Price</th>
                                    <th className="text-right bt-0">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableHoverable />
                                <TrTableHoverable />
                                <TrTableHoverable />
                                <TrTableHoverable />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Section 5 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Small
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Add <code>size="sm"</code> to make tables more compact by cutting cell padding in half.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">ID</th>
                                    <th className="bt-0">Name</th>
                                    <th className="bt-0">Amount</th>
                                    <th className="text-right bt-0">
                                        Payment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableSmall />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 5 */}

            { /* START Section 6 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Borderless
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Add <code>borderless</code> for a table without borders.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" borderless responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Payment Method</th>
                                    <th className="text-right">
                                        Receipt
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableBorderless />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}

            { /* START Section 7 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Bordered
                                <span className="small ml-1 text-muted">
                                    #7.01
                                </span>
                            </CardTitle>
                            <p>
                                Add <code>bordered</code> for borders on all sides of the table and cells.
                            </p>
                            { /* START Table */}
                            <Table className="mb-0" bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Ticket</th>
                                        <th>Completion</th>
                                        <th>Create</th>
                                        <th>Deadline</th>
                                        <th className="text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TrTableBordered />
                                </tbody>
                            </Table>
                            { /* END Table */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 7 */}

            { /* START Section 8 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Heads
                                <span className="small ml-1 text-muted">
                                    #8.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Similar to tables and dark tables, use the modifier classes 
                                <code>.thead-light</code> or <code>.thead-dark</code> to make 
                                <code>&lt;thead&gt;</code>s appear light or dark gray.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead className="thead-light">
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">First Name</th>
                                    <th className="bt-0">Last Name</th>
                                    <th className="bt-0">Email</th>
                                    <th className="bt-0">Nick</th>
                                    <th className="text-right bt-0">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableHeads />
                            </tbody>
                            <thead className="thead-dark">
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">First Name</th>
                                    <th className="bt-0">Last Name</th>
                                    <th className="bt-0">Email</th>
                                    <th className="bt-0">Nick</th>
                                    <th className="text-right bt-0">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableHeads />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 8 */}

            { /* START Section 9 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Contextual
                                <span className="small ml-1 text-muted">
                                    #9.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                               Use contextual classes to color table rows or individual cells.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Invoice</th>
                                    <th className="bt-0">Name</th>
                                    <th className="bt-0">Date</th>
                                    <th className="bt-0">Price</th>
                                    <th className="bt-0">Status</th>
                                    <th className="text-right bt-0">
                                        Country
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableContextual />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 9 */}

            { /* START Section 10 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3" type="background" color="dark">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Inverse
                                <span className="small ml-1 text-muted">
                                    #1.10
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                You can also invert the colors—with light text on dark backgrounds—with <code>dark</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" dark responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Project</th>
                                    <th className="bt-0">Deadline</th>
                                    <th className="bt-0">Leader</th>
                                    <th className="bt-0">Budget</th>
                                    <th className="bt-0">Status</th>
                                    <th className="text-right bt-0">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableDefault 
                                    projectColor="text-white"
                                    leaderStatus="900"
                                    dropdownColor="text-white"
                                />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 10 */}
        </Container>
    </React.Fragment>
);

export default Tables;