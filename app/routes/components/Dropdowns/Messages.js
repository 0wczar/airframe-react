import React from "react";
import { faker } from "@faker-js/faker";

import { Avatar, AvatarAddOn, Media } from "./../../../components";
import { randomArray, randomAvatar } from "./../../../utilities";

const status = ["success", "danger", "warning", "secondary"];

const Messages = () => (
  <React.Fragment>
    <Media>
      <Media left className="mr-4">
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
              color={randomArray(status)}
              key="avatar-icon-fg"
            />,
          ]}
        />
      </Media>
      <Media body className="text-left">
        <span className="d-flex justify-content-start">
          <span className="h6 pb-0 mb-0 d-flex align-items-center">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>

          <span className="ml-1 small">(23)</span>
          <span className="ml-auto small">Now</span>
        </span>
        <p className="mt-2 mb-1">{faker.lorem.sentences()}</p>
        <span className="small">{faker.date.past().toString()}</span>
      </Media>
    </Media>
  </React.Fragment>
);

export { Messages };
