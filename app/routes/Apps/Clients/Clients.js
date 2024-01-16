import React from "react";
import { faker } from "@faker-js/faker";

import {
  Container,
  Row,
  Col,
  Card,
  ButtonToolbar,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Table,
  TabPane,
  Badge,
  Nav,
  NavItem,
  Pagination,
  PaginationLink,
  PaginationItem,
  UncontrolledTooltip,
  UncontrolledTabs,
} from "./../../../components";

import { HeaderMain } from "../../components/HeaderMain";
import { Profile } from "../../components/Profile";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { TrTableClients } from "./components/TrTableClients";
import { TrTableCompanies } from "./components/TrTableCompanies";

const Clients = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="Clients" className="mb-5 mt-4" />
      {/* START Content */}
      <Row>
        <Col lg={8}>
          <Card className="mb-3">
            <UncontrolledTabs initialActiveTabId="clients">
              <CardBody>
                <div className="d-flex">
                  <Nav pills>
                    <NavItem>
                      <UncontrolledTabs.NavLink tabId="clients">
                        Clients
                      </UncontrolledTabs.NavLink>
                    </NavItem>
                    <NavItem>
                      <UncontrolledTabs.NavLink tabId="companies">
                        Companies
                      </UncontrolledTabs.NavLink>
                    </NavItem>
                  </Nav>
                  <ButtonToolbar className="ml-auto">
                    <ButtonGroup>
                      <Button
                        color="link"
                        className="align-self-center mr-2 text-decoration-none"
                        id="tooltipSettings"
                      >
                        <i className="fa fa-fw fa-gear"></i>
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button
                        color="primary"
                        className="align-self-center"
                        id="tooltipAddNew"
                      >
                        <i className="fa fa-fw fa-plus"></i>
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  <UncontrolledTooltip placement="right" target="tooltipAddNew">
                    Add New
                  </UncontrolledTooltip>
                  <UncontrolledTooltip
                    placement="right"
                    target="tooltipSettings"
                  >
                    Settings
                  </UncontrolledTooltip>
                </div>
              </CardBody>

              <UncontrolledTabs.TabContent>
                <TabPane tabId="clients">
                  {/* START Table */}
                  <Table className="mb-0" hover responsive>
                    <thead>
                      <tr>
                        <th className="bt-0"></th>
                        <th className="bt-0"></th>
                        <th className="bt-0">Name</th>
                        <th className="bt-0">Email</th>
                        <th className="text-right bt-0">Phone</th>
                        <th className="text-right bt-0">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TrTableClients />
                      <TrTableClients id="2" />
                      <TrTableClients id="3" />
                      <TrTableClients id="4" />
                      <TrTableClients id="5" />
                      <TrTableClients id="6" />
                      <TrTableClients id="7" />
                      <TrTableClients id="8" />
                      <TrTableClients id="9" />
                    </tbody>
                  </Table>
                  {/* END Table */}
                </TabPane>
                <TabPane tabId="companies">
                  {/* START Table */}
                  <Table className="mb-0" hover responsive>
                    <thead>
                      <tr>
                        <th className="bt-0"></th>
                        <th className="bt-0"></th>
                        <th className="bt-0">Name</th>
                        <th className="bt-0">PM</th>
                        <th className="text-right bt-0">Phone</th>
                        <th className="text-right bt-0">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TrTableCompanies />
                      <TrTableCompanies id="2" />
                      <TrTableCompanies id="3" />
                      <TrTableCompanies id="4" />
                      <TrTableCompanies id="5" />
                      <TrTableCompanies id="6" />
                      <TrTableCompanies id="7" />
                      <TrTableCompanies id="8" />
                      <TrTableCompanies id="9" />
                      <TrTableCompanies id="10" />
                      <TrTableCompanies id="11" />
                      <TrTableCompanies id="12" />
                    </tbody>
                  </Table>
                  {/* END Table */}
                </TabPane>
              </UncontrolledTabs.TabContent>
            </UncontrolledTabs>

            <CardFooter className="d-flex">
              <span className="align-self-center">
                Showing 1 to 10 of 57 entries
              </span>
              <Pagination
                aria-label="Page navigation example"
                className="ml-auto"
              >
                <PaginationItem>
                  <PaginationLink previous href="#">
                    <i className="fa fa-fw fa-angle-left"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#">
                    <i className="fa fa-fw fa-angle-right"></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardFooter>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardBody>
              <Profile />
              <div className="text-center pb-1">
                <ul className="list-inline">
                  <li className="list-inline-item text-center">
                    <h2 className="mb-1">23</h2>
                    <span>Contracts</span>
                  </li>
                  <li className="list-inline-item text-center">
                    <h2 className="mb-1">13</h2>
                    <span>Tasks</span>
                  </li>
                  <li className="list-inline-item text-center">
                    <h2 className="mb-1">5</h2>
                    <span>Relases</span>
                  </li>
                </ul>
              </div>
              <Row className="mt-3">
                <Col sm={6}>
                  <Button color="primary" block>
                    Message
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button color="secondary" outline block>
                    Edit
                  </Button>
                </Col>
              </Row>
              <div className="mt-4 mb-2">
                <span className="small">Profile</span>
              </div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sapiente earum, necessitatibus commodi eius pariatur repudiandae
                cum sunt officiis ex!
              </p>
              <div className="mt-4 mb-2">
                <span className="small">Labels</span>
              </div>
              <div className="text-left mb-4">
                <Badge pill color="primary" className="mr-1">
                  {faker.commerce.department()}
                </Badge>
                <Badge pill color="secondary" className="mr-1">
                  {faker.commerce.department()}
                </Badge>
                <Badge pill color="primary" className="mr-1">
                  {faker.commerce.department()}
                </Badge>
              </div>
              <div className="mt-4 mb-2">
                <span className="small">Contact</span>
              </div>
              <DlRowContacts
                leftSideClassName="text-left"
                rightSideClassName="text-right text-inverse"
              />
              <div className="mt-4 mb-2">
                <span className="small">Address</span>
              </div>
              <DlRowAddress
                leftSideClassName="text-left"
                rightSideClassName="text-right text-inverse"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* END Content */}
    </Container>
  </React.Fragment>
);

export default Clients;
