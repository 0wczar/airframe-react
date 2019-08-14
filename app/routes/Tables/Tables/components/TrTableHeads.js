import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';

import { 
    Badge
} from './../../../../components';

/*eslint-disable */
const colorStatus = [
    "danger",
    "success",
    "warning",
    "secondary"
];
/*eslint-enable */

const TrTableHeads = () => (
    <React.Fragment>
        {
            _.times(4, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        1
                    </td>
                    <td className="align-middle">
                        { faker.name.firstName() }
                    </td>
                    <td className="align-middle">
                        { faker.name.lastName() }
                    </td>
                    <td className="align-middle">
                        { faker.internet.email() }
                    </td>
                    <td className="align-middle">
                        { faker.internet.userName() }
                    </td>
                    <td className="align-middle text-right">
                        <Badge color={ colorStatus[index%4] }>
                            { faker.name.jobType() }
                        </Badge>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableHeads };
