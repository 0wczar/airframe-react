import React from 'react';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import {  
    Media, 
    Avatar,
    AvatarAddOn
} from './../../../components';

import { randomArray } from './../../../utilities';

import {
    TinyAreaChart
} from "./TinyAreaChart";

const channel = [
    "Organic Search",
    "Display",
    "Direct",
    "Paid Search"
];

const change = [
    "75,0% ",
    "34,4% ",
    "12,9%",
    "23,0%"
];

const TrTableTrafficChannels = () => (
    <React.Fragment>
        {
            _.times(5, (index) => (
                <tr key={ index }>
                    <td className="align-middle text-inverse">
                        { randomArray(channel) }
                    </td>
                    <td className="text-inverse align-middle">
                        { faker.finance.amount() }
                    </td>
                    <td className="align-middle">
                        { faker.finance.amount() }
                    </td>
                    <td className="align-middle text-right">
                        { randomArray(change) } <i className="fa fa-caret-down text-danger ml-1"></i>
                    </td>
                    <td className="text-right align-middle">
                        <TinyAreaChart />
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableTrafficChannels };
