import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    ButtonGroup,
    Progress,
    Button,
    ButtonToolbar,
    Nav,
    CustomInput,
    NavItem,
    Input,
    Form,
    InputGroup,
    InputGroupAddon,
    FormGroup,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabPane,
    UncontrolledTabs,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    CardHeader,
    CardBody,
    CardTitle
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import {
    HeaderDemo
} from "../../components/HeaderDemo";
import {
    CardTextDemo
} from "../../components/CardTextDemo";


const Cards = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Cards Headers"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Cards Headers - Text" 
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Header
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Above Small Text<br />
                                <span className="small">
                                    Small Text
                                </span>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Small Text
                                <Badge className="ml-2" color="primary">
                                    3
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Default Small Text
                                <Badge className="ml-2 ml-auto" color="primary">
                                    Updated
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <i className="fa fa-gear mr-2"></i> Header Left Icon
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Right Icon 
                                <i className="fa fa-gear ml-2"></i>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Icon 
                                <i className="fa fa-gear ml-auto"></i>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="text-center">
                                Header Center
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.08"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <span className="small">
                                    Small Text
                                </span>
                                <br />
                                Header Above Small Text
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Side Pill
                                <Badge className="ml-2 ml-auto" color="primary" pill>
                                    New
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Left Pill
                                <Badge className="ml-2" color="primary" pill>
                                    4
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Cards Headers - Navs" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users201a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users201a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings201b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users201a">
                                        <CardTextDemo 
                                            cardNo="2.01a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings201b">
                                        <CardTextDemo 
                                            cardNo="2.01b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users202a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users202a">
                                            <i className="fa fa-user mr-2"></i> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings202b">
                                            <i className="fa fa-gear mr-2"></i> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users202a">
                                        <CardTextDemo 
                                            cardNo="2.02a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings202b">
                                        <CardTextDemo 
                                            cardNo="2.02b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users203a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users203a">
                                            <i className="fa fa-user fa-fw"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings203b">
                                            <i className="fa fa-gear fa-fw"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users203a">
                                        <CardTextDemo 
                                            cardNo="2.03a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings203b">
                                        <CardTextDemo 
                                            cardNo="2.03b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users204a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users204a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings204b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users204a">
                                        <CardTextDemo 
                                            cardNo="2.04a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings204b">
                                        <CardTextDemo 
                                            cardNo="2.04b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users205a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users205a">
                                            <i className="fa fa-user mr-2"></i> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings205b">
                                            <i className="fa fa-gear mr-2"></i> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users205a">
                                        <CardTextDemo 
                                            cardNo="2.05a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings205b">
                                        <CardTextDemo 
                                            cardNo="2.05b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users206a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users206a">
                                            <i className="fa fa-user"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings206b">
                                            <i className="fa fa-gear"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users206a">
                                        <CardTextDemo 
                                            cardNo="2.06a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings206b">
                                        <CardTextDemo 
                                            cardNo="2.06b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Cards Headers - Buttons" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Pagination
                                </CardTitle>
                                <Pagination size="sm" aria-label="Page navigation example" className="ml-auto">                                    <PaginationItem>
                                    <PaginationLink previous href="#">
                                        <i className="fa fa-angle-left"></i>
                                    </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#">
                                            <i className="fa fa-angle-right"></i>
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                            <CardTextDemo 
                                cardNo="3.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Group
                                </CardTitle>
                                <ButtonGroup className="ml-auto" size="sm">
                                    <Button outline>
                                        <i className="fa fa-angle-left mr-2"></i>
                                        Prev
                                    </Button>
                                    <Button outline>
                                        Next
                                        <i className="fa fa-angle-right ml-2"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Buttons Left
                                </CardTitle>
                                <Button outline size="sm" className="ml-2">
                                    Add
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Right
                                </CardTitle>
                                <Button outline size="sm" className="ml-auto">
                                    Button
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Right
                                </CardTitle>
                                <Button outline size="sm" className="ml-auto">
                                    <i className="fa fa-gear"></i>
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Link Right Icon
                                </CardTitle>
                                <Button color="link" size="sm" className="ml-auto pt-0">
                                    <i className="fa fa-pencil"></i>
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Vertical Button Group
                                </CardTitle>
                                <ButtonGroup vertical size="sm" className="ml-auto">
                                    <Button outline>
                                        <i className="fa fa-angle-up"></i>
                                    </Button>
                                    <Button outline>
                                        <i className="fa fa-angle-down"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Checkbox
                                </CardTitle>
                                <ButtonGroup className="ml-auto" size="sm">
                                    <Button outline>
                                        All
                                    </Button>
                                    <Button outline>
                                        Videos
                                    </Button>
                                    <Button outline>
                                        Docs
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.08"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Radio
                                </CardTitle>
                                <ButtonGroup className="ml-auto" size="sm">
                                    <Button outline>
                                        <i className="fa fa-star-o"></i>
                                    </Button>
                                    <Button outline>
                                        <i className="fa fa-star-half-o"></i>
                                    </Button>
                                    <Button outline>
                                        <i className="fa fa-star"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Nesting
                                </CardTitle>
                                <ButtonGroup className="ml-auto" size="sm">
                                    <Button outline>
                                        Prev
                                    </Button>
                                    <Button outline>
                                        Next
                                    </Button>
                                    <UncontrolledButtonDropdown>
                                        <DropdownToggle size="sm" outline caret>
                                           More
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem header>Jump to:</DropdownItem>
                                            <DropdownItem>First</DropdownItem>
                                            <DropdownItem>End</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Custom...</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Icon-Left
                                </CardTitle>
                                <Button outline size="sm" className="ml-auto">
                                    <i className="fa fa-plus mr-2"></i>Button
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Icon-Right
                                </CardTitle>
                                <Button outline size="sm" className="ml-auto">
                                    Button<i className="fa fa-copy ml-2"></i>
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.12"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Toolbar
                                </CardTitle>
                                <ButtonToolbar className="ml-auto">
                                    <Button color="primary" size="sm" className="mr-2">
                                        Save
                                    </Button>
                                    <Button color="primary" outline size="sm">
                                        Cancel
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.13"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Toolbar Icons Only
                                </CardTitle>
                                <ButtonToolbar className="ml-auto">
                                    <Button color="primary" size="sm" className="mr-2">
                                        <i className="fa fa-fw fa-check"></i>
                                    </Button>
                                    <Button color="primary" outline size="sm">
                                        <i className="fa fa-fw fa-close"></i>
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.14"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Button Icon-Left
                                </CardTitle>
                                <Button outline size="sm" className="ml-3">
                                    <i className="fa fa-fw fa-gear"></i>
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.15"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Button Left Icon-Left
                                </CardTitle>
                                <Button color="link" size="sm" className="ml-3">
                                    Link
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.16"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Dropdown
                                </CardTitle>
                                <UncontrolledButtonDropdown className="ml-auto">
                                    <DropdownToggle size="sm" outline caret>
                                       Menu
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Menu</DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-user fa-fw mr-2"></i>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-gear fa-fw mr-2"></i>
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <i className="fa fa-sign-out fa-fw mr-2"></i>
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <CardTextDemo 
                                cardNo="3.17"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Dropdown Icon
                                </CardTitle>
                                <UncontrolledButtonDropdown className="ml-auto">
                                    <DropdownToggle size="sm" outline caret>
                                        <i className="fa fa-bars mr-1"></i>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Menu</DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-user fa-fw mr-2"></i>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-gear fa-fw mr-2"></i>
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <i className="fa fa-sign-out fa-fw mr-2"></i>
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <CardTextDemo 
                                cardNo="3.18"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Toolbar
                                </CardTitle>
                                <ButtonToolbar className="ml-auto">
                                    <ButtonGroup size="sm" className="mr-2">
                                        <Button outline>
                                            <i className="fa fa-fw fa-bold"></i>
                                        </Button>
                                        <Button outline>
                                            <i className="fa fa-fw fa-underline"></i>
                                        </Button>
                                        <Button outline>
                                            <i className="fa fa-fw fa-eraser"></i>
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="sm">
                                        <Button outline>
                                            <i className="fa fa-fw fa-link"></i>
                                        </Button>
                                        <Button outline>
                                            <i className="fa fa-fw fa-image"></i>
                                        </Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.19"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Cards Headers - Forms" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox
                                </CardTitle>
                                <CustomInput type="checkbox" className="ml-auto" id="rightCheckbox" label="On/Off" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox Inline
                                </CardTitle>
                                <div className="ml-auto d-flex">
                                    <CustomInput type="checkbox" className="mr-3" id="rightCheckbox1" label="1" />
                                    <CustomInput type="checkbox" id="rightCheckbox2" label="2" />
                                </div>
                            </div>
                            <CardTextDemo 
                                cardNo="4.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox Empty
                                </CardTitle>
                                <CustomInput type="checkbox" className="ml-auto" id="rightCheckboxEmpty" label="" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    <CustomInput type="checkbox" className="ml-auto" id="leftCheckbox" label="Left Checkbox" inline />
                                </CardTitle>
                            </div>
                            <CardTextDemo 
                                cardNo="4.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Radio
                                </CardTitle>
                                <CustomInput type="radio" className="ml-auto" id="rightRadio" label="Select" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    <CustomInput type="radio" className="ml-auto" id="leftRadio" label="Left Radio" />
                                </CardTitle>
                            </div>
                            <CardTextDemo 
                                cardNo="4.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Radio Inline
                                </CardTitle>
                                <div className="ml-auto d-flex">
                                    <CustomInput type="radio" className="mr-3" name="rightRadioInline" id="rightRadioYes" label="Yes" />
                                    <CustomInput type="radio" name="rightRadioInline" id="rightRadioNo" label="No" />
                                </div>
                            </div>
                            <CardTextDemo 
                                cardNo="4.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="flex-grow-1">
                                    Right Custom Select
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect" bsSize="sm" className="ml-auto">
                                            <option value="">Select...</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col> 
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <Input type="text" bsSize="sm" name="text" id="text" className="ml-auto" placeholder="Search..." />
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="Enter Price..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-user"></i>
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="Enter Nick..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-envelope-o mr-1"></i>
                                                Email
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="Enter..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.12"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Radio Addon
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="radio" id="leftRadioAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Radio Custom..." id="leftRadio" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.13"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Checkbox Addon
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="checkbox" id="leftCheckboxAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Checkbox Custom..." id="leftCheckbox" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.14"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="Enter..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    Search
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.15"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="Enter..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    <i className="fa fa-fw fa-search"></i>
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.16"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input placeholder="Left Folders..." id="rightSegmentedDropdown" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="primary" caret>
                                                    <i className="fa fa-fw fa-folder-open"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.17"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Addon & Button
                                </CardTitle>
                                <Form inline className="ml-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                $
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ml-auto" placeholder="0.00" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    Add
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.18"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 4 */}
            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Cards Headers - Various" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <Row className="mb-2">
                                <Col lg={ 6 }>
                                    <CardTitle tag="h6">
                                        Right Progressbar
                                    </CardTitle>
                                </Col>
                                <Col lg={ 6 } className="text-right">
                                    <Progress value={25}>25%</Progress>
                                </Col>
                            </Row>
                            <CardTextDemo 
                                cardNo="5.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col> 
                <Col lg={ 6 }>
                   
                </Col>
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default Cards;
