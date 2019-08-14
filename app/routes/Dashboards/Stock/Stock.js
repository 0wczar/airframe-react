import React from 'react';
import {
    Container,
    Row,
    Card,
    CardBody,
    Table,
    Badge,
    CardTitle,
    Nav,
    NavLink,
    NavItem,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    SimpleLineChart
} from "../../components/Stock/SimpleLineChart"

import {
    TrTableSummary
} from "../../components/Stock/TrTableSummary"

import {
    TrTableStock
} from "../../components/Stock/TrTableStock"

import {
    TrTableFavStock
} from "../../components/Stock/TrTableFavStock"

/*eslint-disable */
const progressCompletion = [
    "25",
    "50",
    "75",
    "97"
];
/*eslint-enable */

const Stock = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Stock"
                    className="mb-4 mb-lg-4"
                />
            </Col>
        </Row>
        <Row>
            <Col lg={ 12 }>
                <Table responsive size="sm" className="mb-4 text-nowrap">
                    <thead>
                        <tr>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    Your 5
                                </h4>
                                Favourites Stocks
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    AAPL
                                </h4>
                                <span className="text-success">
                                    <i className="fa fa-caret-up mr-1"></i> 22.38
                                </span> / 5.9%
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    MSFT
                                </h4>
                                <span className="text-danger">
                                    <i className="fa fa-caret-down mr-1"></i> 34.18
                                </span> / 0.56%
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    CAT
                                </h4>
                                <span className="text-success">
                                    <i className="fa fa-caret-up mr-1"></i> 22.38
                                </span> / 12.2%
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    TSLA
                                </h4>
                                <span className="text-success">
                                    <i className="fa fa-caret-up mr-1"></i> 31.03
                                </span> / 3.2%
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    KN
                                </h4>
                                <span className="text-danger">
                                    <i className="fa fa-caret-down mr-1"></i> 34.18
                                </span> / 0.56%
                            </td>
                            <td className="bt-0">
                                <h4 className="mb-1">
                                    QZA
                                </h4>
                                <span className="text-danger">
                                    <i className="fa fa-caret-down mr-1"></i> 4.02
                                </span> / 4.21%
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableFavStock />
                    </tbody>
                </Table>
            </Col>
            <Col lg={ 8 }>
                <Card className="mb-3">
                    <CardBody>
                        <span className="d-flex mb-3">
                            <CardTitle>
                                <h6>Nokia Corp. 
                                    <small>
                                        <span className="text-success ml-2">
                                            <i className="fa fa-caret-up mr-1"></i> 22.38
                                        </span> / 5.9%
                                    </small>
                                </h6>
                            </CardTitle>
                            <Badge pill className="ml-auto align-self-start"> Score: 7.24 </Badge>
                        </span>
                        <div className="text-center">
                            <SimpleLineChart />
                            <div className="d-flex mt-4">
                                <dl className="row">
                                    <dt className="col-sm-4 text-left text-sm-right">Open</dt>
                                    <dd className="col-sm-8 text-left text-inverse">$834.00</dd>
                                    <dt className="col-sm-4 text-left text-sm-right">High</dt>
                                    <dd className="col-sm-8 text-left text-inverse">$198.00</dd>
                                    <dt className="col-sm-4 text-left text-sm-right">Low</dt>
                                    <dd className="col-sm-8 text-left text-inverse">$575.00</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-4 text-left text-sm-right">Market Cap</dt>
                                    <dd className="col-sm-8 text-left text-inverse">876.00B</dd>
                                    <dt className="col-sm-4 text-left text-sm-right">P/E ratio (ttm)</dt>
                                    <dd className="col-sm-8 text-left text-inverse">62.00</dd>
                                    <dt className="col-sm-4 text-left text-sm-right">Divided Yield</dt>
                                    <dd className="col-sm-8 text-left text-inverse">94.7%</dd>
                                </dl>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 4 }>
                <Card className="mb-3">
                    <CardBody className="pb-1">
                        <Nav pills>
                            <NavItem>
                                <NavLink href="#" active>Summary</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Key Stats</NavLink>
                            </NavItem>
                        </Nav>
                    </CardBody>
                    <Table responsive striped className="mb-0">
                        <thead>
                            <tr>
                                <th className="bt-0">Name</th>
                                <th className="bt-0 text-right">2013</th>
                                <th className="bt-0 text-right">2014</th>
                                <th className="bt-0 text-right">TTM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrTableSummary />
                        </tbody>
                    </Table>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody className="pb-1">
                        <CardTitle className="mb-0">
                            <h6>
                                Cheap Stock 
                            </h6>
                        </CardTitle>
                    </CardBody>
                    <Table responsive striped className="mb-0">
                        <thead>
                            <tr>
                                <th className="bt-0"></th>
                                <th className="bt-0 text-right">Price</th>
                                <th className="bt-0 text-right">Score</th>
                                <th className="bt-0 text-right">Q</th>
                                <th className="bt-0 text-right">V</th>
                                <th className="bt-0 text-right">G</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrTableStock />
                        </tbody>
                    </Table>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody className="pb-1">
                        <CardTitle className="mb-0">
                            <h6>
                                Expensive Stock 
                            </h6>
                        </CardTitle>
                    </CardBody>
                    <Table responsive striped className="mb-0">
                        <thead>
                            <tr>
                                <th className="bt-0"></th>
                                <th className="bt-0 text-right">Price</th>
                                <th className="bt-0 text-right">Score</th>
                                <th className="bt-0 text-right">Q</th>
                                <th className="bt-0 text-right">V</th>
                                <th className="bt-0 text-right">G</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrTableStock />
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Stock'
})(Stock);