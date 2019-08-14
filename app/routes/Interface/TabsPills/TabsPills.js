import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Nav,
    NavItem, 
    NavLink,
    Badge,
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const TabsPills = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tabs & Pills"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Pills Designs" 
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Fill & Justify
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p>
                                Easily make pills equal widths of their 
                                parent with <code>.nav-justified</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Pills Variations" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Center
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="d-flex justify-content-center">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Right
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="d-flex justify-content-end">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left Badges
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Waiting
                                        </Badge> 
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Doing
                                        </Badge> 
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Safe
                                        </Badge> 
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left & Right Badges
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active className="flex-sm-fill d-flex justify-content-between">
                                        <Badge color="secondary" className="align-self-center">
                                            2.562
                                        </Badge> 
                                        <span className="align-self-center">
                                            Profile
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Done
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="flex-sm-fill d-flex justify-content-between">
                                        <Badge color="secondary" className="align-self-center">
                                            2.300
                                        </Badge> 
                                        <span className="align-self-center">
                                            Settings
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Ready
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="flex-sm-fill d-flex justify-content-between" disabled>
                                        <Badge color="secondary" className="align-self-center">
                                            7.082
                                        </Badge> 
                                        <span className="align-self-center">
                                            Logout
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Upload
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left Icon
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Icon
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active className="d-flex">
                                        Profile
                                        <i className="fa fa-fw fa-user ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <i className="fa fa-fw fa-gear ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left & Right Icons
                                <span className="small ml-1 text-muted">
                                    #2.08
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        <i className="fa fa-fw fa-user align-self-center mr-2"></i>
                                        Profile
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        <i className="fa fa-fw fa-gear align-self-center mr-2"></i>
                                        Settings
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        <i className="fa fa-fw fa-sign-out  align-self-center mr-2"></i>
                                        Logout
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Pills
                                <span className="small ml-1 text-muted">
                                    #2.09
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        Profile
                                        <Badge color="secondary" pill className="ml-auto align-self-center">3</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <Badge color="secondary" pill className="ml-auto align-self-center">15</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <Badge color="secondary" pill className="ml-auto align-self-center">986</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Badges
                                <span className="small ml-1 text-muted">
                                    #2.10
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        Profile
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Added
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Query
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Done
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>

                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Pills Appearance" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Left Icons
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Right Icons
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <i className="fa fa-fw fa-user ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <i className="fa fa-fw fa-gear ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out ml-2"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Only Icons
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.04
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Right Icon
                                <span className="small ml-1 text-muted">
                                    #3.05
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <i className="fa fa-fw fa-user ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <i className="fa fa-fw fa-gear ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out ml-2"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Only Icon
                                <span className="small ml-1 text-muted">
                                    #3.06
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Right Pills
                                <span className="small ml-1 text-muted">
                                    #3.07
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <Badge color="secondary" pill className="align-self-center ml-2">3</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <Badge color="secondary" pill className="align-self-center ml-2">9</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <Badge color="secondary" pill className="align-self-center ml-2">87</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Left Pills
                                <span className="small ml-1 text-muted">
                                    #3.08
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                         <Badge color="secondary" pill className="align-self-center mr-2">3</Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" pill className="align-self-center mr-2">9</Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" pill className="align-self-center mr-2">87</Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Left Pills
                                <span className="small ml-1 text-muted">
                                    #3.09
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                         <Badge color="secondary" pill className="align-self-center mr-2">1</Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" pill className="align-self-center mr-2">2</Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" pill className="align-self-center mr-2">3</Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Left Pills
                                <span className="small ml-1 text-muted">
                                    #3.10
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                         <Badge color="secondary" className="align-self-center mr-2">
                                            Done
                                         </Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Add
                                        </Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Failed
                                        </Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Left Badges
                                <span className="small ml-1 text-muted">
                                    #3.11
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                         <Badge color="secondary" className="align-self-center mr-2">
                                            Ready
                                         </Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Alert
                                        </Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Done
                                        </Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Justify Right Badges
                                <span className="small ml-1 text-muted">
                                    #3.12
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            $3,2K
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            $821
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            $23
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Right Badges
                                <span className="small ml-1 text-muted">
                                    #3.13
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            1
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            0
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            2
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Tabs Design" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Default
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Justify
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p>
                                Easily make tabs equal widths of their parent with <code>.nav-justified</code> class.
                            </p>
                            <Nav tabs className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Tabs Variations" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Center
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink href="#" active>
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Settings
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" disabled>
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Right
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <div className="d-flex justify-content-end">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink href="#" active>
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Settings
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" disabled>
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Left Icons
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Right Icons
                                <span className="small ml-1 text-muted">
                                    #5.04
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <i className="fa fa-fw fa-user ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <i className="fa fa-fw fa-gear ml-2"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out ml-2"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Only Icons
                                <span className="small ml-1 text-muted">
                                    #5.05
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Big Icons
                                <span className="small ml-1 text-muted">
                                    #5.06
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active className="text-center">
                                        <i className="fa fa-fw fa-user"></i>
                                        <div>Profile</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-center">
                                        <i className="fa fa-fw fa-gear"></i>
                                        <div>Settings</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-center" disabled>
                                        <i className="fa fa-fw fa-sign-out"></i>
                                        <div>Logout</div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Right Pills
                                <span className="small ml-1 text-muted">
                                    #5.07
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <Badge color="secondary" pill className="align-self-center ml-2">3</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <Badge color="secondary" pill className="align-self-center ml-2">9</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <Badge color="secondary" pill className="align-self-center ml-2">87</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Only Pills
                                <span className="small ml-1 text-muted">
                                    #5.08
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" pill className="align-self-center">3</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" pill className="align-self-center">9</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" pill className="align-self-center">87</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Left Pills
                                <span className="small ml-1 text-muted">
                                    #5.09
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" pill className="align-self-center mr-2">1</Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" pill className="align-self-center mr-2">2</Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" pill className="align-self-center mr-2">3</Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Right Badges
                                <span className="small ml-1 text-muted">
                                    #5.10
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            Added
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            Query
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                        <Badge color="secondary" className="align-self-center ml-2">
                                            Ready
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Left Badges
                                <span className="small ml-1 text-muted">
                                    #5.11
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Wait
                                        </Badge>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Do
                                        </Badge>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Ok
                                        </Badge>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Tabs: Only Badges
                                <span className="small ml-1 text-muted">
                                    #5.12
                                </span>
                            </CardTitle>
                            <p>
                                Basic tabs example using <code>&lt;Nav tabs&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" className="align-self-center">
                                            Waiting
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center">
                                            Doing
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center">
                                            Done
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}
        </Container>
    </React.Fragment>
);

export default TabsPills;