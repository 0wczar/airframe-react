import React from 'react';
import faker from 'faker/locale/en_US';
import {
    Container,
    Row,
    Card,
    CardBody,
    UncontrolledTooltip,
    Progress,
    Table,
    Nav,
    NavItem,
    NavLink,
    CardTitle,
    ListGroup,
    ListGroupItem,
    UncontrolledCollapse,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TinyLineChart
} from "./components/TinyLineChart";
import {
    TinyAreaChart
} from "./components/TinyAreaChart";
import {
    TinyArcChart
} from "./components/TinyArcChart";


/*eslint-disable */
const progressCompletion = [
    "25",
    "50",
    "75",
    "97"
];
/*eslint-enable */

const Reports = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Reports"
                    className="mb-3 mb-lg-5"
                />
            </Col>
            <Col xl={ 3 } lg={ 6 } className="mb-4 mb-lg-0">
                <Card>
                    <CardBody className="bb-0">
                        <span className="d-flex">
                            <CardTitle tag="h6" className="mb-0 bb-0">
                                Temperatures
                            </CardTitle>
                            <span className="ml-auto justify-content-start">
                                <a href="javascript:;" className="ml-auto justify-content-start pr-2 text-decoration-none" id="TemperaturesTooltipSettings">
                                    <i className="fa fa-fw fa-sliders"></i>
                                </a> <a href="javascript:;" id="TemperaturesTooltipAdd" className="text-decoration-none">
                                    <i className="fa fa-fw fa-plus"></i>
                                </a>
                            </span>
                            <UncontrolledTooltip placement="top" target="TemperaturesTooltipSettings">
                                Settings
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="top" target="TemperaturesTooltipAdd">
                                Add
                            </UncontrolledTooltip>
                        </span>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="TemperaturesProcessorToggler" className="by-0 d-flex text-decoration-none">
                            Processor
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="TemperaturesProcessorTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="TemperaturesProcessorTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                    </ListGroup>
                    <UncontrolledCollapse toggler="#TemperaturesProcessorToggler" isOpen>
                        <CardBody className="pt-0">
                            <span className="d-flex mb-4">
                                <h1>39º</h1>
                                <span className="ml-auto text-right">
                                    102º F <br />
                                    <i className="fa fa-arrow-down fa-fw text-primary"></i>
                                </span>
                            </span>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="d-flex align-items-center mr-2">Core 0</span>
                                    <Progress value="25" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">86º</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="d-flex align-items-center mr-2">Core 1</span>
                                    <Progress value="59" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">40º</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="d-flex align-items-center mr-2">Core 2</span>
                                    <Progress value="25" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">86º</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="d-flex align-items-center mr-2">Core 3</span>
                                    <Progress value="59" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">40º</span>
                            </div>
                        </CardBody>
                    </UncontrolledCollapse>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="TemperaturesGraphicsToggler" className="by-0 d-flex text-decoration-none">
                            Graphics
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="TemperaturesGraphicsTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="TemperaturesGraphicsTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                    </ListGroup>
                    <UncontrolledCollapse toggler="#TemperaturesGraphicsToggler" isOpen>
                        <CardBody className="pt-0">
                            <span className="d-flex mb-3">
                                <h1>68º</h1>
                                <span className="ml-auto text-right">
                                    102º F <br />
                                    <i className="fa fa-arrow-up fa-fw text-danger"></i>
                                </span>
                            </span>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="d-flex align-items-center mr-2">Core</span>
                                    <Progress value="85" className="mt-2 w-50" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">86º</span>
                            </div>
                        </CardBody>
                    </UncontrolledCollapse>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="TemperaturesStorageToggler" className="by-0 d-flex text-decoration-none">
                            Storage
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="TemperaturesStorageTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="TemperaturesStorageTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                    </ListGroup>
                    <UncontrolledCollapse toggler="#TemperaturesStorageToggler" isOpen>
                        <CardBody className="pt-0">
                            <div className="mb-3 mt-2">
                                <TinyLineChart />
                            </div>
                            <div className="mb-3">
                                <span className="d-flex">
                                    <span className="text-inverse">
                                        Samsung 850 PRO
                                    </span>
                                    <span className="ml-auto">
                                        512GB
                                    </span>
                                </span>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center mr-2">SSD 0</span>
                                    <Progress value="25" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">31º</span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="d-flex">
                                    <span className="text-inverse">
                                        WD Black
                                    </span>
                                    <span className="ml-auto">
                                        1TB
                                    </span>
                                </span>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center mr-2">HDD 1</span>
                                    <Progress value="67" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">81º</span>
                                </div>
                            </div>
                            <div className="mb-0">
                                <span className="d-flex">
                                    <span className="text-inverse">
                                        Quantum PCI
                                    </span>
                                    <span className="ml-auto">
                                        2TB
                                    </span>
                                </span>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center mr-2">SSD 3</span>
                                    <Progress value="35" className="mt-2 w-50 progress" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">21º</span>
                                </div>
                            </div>
                        </CardBody>
                    </UncontrolledCollapse>
                </Card>
            </Col>
            <Col xl={ 3 } lg={ 6 } className="mb-4 mb-lg-0">
                <Card className="mb-sm-4 mb-xl-0">
                    <CardBody className="bb-0">
                        <span className="d-flex">
                            <CardTitle tag="h6" className="mb-0 bb-0">
                                Usage
                            </CardTitle>
                            <span className="ml-auto justify-content-start">
                                <a href="javascript:;" className="ml-auto justify-content-start pr-2 text-decoration-none" id="UsageTooltipSettings">
                                    <i className="fa fa-fw fa-sliders"></i>
                                </a> <a href="javascript:;" id="UsageTooltipAdd" className="text-decoration-none">
                                    <i className="fa fa-fw fa-plus"></i>
                                </a>
                            </span>
                            <UncontrolledTooltip placement="top" target="UsageTooltipSettings">
                                Settings
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="top" target="UsageTooltipAdd">
                                Add
                            </UncontrolledTooltip>
                        </span>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="ProcessorToggler" className="by-0 d-flex text-decoration-none">
                            Processor
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="ProcessorTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="ProcessorTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                    </ListGroup>
                    <UncontrolledCollapse toggler="#ProcessorToggler" isOpen>
                        <CardBody className="pt-0">
                            <dl className="row mb-3">
                                <dt className="col-sm-5">CPU</dt>
                                <dd className="col-sm-7 text-right text-inverse">Intel Core i7</dd>
                                <dt className="col-sm-5">Base (Turbo)</dt>
                                <dd className="col-sm-7 text-right text-inverse">4 GHz (4.4 GHz)</dd>
                                <dt className="col-sm-8">Cores (Threads)</dt>
                                <dd className="col-sm-4 text-right text-inverse">4 (8)</dd>
                            </dl>
                            <Progress multi className="mt-2" style={{height: "5px"}}>
                                <Progress bar value="45" />
                                <Progress bar color="danger" value="15" />
                            </Progress>
                        </CardBody>
                    </UncontrolledCollapse>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="UsageLoadToggler" className="by-0 d-flex text-decoration-none">
                            Usage (Load)
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="UsageLoadTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="UsageLoadTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                        <UncontrolledCollapse toggler="#UsageLoadToggler" isOpen>
                            <CardBody className="pt-0">
                                <Table size="sm" className="mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0 bb-0 align-middle text-left">
                                                <h1 className="pt-0">78%</h1>
                                            </th>
                                            <th scope="col" className="text-center bt-0 bb-0 align-bottom" width="5">
                                                <p style={{ textOrientation: 'unset', lineHeight: '0' }} className="mb-0">
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                </p>
                                            </th>
                                            <th scope="col" className="text-center bt-0 bb-0 align-bottom" width="5">
                                                <p style={{ textOrientation: 'unset', lineHeight: '0' }} className="mb-0">
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                </p>
                                            </th>
                                            <th scope="col" className="text-center bt-0 bb-0 align-bottom"  width="5">
                                                <p style={{ textOrientation: 'unset', lineHeight: '0' }} className="mb-0">
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-gray-300"></i>
                                                    <i className="fa fa-fw fa-stop text-primary"></i>
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bt-0">Cores</td>
                                            <td className="bt-0 text-center text-inverse">1</td>
                                            <td className="bt-0 text-center text-inverse">2</td>
                                            <td className="bt-0 text-center text-inverse">3</td>
                                        </tr>
                                        <tr>
                                            <td>Usage %</td>
                                            <td className="text-center text-inverse">27</td>
                                            <td className="text-center text-inverse">78</td>
                                            <td className="text-center text-inverse">13</td>
                                        </tr>
                                        <tr>
                                            <td>Tendency</td>
                                            <td className="text-center">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </UncontrolledCollapse>
                    </ListGroup>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="GraphicsToggler" className="by-0 d-flex text-decoration-none">
                            Graphics
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="GraphicsTooltip"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="GraphicsTooltip">
                            Show/Hide Section
                        </UncontrolledTooltip>
                        <UncontrolledCollapse toggler="#GraphicsToggler" isOpen>
                            <CardBody className="pt-0">
                                <dl className="row mb-0">
                                    <dt className="col-sm-5">GPU Name</dt>
                                    <dd className="col-sm-7 text-right text-inverse">NVIDIA GTX 980</dd>
                                    <dt className="col-sm-5">Bus Width</dt>
                                    <dd className="col-sm-7 text-right text-inverse">4 GHz (4.4 GHz)</dd>
                                    <dt className="col-sm-7">Memory</dt>
                                    <dd className="col-sm-5 text-right text-inverse">4096 GDDR5</dd>
                                </dl>
                            </CardBody>
                        </UncontrolledCollapse>
                    </ListGroup>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="#" id="UsageLoadToggler2" className="by-0 d-flex text-decoration-none">
                            Usage (Load)
                            <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="UsageLoadTooltip2"></i>
                        </ListGroupItem>
                        <UncontrolledTooltip placement="top" target="UsageLoadTooltip2">
                            Show/Hide Section
                        </UncontrolledTooltip>
                        <UncontrolledCollapse toggler="#UsageLoadToggler2" isOpen>
                            <CardBody className="pt-0">
                                <Table size="sm">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0 bb-0 align-top text-left">
                                                <h1 className="pt-0">85%</h1>
                                            </th>
                                            <th scope="col" className="text-right bt-0 bb-0 align-middle">
                                                <TinyArcChart />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bt-0">Current Core Clock</td>
                                            <td className="bt-0 text-right text-inverse">390Mhz</td>
                                        </tr>
                                        <tr>
                                            <td>Current Memory Clock</td>
                                            <td className="text-right text-inverse">160MHz</td>
                                        </tr>
                                        <tr>
                                            <td>Memory Usage (%)</td>
                                            <td className="text-right text-inverse">306MB (7%)</td>
                                        </tr>
                                        <tr>
                                            <td>Tendency</td>
                                            <td className="text-right">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </UncontrolledCollapse>
                    </ListGroup>
                </Card>
            </Col>
            <Col xl={ 6 } lg={ 12 }>
                <Row>
                    <Col xl={ 6 } lg={ 6 }>
                        <Card className="mb-4">
                            <CardBody className="bb-0">
                                <span className="d-flex">
                                    <CardTitle tag="h6" className="mb-0 bb-0">
                                        Allocation
                                    </CardTitle>
                                    <span className="ml-auto justify-content-start">
                                        <a href="javascript:;" className="ml-auto justify-content-start pr-2 text-decoration-none" id="AllocationTooltipSettings">
                                            <i className="fa fa-fw fa-sliders"></i>
                                        </a> <a href="javascript:;" id="AllocationTooltipAdd" className="text-decoration-none">
                                            <i className="fa fa-fw fa-plus"></i>
                                        </a>
                                    </span>
                                    <UncontrolledTooltip placement="top" target="AllocationTooltipSettings">
                                        Settings
                                    </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="AllocationTooltipAdd">
                                        Add
                                    </UncontrolledTooltip>
                                </span>
                            </CardBody>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href="#" id="RamToggler" className="by-0 d-flex text-decoration-none">
                                    RAM
                                    <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="RamTooltip"></i>
                                </ListGroupItem>
                                <UncontrolledTooltip placement="top" target="RamTooltip">
                                    Show/Hide Section
                                </UncontrolledTooltip>
                            </ListGroup>
                            <UncontrolledCollapse toggler="#RamToggler" isOpen>
                                <CardBody className="pt-0">
                                    <dl className="row mb-3">
                                        <dt className="col-sm-5">Installed</dt>
                                        <dd className="col-sm-7 text-right text-inverse">16GB DDR3</dd>
                                        <dt className="col-sm-5">DRAM Freq</dt>
                                        <dd className="col-sm-7 text-right text-inverse">4 GHz (4.4 GHz)</dd>
                                        <dt className="col-sm-8">Cores (Threads)</dt>
                                        <dd className="col-sm-4 text-right text-inverse">4 (8)</dd>
                                    </dl>
                                    <Progress multi className="mt-2 mb-3" style={{height: "5px"}}>
                                        <Progress bar value="45" />
                                        <Progress bar color="danger" value="15" />
                                    </Progress>
                                    <Table size="sm">
                                        <tbody>
                                            <tr>
                                                <td className="bt-0">
                                                    <i className="fa fa fa-circle-o text-primary mr-1"></i>
                                                    In Use
                                                </td>
                                                <td className="text-right text-inverse bt-0">
                                                    796MB <i className="fa fa-arrow-up fa-fw text-gray-300"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa fa-circle-o text-danger mr-1"></i>
                                                    In Cache
                                                </td>
                                                <td className="text-right text-inverse">
                                                    180MB <i className="fa fa-arrow-down fa-fw text-gray-300"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa fa-circle-o text-gray-300 mr-1"></i>
                                                    Available
                                                </td>
                                                <td className="text-right text-inverse">
                                                    1672MB <i className="fa fa-arrow-down fa-fw text-gray-300"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div>
                                        <TinyAreaChart />
                                    </div>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xl={ 6 } lg={ 6 }>
                        <Card className="mb-4">
                            <CardBody className="bb-0">
                                <span className="d-flex">
                                    <CardTitle tag="h6" className="mb-0 bb-0">
                                        Cooling
                                    </CardTitle>
                                    <span className="ml-auto justify-content-start">
                                        <a href="javascript:;" className="ml-auto justify-content-start pr-2 text-decoration-none" id="CoolingTooltipSettings">
                                            <i className="fa fa-fw fa-sliders"></i>
                                        </a> <a href="javascript:;" id="CoolingTooltipAdd" className="text-decoration-none">
                                            <i className="fa fa-fw fa-plus"></i>
                                        </a>
                                    </span>
                                    <UncontrolledTooltip placement="top" target="CoolingTooltipSettings">
                                        Settings
                                    </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="CoolingTooltipAdd">
                                        Add
                                    </UncontrolledTooltip>
                                </span>
                            </CardBody>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href="#" id="FansToggler" className="by-0 d-flex text-decoration-none">
                                    Fans
                                    <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="FansTooltip"></i>
                                </ListGroupItem>
                                <UncontrolledTooltip placement="top" target="FansTooltip">
                                    Show/Hide Section
                                </UncontrolledTooltip>
                            </ListGroup>
                            <UncontrolledCollapse toggler="#FansToggler" isOpen>
                                <CardBody className="pt-0">
                                    <div className="mb-2">
                                        <span className="d-flex">
                                            <span>
                                                Left Fontal Fan
                                            </span>
                                            <span className="ml-auto text-inverse">
                                                120mm
                                            </span>
                                        </span>
                                        <input type="range" className="custom-range pb-0" id="leftFontalFan" />
                                        <span className="d-flex">
                                            <span>
                                                <i className="fa fa-fw fa-leaf"></i>
                                            </span>
                                            <span className="ml-auto">
                                                250RPM
                                            </span>
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="d-flex">
                                            <span>
                                                Right Fontal Fan
                                            </span>
                                            <span className="ml-auto text-inverse">
                                                120mm
                                            </span>
                                        </span>
                                        <input type="range" max="3" step="1" className="custom-range pb-0" id="leftFontalFan" />
                                        <span className="d-flex">
                                            <span>
                                                <i className="fa fa-fw fa-leaf"></i>
                                            </span>
                                            <span className="ml-auto">
                                                250RPM
                                            </span>
                                        </span>
                                    </div>
                                    <Nav pills className="nav-fill">
                                        <NavItem>
                                            <NavLink href="#" active>
                                                <i className="fa fa-sliders"></i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                <i className="fa fa-leaf"></i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                <i className="fa fa-dashboard"></i>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xl={ 12 }>
                        <Card>
                            <CardBody className="bb-0 pb-0">
                                <span className="d-flex">
                                    <CardTitle tag="h6" className="mb-0 bb-0">
                                        Activity
                                    </CardTitle>
                                    <span className="ml-auto justify-content-start">
                                        <a href="javascript:;" className="ml-auto justify-content-start pr-2" id="ActivityTooltipSettings">
                                            <i className="fa fa-fw fa-sliders"></i>
                                        </a> <a href="javascript:;" id="ActivityTooltipAdd">
                                            <i className="fa fa-fw fa-plus"></i>
                                        </a>
                                    </span>
                                    <UncontrolledTooltip placement="top" target="ActivityTooltipSettings">
                                        Settings
                                    </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="ActivityTooltipAdd">
                                        Add
                                    </UncontrolledTooltip>
                                </span>
                            </CardBody>
                            <CardBody>
                                <Nav tabs className="mb-3">
                                    <NavItem>
                                        <NavLink href="#" active>
                                            Processes
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Network
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Storage
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Energy
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Row>
                                    <Col lg={ 6 }>
                                        <dl className="row mb-0">
                                            <dt className="col-sm-5">
                                                Operating System
                                            </dt>
                                            <dd className="col-sm-7 text-right text-inverse">
                                                Windows 10 x64
                                            </dd>
                                            <dt className="col-sm-5">
                                                Build
                                            </dt>
                                            <dd className="col-sm-7 text-right text-inverse">
                                                9876
                                            </dd>
                                        </dl>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <dl className="row mb-0">
                                            <dt className="col-sm-5">
                                                Admin
                                            </dt>
                                            <dd className="col-sm-7 text-right text-inverse">
                                                John Malkovich
                                            </dd>
                                            <dt className="col-sm-5">
                                                Network
                                            </dt>
                                            <dd className="col-sm-7 text-right text-inverse">
                                                Wireless Network
                                            </dd>
                                        </dl>
                                    </Col>
                                </Row>
                                <Table hover className="mb-0" size="sm" responsive>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0">
                                                Process
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                Read
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                Threads
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                CPU
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                GPU
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                Memory
                                            </th>
                                            <th scope="col" className="align-middle text-right bt-0">
                                                Tend
                                            </th>
                                            <th className="bt-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    Chrome
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                30MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                20
                                            </td>
                                            <td className="align-middle text-right">
                                                24%
                                            </td>
                                            <td className="align-middle text-right">
                                                56%
                                            </td>
                                            <td className="align-middle text-right">
                                                7.9GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                    <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr1">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr1">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>   
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr1">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                    <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    Photoshop
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                40MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                60
                                            </td>
                                            <td claclassNamess="align-middle text-right">
                                                25%
                                            </td>
                                            <td className="align-middle text-right">
                                                10%
                                            </td>
                                            <td className="align-middle text-right">
                                                1.1GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                <i className="fa fa-arrow-up fa-fw text-success"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr2">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr2">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>    
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr2">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                    <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    Chrome
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                60MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                60
                                            </td>
                                            <td className="align-middle text-right">
                                                19%
                                            </td>
                                            <td className="align-middle text-right">
                                                56%
                                            </td>
                                            <td className="align-middle text-right">
                                                2.4GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr3">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr3">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>    
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr3">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                    <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    Safari
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                10MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                40
                                            </td>
                                            <td className="align-middle text-right">
                                                19%
                                            </td>
                                            <td className="align-middle text-right">
                                                56%
                                            </td>
                                            <td className="align-middle text-right">
                                                1.1GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                <i className="fa fa-arrow-up fa-fw text-success"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr4">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr4">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>    
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr4">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                    <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    Chrome
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                30MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                10
                                            </td>
                                            <td className="align-middle text-right">
                                                27%
                                            </td>
                                            <td className="align-middle text-right">
                                                27%
                                            </td>
                                            <td className="align-middle text-right">
                                                9.1GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                <i className="fa fa-arrow-down fa-fw text-danger"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr5">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr5">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>    
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr5">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                    <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                        <tr>
                                            <td className="align-middle text-nowrap">
                                                <i className="fa fa fa-window-maximize mr-1"></i>
                                                <span className="text-inverse">
                                                    System
                                                </span>
                                            </td>
                                            <td className="align-middle text-right">
                                                70MB/s
                                            </td>
                                            <td className="align-middle text-right">
                                                30
                                            </td>
                                            <td className="align-middle text-right">
                                                10%
                                            </td>
                                            <td className="align-middle text-right">
                                                19%
                                            </td>
                                            <td className="align-middle text-right">
                                                8.8GB 
                                            </td>
                                            <td className="align-middle text-right">
                                                <i className="fa fa-arrow-up fa-fw text-success"></i>
                                            </td>
                                            <td className="align-middle text-right">
                                                <a href="#" id="tr6">
                                                    <i className="fa fa-fw fa-angle-down"></i>
                                                </a>
                                                <UncontrolledTooltip placement="top" target="tr6">
                                                    Show Details
                                                </UncontrolledTooltip>
                                            </td>    
                                        </tr>
                                        <UncontrolledCollapse toggler="#tr6">
                                            <tr>
                                                <td colSpan="8" className="bt-0">
                                                   <samp className="small">{ faker.internet.ip() }</samp>
                                                </td>
                                            </tr>
                                        </UncontrolledCollapse>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Reports'
})(Reports);