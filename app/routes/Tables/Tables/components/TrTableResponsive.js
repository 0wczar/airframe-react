import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';

import { 
    UncontrolledTooltip,
    Media
} from './../../../../components';

/*eslint-disable */
const browserOs = [
    "Safari",
    "Firefox",
    "Opera",
    "Chrome"
];
/*eslint-enable */
/*eslint-disable */
const browserIcon = [
    "desktop",
    "laptop",
    "mobile",
    "tablet"
];
/*eslint-enable */
/*eslint-disable */
const colorStatus = [
    "danger",
    "success",
    "warning",
    "secondary"
];
/*eslint-enable */

const TrTableResponsive = () => (
    <React.Fragment>
        {
            _.times(4, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <i className={`fa fa -fw fa-circle text-${ colorStatus[index%4] }`}></i>
                    </td>
                    <td className="align-middle">
                        <Media>
                            <Media left className="align-self-center mr-3">
                                <i className={`fa fa-fw fa-${ browserIcon[index%4] } fa-lg`}></i>
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex">
                                    <span className="text-inverse">
                                        { browserOs[index%4] } 
                                    </span> / 
                                    { faker.system.semver() }
                                </div>
                                <span>
                                    macOs { faker.system.semver() }
                                </span>
                            </Media>
                        </Media>
                    </td>
                    <td className="align-middle">
                        <div>
                            <samp>
                                { faker.internet.ip() }
                            </samp>
                        </div>
                        <span>
                            -
                        </span>
                    </td>
                    <td className="align-middle">
                        <div>
                            { faker.address.city() }
                        </div>
                        <span>
                            { faker.address.state() }, { faker.address.country() }
                        </span>
                    </td>
                    <td className="align-middle">
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018<br />
                        12:34 PM
                    </td>
                    <td className="align-middle text-right">
                        <a href="#" id="UncontrolledTooltipRevoke">
                            <i className="fa fa-fw fa-close text-danger"></i>
                        </a>
                        <UncontrolledTooltip placement="left" target="UncontrolledTooltipRevoke">
                            Revoke
                        </UncontrolledTooltip>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableResponsive };
