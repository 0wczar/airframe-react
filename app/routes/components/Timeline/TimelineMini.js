import React from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";

import { Badge } from "./../../../components";

const TimelineMini = (props) => (
  <React.Fragment>
    {/* START TIMELINE Position */}
    <div className="timeline">
      {props.showPillDate && (
        <React.Fragment>
          {/* START PILL Date */}
          <div className="timeline-date">
            <Badge pill>{props.pillDate}</Badge>
          </div>
          {/* END PILL Date */}
        </React.Fragment>
      )}
      {/* START POST Timeline */}
      <div className="timeline-item">
        {/* Icon */}
        <div className="timeline-icon">
          <i
            className={` fa fa-fw fa-${props.icon} ${props.iconClassName}`}
          ></i>
        </div>
        <div className="timeline-item-head clearfix mb-0 pl-3">
          {/* Badge */}
          <div className="mb-2">
            <span className={`badge badge-${props.badgeColor} `}>
              {props.badgeTitle}
            </span>
          </div>
          {/* Content */}
          <p className="text-inverse mb-1">{faker.company.catchPhrase()}</p>
          {/* Date */}
          <p>{faker.date.past().toString()}</p>
        </div>
      </div>
      {/* END POST Timeline */}
    </div>
    {/* END Timeline Position */}
  </React.Fragment>
);

TimelineMini.propTypes = {
  showPillDate: PropTypes.bool,
  pillDate: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeTitle: PropTypes.string,
};

TimelineMini.defaultProps = {
  showPillDate: false,
  pillDate: "Waiting",
  icon: "question-circle",
  iconClassName: "text-secondary",
  badgeColor: "secondary",
  badgeTitle: "Waiting",
};

export { TimelineMini };
