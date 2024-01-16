import React from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Badge,
  Avatar,
  CustomInput,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  AvatarAddOn,
} from "./../../../../components";

import { randomArray, randomAvatar } from "./../../../../utilities";

const badges = ["secondary"];

const avatarStatus = ["secondary", "warning", "danger", "success"];

const prioStatus = [
  <React.Fragment key="1">
    <i className="fa fa-circle text-success mr-2"></i>
    Small
    <i className="fa fa-angle-down ml-2" />
  </React.Fragment>,
  <React.Fragment key="2">
    <i className="fa fa-circle text-primary mr-2"></i>
    Normal
    <i className="fa fa-angle-down ml-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <i className="fa fa-circle text-warning mr-2"></i>
    High
    <i className="fa fa-angle-down ml-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <i className="fa fa-circle text-danger mr-2"></i>
    Big
    <i className="fa fa-angle-down ml-2" />
  </React.Fragment>,
];

const TrTableTasksList = (props) => (
  <React.Fragment>
    <tr>
      <td className="align-middle">
        <CustomInput
          type="checkbox"
          id={`TrTableTasksList-${props.id}`}
          label=""
          inline
        />
      </td>
      <td className="align-middle">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="link"
            link
            size="sm"
            className="pl-0 mb-3 text-decoration-none"
          >
            {randomArray(prioStatus)}
          </DropdownToggle>
          <DropdownMenu>
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
            <DropdownItem>
              <i className="fa fa-circle text-success mr-2"></i>
              Small
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
      <td className="align-middle">
        <div>
          <span className="mr-2">#{faker.number.int()}</span>
          <Link to="/apps/task-details" className="text-decoration-none">
            {faker.hacker.phrase()}
          </Link>
        </div>
        <p className="mb-0">
          <span className="mr-2">{faker.lorem.sentence()}</span>
          <Badge pill color={randomArray(badges)} className="mr-1">
            {faker.commerce.department()}
          </Badge>
          <Badge pill color={randomArray(badges)} className="mr-1">
            {faker.commerce.department()}
          </Badge>
        </p>
      </td>
      <td className="align-middle">
        <Avatar.Image
          size="md"
          src={randomAvatar()}
          className="mr-3"
          addOns={[
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color={randomArray(avatarStatus)}
              key="avatar-icon-fg"
            />,
          ]}
        />
      </td>
      <td className="align-middle">16-Jul-2016</td>
      <td className="align-middle text-right">
        <UncontrolledButtonDropdown className="align-self-center ml-auto">
          <DropdownToggle color="link" size="sm">
            <i className="fa fa-gear" />
            <i className="fa fa-angle-down ml-2" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <i className="fa fa-fw fa-folder-open mr-2"></i>
              View
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-fw fa-ticket mr-2"></i>
              Add Task
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-fw fa-paperclip mr-2"></i>
              Add Files
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <i className="fa fa-fw fa-trash mr-2"></i>
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
    </tr>
  </React.Fragment>
);

TrTableTasksList.propTypes = {
  id: PropTypes.node,
};
TrTableTasksList.defaultProps = {
  id: "1",
};

export { TrTableTasksList };
