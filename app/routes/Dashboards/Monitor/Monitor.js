import React from 'react';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Progress,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TinyDonutChart
} from "../../components/Monitor/TinyDonutChart"
import {
    TinyDonutChartBig
} from "../../components/Monitor/TinyDonutChartBig"
import {
    TrTableMonitor
} from "../../components/Monitor/TrTableMonitor"
import {
    TinyAreaChart
} from "../../components/Monitor/TinyAreaChart"

/*eslint-disable */
const progressCompletion = [
    "25",
    "50",
    "75",
    "97"
];
/*eslint-enable */

const Monitor = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Monitor"
                    className="mb-4 mb-lg-5"
                />

            </Col>
        </Row>
        <Row>
            <Col lg={ 4 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            System Monitoring
                        </CardTitle>
                        <div className="mb-4">
                            <div>
                                <h6 className="mb-1">CPU</h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="d-flex align-items-center mr-2">Core 0</span>
                                <Progress value="44" className="mt-2 w-50" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">86%</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="d-flex align-items-center mr-2">Core 1</span>
                                <Progress value="74" className="mt-2 w-50" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">40%</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div>
                                <h6 className="mb-1">Memory <small>(Ram)</small></h6>
                                <p>GSkill 2 x 8 GB DDR3 @1333 Mhz</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <TinyDonutChart />
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">52 <small>GB</small></h2>
                                    <span>Total Memory</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Allocated
                                    </div>
                                    <h6 className="mb-0">48,7 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> In Cache
                                    </div>
                                    <h6 className="mb-0">26,9 MB</h6>
                                    <span>65%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Available
                                    </div>
                                    <h6 className="mb-0">2,7 MB</h6>
                                    <span>34%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mb-1">Interface Traffic <small>(re0)</small></h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Network Monitoring
                        </CardTitle>
                        <div>
                            <div>
                                <h6 className="mb-1">Interface Traffic <small>(re0)</small></h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                        </div>
                        <TinyAreaChart />
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                           Hardware Temperature
                        </CardTitle>
                        <div className="mb-4">
                            <div>
                                <h6>CPU <small>(idle)</small></h6>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="text-left">
                                    <i className="fa fa-caret-down fa-fw text-danger"></i>Min: 19ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 26ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 32ºC
                                </div>
                            </div>
                            <TinyAreaChart />
                        </div>
                        <div className="mb-4">
                            <div>
                                <h6>HDD1 WD30EZRX <small>(ada0)</small></h6>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="text-left">
                                    <i className="fa fa-caret-down fa-fw text-danger"></i>Min: 19ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 26ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 32ºC
                                </div>
                            </div>
                            <TinyAreaChart />
                        </div>
                        <div>
                            <div>
                                <h6>HDD1 WD30EZRX <small>(ada1)</small></h6>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="text-left">
                                    <i className="fa fa-caret-down fa-fw text-danger"></i>Min: 19ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 26ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 32ºC
                                </div>
                            </div>
                            <TinyAreaChart />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 8 }>
                <p>
                    Nesciunt odit eius nihil molestiae tenetur earum enim quidem. Aperiam non sapiente voluptatum in doloremque rerum magnam quae sed. 
                    Quisquam eos non voluptate sapiente qui temporibus harum in illo. Aliquid at dolor labore. Qui error modi.
                </p>
                <div className="hr-text hr-text-left mt-4 mb-4">
                    <span>Volume Status</span>
                </div>
                <Row className="mb-5">
                    <Col lg={ 3 }>
                        <div>
                            <div className="mb-3">
                                <h6 className="mb-1">Path</h6>
                                <Badge color="secondary" pill>/mtn/volume1</Badge>
                            </div>
                            <div className="mb-0">
                                <h2 className="mb-0">2.24 <small>TiB</small></h2>
                                <span>Volume Size</span>
                            </div>
                            <TinyDonutChartBig 
                                pieColor="primary"
                            />
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-purple"></i> Used Space
                                    </div>
                                    <h6 className="mb-0">483,7 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Free Space
                                    </div>
                                    <h6 className="mb-0">269,3 MB</h6>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 }>
                        <div>
                            <div className="mb-3">
                                <h6 className="mb-1">Path</h6>
                                <Badge color="secondary" pill>/mtn/volume1</Badge>
                            </div>
                            <div className="mb-0">
                                <h2 className="mb-0">5.07 <small>TiB</small></h2>
                                <span>Volume Size</span>
                            </div>
                            <TinyDonutChartBig 
                                pieColor="purple"
                            />
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-purple"></i> Used Space
                                    </div>
                                    <h6 className="mb-0">48,7 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Free Space
                                    </div>
                                    <h6 className="mb-0">26,9 MB</h6>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 }>
                        <div>
                            <div className="mb-3">
                                <h6 className="mb-1">Path</h6>
                                <Badge color="secondary" pill>/mtn/volume1</Badge>
                            </div>
                            <div className="mb-0">
                                <h2 className="mb-0">3.16 <small>TiB</small></h2>
                                <span>Volume Size</span>
                            </div>
                            <TinyDonutChartBig 
                                pieColor="success"
                            />
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-success"></i> Used Space
                                    </div>
                                    <h6 className="mb-0">483,3 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Free Space
                                    </div>
                                    <h6 className="mb-0">262,9 MB</h6>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 }>
                        <div>
                            <div className="mb-3">
                                <h6 className="mb-1">Path</h6>
                                <Badge color="secondary" pill>/mtn/volume1</Badge>
                            </div>
                            <div className="mb-0">
                                <h2 className="mb-0">9.27 <small>TiB</small></h2>
                                <span>Volume Size</span>
                            </div>
                            <TinyDonutChartBig 
                                pieColor="yellow"
                            />
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-yellow"></i> Used Space
                                    </div>
                                    <h6 className="mb-0">482,7 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Free Space
                                    </div>
                                    <h6 className="mb-0">26,9 MB</h6>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="hr-text hr-text-left mt-2 mb-4">
                    <span>Mounted Devices</span>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="bt-0">Description</th>
                            <th className="bt-0">RAID</th>
                            <th className="bt-0">Capacity</th>
                            <th className="bt-0 text-right">Usage</th>
                            <th className="bt-0 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableMonitor />
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Monitor'
})(Monitor);