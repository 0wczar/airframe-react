import React from 'react';
import _ from 'lodash';
import { randomArray } from './../../../utilities';
import {
    Badge
} from './../../../components';

const name = [
    "Action Score",
    "Quality Score",
    "Value Score",
    "Growth Score"
];
const badge = [
    "a",
    "q",
    "v",
    "g"
];
const value = [
    "23",
    "67",
    "12",
    "89",
    "11",
    "10",
    "43",
    "98"
];

const TrTableFavStock = () => {
    return (
        <React.Fragment>
            {
                _.times(5, (index) => (
                    <tr key={ index }>
                        <td className="align-middle">
                            { randomArray(name) }
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                        <td className="align-middle">
                            <Badge pill className="text-uppercase mr-1"> { randomArray(badge) } </Badge> <span className="text-inverse">{ randomArray(value) }</span>
                        </td>
                    </tr>
                ))
            }
        </React.Fragment>)
}

export { TrTableFavStock };
