import React from 'react';
import _ from 'lodash';

import { 
    Badge,
    Progress
} from './../../../components';

/*eslint-disable */
const status = [
    <td className="text-right">
        Healthly <i className="fa fa-fw fa-check-circle text-success"></i>
    </td>,
    <td className="text-right">
        Degraded <i className="fa fa-fw fa-exclamation-circle text-danger"></i>
    </td>
];
/*eslint-enable */
/*eslint-disable */
const tasksCompleted = [
    "25",
    "50",
    "70",
    "90"
];
/*eslint-enable */

const TrTableMonitor = () => (
    <React.Fragment>
        {
            _.times(14, (index) => (
                <tr key={ index } className="text-nowrap">
                    <td className="align-middle">
                        <span className="text-inverse">HDD1</span> <span className="small">(ada0)</span>
                    </td>
                    <td className="align-middle">
                        Mirror <Badge color="secondary" pill className="ml-2">/mtn/volume1</Badge>
                    </td>
                    <td className="align-middle">
                        <Progress value={ tasksCompleted[index%4] } style={{height: "5px"}} />
                    </td>
                    <td>
                        <span className="text-inverse">7.3.5 TiB</span> / 9.3.1 TiB
                    </td>
                    { status[index%2] }
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableMonitor };
