import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';

/*eslint-disable */
const lastMonth = [
    <td className="align-middle text-right text-danger">
        <i className="fa fa-fw fa-caret-down mr-1"></i>92.02%
    </td>,
    <td className="align-middle text-right text-success">
        <i className="fa fa-fw fa-caret-up mr-1"></i>23.02%
    </td>
];
/*eslint-enable */
/*eslint-disable */
const no = [
    "1",
    "2",
    "3",
    "4"
];
/*eslint-enable */

const TrTableStriped = () => (
    <React.Fragment>
        {
            _.times(4, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        { no[index%4] }.
                    </td>
                    <td className="align-middle">
                        <span className="text-inverse">
                            { faker.commerce.productName() }
                        </span>
                    </td>
                    <td className="align-middle">
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                    </td>
                    { lastMonth[index%2] }
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableStriped };
