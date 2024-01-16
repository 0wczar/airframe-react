import React from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Media, CustomInput } from "./../../../components";

const TasksMedia = (props) => (
  <React.Fragment>
    <Media>
      <Media left className="mr-3">
        <CustomInput
          className="pt-0 mt-0"
          type="checkbox"
          id={`taskMedia-${props.id}`}
          label=""
        />
      </Media>
      <Media body>
        <div className="mt-0 mb-2">
          <Link to="/apps/tasks/tasks-details" className="text-decoration-none">
            {faker.hacker.phrase()}
          </Link>
        </div>
        <div className="mb-0">{faker.date.past().toString()}</div>
      </Media>
      <Media right className="ml-3">
        <i className={`fa fa-fw fa-circle text-${props.iconColor}`}></i>
      </Media>
    </Media>
  </React.Fragment>
);
TasksMedia.propTypes = {
  iconColor: PropTypes.node,
  id: PropTypes.node,
};
TasksMedia.defaultProps = {
  iconColor: "muted",
  id: "1",
};

export { TasksMedia };
