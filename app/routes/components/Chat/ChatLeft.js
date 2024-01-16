import React from "react";
import PropTypes from "prop-types";

import { faker } from "@faker-js/faker";

import { Card, Media, Avatar, AvatarAddOn } from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";

const status = ["warning", "danger", "success", "secondary"];

const ChatLeft = (props) => (
  <React.Fragment>
    <Media className="mb-2">
      <Media left className="mr-3">
        <Avatar.Image
          size="md"
          src={randomAvatar()}
          className="mr-2"
          addOns={[
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color={randomArray(status)}
              key="avatar-icon-fg"
            />,
          ]}
        />
      </Media>
      <Media body>
        <Card body className={`mb-2 ${props.cardClassName}`}>
          <p className="mb-0">{faker.lorem.paragraph()}</p>
        </Card>
        <div className="mb-2">
          <span className="text-inverse mr-2">
            {faker.person.firstName()} {faker.person.firstName()}
          </span>
          <span className="small">13-Jun-2015, 08:13</span>
        </div>
      </Media>
    </Media>
  </React.Fragment>
);
ChatLeft.propTypes = {
  cardClassName: PropTypes.node,
};
ChatLeft.defaultProps = {
  cardClassName: "bg-white",
};

export { ChatLeft };
