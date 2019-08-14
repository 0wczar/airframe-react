import React from 'react';
import faker from 'faker/locale/en_US';
import PropTypes from 'prop-types';


import { randomArray } from './../../../utilities';

const hour = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];

const min = [
    "00",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50"
];

const amPm = [
    "am",
    "pm"
];

const TimelineDefault = (props) => (
    <React.Fragment>
        { /* START TIMELINE Default */}
        <div className="timeline timeline-datetime">
            {
                props.showPillDate && (
                    <React.Fragment>
                        { /* START PILL Date */}
                        <div className="timeline-date">
                            <span className="badge badge-pill badge-secondary">
                                { props.pillDate }
                            </span>
                        </div>
                        { /* END PILL Date */}
                    </React.Fragment>
                    )
            }
            <div className="timeline-item pr-3">
                { /* START Small ICON  */}
                <div className="timeline-icon">
                    <i className={` fa fa-circle-o text-${ props.smallIconColor }`}></i>
                </div>
                { /* END Small ICON  */}
                <div className="timeline-item-inner pb-0">
                    { /* START HOUR  */}
                    <span className="timeline-item-time">
                        { randomArray(hour) }:{ randomArray(min) } { randomArray(amPm) }
                    </span>
                    { /* START HOUR  */}
                    <div className="timeline-item-head pb-0">
                        { /* START ICON Circle  */}
                        <div className="pull-left mr-2">
                            <span className="fa-stack fa-lg">
                                <i className={` fa fa-circle fa-stack-2x text-${ props.iconCircleColor }`}></i> 
                                <i className={` fa fa-stack-1x text-white fa-${ props.iconCircle }`}></i>
                            </span>
                        </div>
                        { /* END ICON Circle  */}
                        <div className="user-detail">
                            { /* START TITLE  */}
                            <h6 className="mb-0">
                                { faker.company.catchPhrase() }
                            </h6>
                            { /* END TITLE  */}
                            { /* START SUB-TITLE  */}
                            <p>
                                { faker.company.catchPhraseAdjective() }
                            </p>
                            { /* END SUB-TITLE  */}
                        </div>
                    </div>
                    { /* START CONTENT  */}
                    <div className="timeline-item-content">
                        <p>
                            { faker.lorem.paragraph() }
                        </p>
                    </div>
                    { /* END CONTENT  */}
                </div>
            </div>
        </div>
        { /* END TIMELINE Default */}
    </React.Fragment>
)

TimelineDefault.propTypes = {
    showPillDate: PropTypes.bool,
        pillDate: PropTypes.string,
    smallIconColor: PropTypes.string,
    iconCircleColor: PropTypes.string,
        iconCircle: PropTypes.string,
    badgeTitle: PropTypes.string
};

TimelineDefault.defaultProps = {
    showPillDate: false,
        pillDate: "Waiting",
    smallIconColor: "secondary",
    iconCircleColor: "secondary",
        iconCircle: "question"
};

export { TimelineDefault };
