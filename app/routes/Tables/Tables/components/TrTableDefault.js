import React from "react";
import { faker } from "@faker-js/faker";
import _ from "lodash";
import PropTypes from "prop-types";

import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Avatar,
  AvatarAddOn,
} from "./../../../../components";
import { randomAvatar } from "./../../../../utilities";

/*eslint-disable */
const colorStatus = ["danger", "success", "warning", "secondary"];
/*eslint-enable */

const TrTableDefault = (props) => (
  <React.Fragment>
    {_.times(4, (index) => (
      <tr key={index}>
        <td className="align-middle">
          <div className={props.projectColor}>
            {faker.person.firstName()} {faker.person.lastName()}
          </div>
          <span>{faker.company.name()}</span>
        </td>
        <td className="align-middle">
          <div>Thursday</div>
          <span className="text-danger">Overdue</span>
        </td>
        <td className="align-middle">
          <Media>
            <Media left middle className="mr-3">
              <Avatar.Image
                size="md"
                src={randomAvatar()}
                addOns={[
                  <AvatarAddOn.Icon
                    className="fa fa-circle"
                    color={props.leaderStatus}
                    key="avatar-icon-bg"
                  />,
                  <AvatarAddOn.Icon
                    className="fa fa-circle"
                    color={colorStatus[index % 4]}
                    key="avatar-icon-fg"
                  />,
                ]}
              />
            </Media>
            <Media body>
              <div className="mt-0 d-flex text-inverse">
                {faker.person.firstName()} {faker.person.lastName()}
              </div>
              <span>{faker.person.jobTitle()}</span>
            </Media>
          </Media>
        </td>
        <td className="align-middle">
          <div>{faker.finance.amount()}</div>
          <span>Paid</span>
        </td>
        <td className="align-middle">
          <i className="fa fa-circle-o text-success mr-2"></i>
          {faker.finance.transactionType()}
        </td>
        <td className="align-middle text-right">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              color="link"
              className={` text-decoration-none ${props.dropdownColor} `}
            >
              <i className="fa fa-gear"></i>
              <i className="fa fa-angle-down ml-2"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <i className="fa fa-fw fa-envelope mr-2"></i>
                Send Email
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-phone mr-2"></i>
                Call
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-user mr-2"></i>
                Profile
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

TrTableDefault.propTypes = {
  projectColor: PropTypes.node,
  leaderStatus: PropTypes.node,
  dropdownColor: PropTypes.node,
};
TrTableDefault.defaultProps = {
  projectColor: "text-inverse",
  leaderStatus: "white",
  dropdownColor: "",
};

export { TrTableDefault };
