import React from "react";
import { faker } from "@faker-js/faker";

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Table,
  Button,
  Card,
  CardBody,
  CardFooter,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Input,
  InputGroup,
  CustomInput,
  InputGroupAddon,
  Badge,
  Avatar,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { HeaderMain } from "../../components/HeaderMain";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { Attachment } from "../../components/Attachment";
import { Comment } from "../../components/Comment";

const TasksDetails = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="Tasks Details" className="mb-5 mt-4" />
      {/* START Header 1 */}
      <Row>
        <Col lg={3}>
          {/* START Left Nav  */}
          <div className="mb-5">
            <div className="small mb-3">Task Details</div>
            <Table size="sm">
              <tbody>
                <tr>
                  <td className="align-middle">Project</td>
                  <td className="text-right">
                    <a href="#" className="text-decoration-none">
                      Analytics Redo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Assigned by</td>
                  <td className="text-right">
                    <a href="#" className="text-decoration-none">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Start Date</td>
                  <td className="text-right">Thu 12 May 2016</td>
                </tr>
                <tr>
                  <td className="align-middle">End Date</td>
                  <td className="text-right">Wed 18 May 2016</td>
                </tr>
                <tr>
                  <td className="align-middle">Priority</td>
                  <td className="text-right">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        color="link"
                        className="p-0 text-decoration-none"
                      >
                        <i className="fa fa-circle text-success mr-2"></i>
                        Small
                        <i className="fa fa-angle-down ml-2" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem header>Select Priority</DropdownItem>
                        <DropdownItem>
                          <i className="fa fa-circle text-danger mr-2"></i>
                          Big
                        </DropdownItem>
                        <DropdownItem>
                          <i className="fa fa-circle text-warning mr-2"></i>
                          High
                        </DropdownItem>
                        <DropdownItem>
                          <i className="fa fa-circle text-primary mr-2"></i>
                          Normal
                        </DropdownItem>
                        <DropdownItem active>
                          <i className="fa fa-circle text-success mr-2"></i>
                          Small
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Progress</td>
                  <td className="align-middle text-right">30%</td>
                </tr>
                <tr>
                  <td className="align-middle">Task ID</td>
                  <td className="align-middle text-right"># 6726746</td>
                </tr>
                <tr>
                  <td className="align-middle">Date Assigned</td>
                  <td className="align-middle text-right">
                    Wed, 16 Dec 2015, 12:17 PM
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* END Left Nav  */}
          {/* START Left Nav  */}
          <div className="mb-4">
            <div className="small mb-3">Assigned to</div>
            <Nav pills vertical>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="mr-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <i className="fa fa-fw fa-circle text-success ml-auto align-self-center ml-2"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="mr-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <i className="fa fa-fw fa-circle text-warning ml-auto align-self-center ml-2"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="mr-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <i className="fa fa-fw fa-circle text-danger ml-auto align-self-center ml-2"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="fa fa-fw fa-plus mr-2"></i>
                  Add New People
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* END Left Nav  */}
        </Col>
        <Col lg={9}>
          <ProjectsSmHeader
            subTitle="Tasks"
            subTitleLink="/apps/tasks/grid"
            title="Task Details"
          />
          {/* START Right Content */}
          <Card>
            <CardBody>
              <Media>
                <Media left href="#">
                  <CustomInput
                    type="checkbox"
                    id="checkboxTaskDetails"
                    label=""
                    inline
                  />
                </Media>
                <Media body>
                  <div className="mb-3">
                    <h5>
                      <span className="mr-2">#{faker.number.int()}</span>
                      {faker.hacker.phrase()}
                    </h5>
                    <Badge pill color="primary" className="mr-1">
                      {faker.commerce.department()}
                    </Badge>
                    <Badge pill color="secondary" className="mr-1">
                      {faker.commerce.department()}
                    </Badge>
                    <Badge pill color="secondary" className="mr-1">
                      {faker.commerce.department()}
                    </Badge>
                  </div>
                </Media>
              </Media>
              <p className="lead">
                Animi ea magni voluptates accusamus laboriosam. Unde repellat
                hic id et aliquam ut qui dignissimos.
              </p>
              <p className="mb-4">{faker.lorem.paragraphs()}</p>
              {/* START Atachemnts */}
              <div className="mb-4">
                <div className="mb-3">
                  <span className="small mr-3">Attachments</span>
                  <Badge pill color="secondary">
                    3
                  </Badge>
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-word-o"
                    iconClassName="text-white"
                    BgIconClassName="text-primary"
                  />
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-excel-o"
                    iconClassName="text-white"
                    BgIconClassName="text-success"
                  />
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-powerpoint-o"
                    iconClassName="text-white"
                    BgIconClassName="text-warning"
                  />
                </div>
                <div className="mb-5">
                  <a href="#">
                    <i className="fa fa-plus mr-2"></i>
                    Add More Files to this Task
                  </a>
                </div>
              </div>
              {/* END Atachemnts */}
              <div className="mb-3">
                <span className="small mr-3">Comments</span>
                <Badge pill color="secondary">
                  3
                </Badge>
              </div>
              <Comment />
              <Comment />
              {/* END Comment Media */}
            </CardBody>
            <CardFooter>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="secondary" outline>
                    <i className="fa fa fa-paperclip"></i>
                  </Button>
                </InputGroupAddon>
                <Input placeholder="Your message..." />
                <InputGroupAddon addonType="append">
                  <Button color="primary">
                    <i className="fa fa fa-send"></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </CardFooter>
          </Card>
          {/* END Right Content */}
        </Col>
      </Row>
      {/* END Header 1 */}
    </Container>
  </React.Fragment>
);

export default TasksDetails;
