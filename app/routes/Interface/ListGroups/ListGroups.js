import React from "react";
import { faker } from "@faker-js/faker";

import {
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Badge,
  Button,
  Media,
  Avatar,
  AvatarAddOn,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  CustomInput,
  CardText,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const cardText = ({ cardNo }) => (
  <CardText>
    <span className="mr-2 text-muted">#{cardNo}</span> Lorem ipsum dolor sit
    amet, consectetur adipiscing elit. Nulla nisl elit, porta a sapien eget,
    fringilla sagittis ex.
  </CardText>
);

const cardContent = (title = "Some Card Title") => (
  <CardBody>
    <CardTitle>{title}</CardTitle>
    {cardText}
  </CardBody>
);

const ListGroups = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="List Groups" className="mb-5 mt-4" />
      {/* START Header 1 */}
      <Row>
        <Col lg={12}>
          <HeaderDemo
            no={1}
            title="Basic Examples"
            subTitle="List groups are a flexible and powerful component for displaying a series of content."
          />
        </Col>
      </Row>
      {/* END Header 1 */}
      {/* START Section 1 */}
      <Row>
        {/* START Col6 1 */}
        <Col lg={6}>
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Basic Example
              <span className="small ml-1 text-muted">#1.01</span>
            </h6>
            <p>
              The most basic list group is an unordered list with list items and
              the proper classes. Example:{" "}
              <code>&lt;ListGroupItem&gt; ... &lt;/ListGroupItem&gt;</code>.
            </p>
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Disabled Items
              <span className="small ml-1 text-muted">#1.03</span>
            </h6>
            <p>
              Add <code>disabled</code> to a <code>ListGroupItem</code> to make
              it appear disabled.
            </p>
            <ListGroup>
              <ListGroupItem disabled>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Links and Buttons (Disabled)
              <span className="small ml-1 text-muted">#1.05</span>
            </h6>
            <p>
              Add <code>active</code> to a <code>ListGroupItem</code> to make it
              appear active.
            </p>
            <ListGroup>
              <ListGroupItem active tag="a" href="#" action>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem disabled tag="a" href="#" action>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Contextual Classes
              <span className="small ml-1 text-muted">#1.07</span>
            </h6>
            <p>
              From the color palette, add to <code>&lt;ListGroupItem&gt;</code>{" "}
              for example: <code>success</code>, <code>primary</code> etc.
            </p>
            <ListGroup>
              <ListGroupItem color="white">Cras justo odio</ListGroupItem>
              <ListGroupItem color="primary">
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem color="secondary">Morbi leo risus</ListGroupItem>
              <ListGroupItem color="success">
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem color="danger">Vestibulum at eros</ListGroupItem>
              <ListGroupItem color="warning">Cras justo odio</ListGroupItem>
              <ListGroupItem color="info">
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem color="light">Morbi leo risus</ListGroupItem>
              <ListGroupItem color="dark">Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: With Badges
              <span className="small ml-1 text-muted">#1.09</span>
            </h6>
            <p>
              Add Badge, for example:
              <code>
                &lt;Badge pill className="ml-auto
                align-self-center"&gt;14&lt;/Badge&gt;
              </code>
              .
            </p>
            <ListGroup>
              <ListGroupItem className="justify-content-between d-flex">
                Cras justo odio
                <Badge pill className="ml-auto align-self-center">
                  14
                </Badge>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between d-flex">
                Dapibus ac facilisis in
                <Badge pill className="ml-auto align-self-center">
                  2
                </Badge>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between d-flex">
                Morbi leo risus
                <Badge pill className="ml-auto align-self-center">
                  1
                </Badge>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
        </Col>
        {/* END Col6 1 */}
        {/* START Col6 2 */}
        <Col lg={6}>
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Active Items (Anchors)
              <span className="small ml-1 text-muted">#1.02</span>
            </h6>
            <p>
              The most basic list group is an unordered list with list items and
              the proper classes. Example:{" "}
              <code>
                &lt;ListGroupItem active tag="a" href="#" action&gt; ...
                &lt;/ListGroupItem&gt;
              </code>
              .
            </p>
            <ListGroup>
              <ListGroupItem active tag="a" href="#" action>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem tag="a" href="#" action>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem disabled tag="a" href="#" action>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Active Items (Buttons)
              <span className="small ml-1 text-muted">#1.04</span>
            </h6>
            <p>
              The most basic list group is an unordered list with list items and
              the proper classes. Example:{" "}
              <code>
                &lt;ListGroupItem active tag="a" href="#" action&gt; ...
                &lt;/ListGroupItem&gt;
              </code>
              .
            </p>
            <ListGroup>
              <ListGroupItem active tag="button" href="#" action>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem disabled tag="button" href="#" action>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Flush
              <span className="small ml-1 text-muted">#1.06</span>
            </h6>
            <p>
              Often used in combination with Cards. Just add to{" "}
              <code>&lt;ListGroup flush&gt;</code>.
            </p>
            <ListGroup flush>
              <ListGroupItem tag="button" href="#" action>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem tag="button" href="#" action>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Custom Content
              <span className="small ml-1 text-muted">#1.09</span>
            </h6>
            <p>
              Here is an example of combination
              <code>&lt;ListGroupItemHeading className="h6"&gt;</code>
              and <code>&lt;ListGroupItemText&gt;</code>
            </p>
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading className="h6">
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                  {faker.lorem.sentence()}
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading className="h6">
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                  {faker.lorem.sentence()}
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading className="h6">
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                  {faker.lorem.sentence()}
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
        </Col>
        {/* END Col6 2 */}
      </Row>
      {/* END Section 1 */}

      {/* START Header 2 */}
      <Row>
        <Col lg={12}>
          <HeaderDemo
            no={2}
            title="UI Examples"
            className="mt-5"
            subTitle="The most commonly used UI/UX elements in applications."
          />
        </Col>
      </Row>
      {/* END Header 2 */}
      {/* START Section 2 */}
      <Row>
        {/* START Col6 1 */}
        <Col lg={6}>
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Default
              <span className="small ml-1 text-muted">#2.01</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="warning"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Color Header
              <span className="small ml-1 text-muted">#2.02</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1 text-success">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1 text-danger">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1 text-warning">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="warning"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Color Text
              <span className="small ml-1 text-muted">#2.04</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="text-muted mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="text-danger mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="text-success mb-0">
                      {faker.lorem.sentence()}
                    </p>
                  </Media>
                  <Media right top>
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Status Icon
              <span className="small ml-1 text-muted">#2.06</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top>
                    <i className="fa fa-circle text-danger"></i>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="warning"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top>
                    <i className="fa fa-circle text-warning"></i>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top>
                    <i className="fa fa-circle text-success"></i>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Right Button
              <span className="small ml-1 text-muted">#2.08</span>
            </h6>
            <ListGroup>
              <ListGroupItem href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <Button outline color="secondary" size="sm">
                      <i className="fa fa-user fa-fw"></i>
                    </Button>{" "}
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <Button outline color="secondary" size="sm">
                      <i className="fa fa-gear fa-fw"></i>
                    </Button>{" "}
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <Button outline color="secondary" size="sm">
                      <i className="fa fa-exclamation-circle fa-fw"></i>
                    </Button>{" "}
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Left Icons Single
              <span className="small ml-1 text-muted">#2.10</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <i className="fa fa-file-pdf-o fa-fw fa-lg text-danger"></i>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Document PDF</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <i className="fa fa-file-word-o fa-fw fa-lg text-primary"></i>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Document Word</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <i className="fa fa-file-excel-o fa-fw fa-lg text-success"></i>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Document Excell</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Right Radio
              <span className="small ml-1 text-muted">#2.12</span>
            </h6>
            <ListGroup>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <div>
                      <CustomInput
                        type="radio"
                        id="rightRadio1"
                        name="customRadio"
                        label=""
                        defaultChecked
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <div>
                      <CustomInput
                        type="radio"
                        id="rightRadio2"
                        name="customRadio"
                        label=""
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top>
                    <div>
                      <CustomInput
                        type="radio"
                        id="rightRadio3"
                        name="customRadio"
                        label=""
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Left Radio
              <span className="small ml-1 text-muted">#2.14</span>
            </h6>
            <ListGroup>
              <ListGroupItem>
                <Media>
                  <Media left className="mr-3">
                    <CustomInput
                      type="radio"
                      id="leftRadio1"
                      name="leftRadio"
                      label=""
                      defaultChecked
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-3">
                    <CustomInput
                      type="radio"
                      id="leftRadio2"
                      name="leftRadio"
                      label=""
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-3">
                    <CustomInput
                      type="radio"
                      id="leftRadio3"
                      name="leftRadio"
                      label=""
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
        </Col>
        {/* END Col6 1 */}
        {/* START Col6 2 */}
        <Col lg={6}>
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Left Default
              <span className="small ml-1 text-muted">#2.02</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="warning"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Right Badge
              <span className="small ml-1 text-muted">#2.03</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right middle>
                    <Badge color="secondary">Offline</Badge>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="danger"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right middle>
                    <Badge color="danger">Busy</Badge>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="success"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right middle>
                    <Badge color="success">Online</Badge>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Right Icon
              <span className="small ml-1 text-muted">#2.07</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <i className="fa fa-user"></i>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <i className="fa fa-gear"></i>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media left top className="ml-2">
                    <i className="fa fa-exclamation-circle"></i>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Left Icon
              <span className="small ml-1 text-muted">#2.09</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x text-success"></i>
                      <i className="fa fa-check fa-stack-1x text-white"></i>
                    </span>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Success</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x text-danger"></i>
                      <i className="fa fa-close fa-stack-1x text-white"></i>
                    </span>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Danger</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-3">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x text-warning"></i>
                      <i className="fa fa-exclamation fa-stack-1x text-white"></i>
                    </span>
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">Warning</span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Right Button
              <span className="small ml-1 text-muted">#2.08</span>
            </h6>
            <ListGroup>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="rightCheckbox1"
                        label=""
                        defaultChecked
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="rightCheckbox2"
                        label=""
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem tag="button" action href="#">
                <Media>
                  <Media left top className="mr-4">
                    <Avatar.Image
                      size="md"
                      src={randomAvatar()}
                      addOns={[
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="white"
                          key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                          className="fa fa-circle"
                          color="secondary"
                          key="avatar-icon-fg"
                        />,
                      ]}
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                  <Media right top className="ml-2">
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="rightCheckbox3"
                        label=""
                      />
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
          {/* START Example */}
          <div className="mb-5">
            <h6>
              List Groups: Media: Left Checkbox
              <span className="small ml-1 text-muted">#2.13</span>
            </h6>
            <ListGroup>
              <ListGroupItem>
                <Media>
                  <Media left className="mr-3">
                    <CustomInput
                      className="pt-0 mt-0"
                      type="checkbox"
                      id="leftCheckbox1"
                      label=""
                      defaultChecked
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-3">
                    <CustomInput
                      className="pt-0 mt-0"
                      type="checkbox"
                      id="leftCheckbox2"
                      name="leftRadio"
                      label=""
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <Media>
                  <Media left top className="mr-3">
                    <CustomInput
                      className="pt-0 mt-0"
                      type="checkbox"
                      id="leftCheckbox3"
                      name="leftRadio"
                      label=""
                    />
                  </Media>
                  <Media body>
                    <span className="mt-0 d-flex h6 mb-1">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </span>
                    <p className="mb-0">{faker.lorem.sentence()}</p>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* END Example */}
        </Col>
        {/* END Col6 2 */}
      </Row>
      {/* END Section 2 */}
    </Container>
  </React.Fragment>
);

export default ListGroups;
