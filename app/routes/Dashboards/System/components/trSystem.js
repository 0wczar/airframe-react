import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    Progress,
    Badge
} from './../../../../components';

import {
    TinyAreaChart
} from "./TinyAreaChart"

import { randomArray } from './../../../../utilities';

const percents = [
    "15",
    "25",
    "30",
    "35",
    "40",
    "45",
    "55",
    "60",
    "75",
    "80",
    "95"
];

const versions = [
    "1.10",
    "1.34",
    "2.35",
    "0.23",
    "2.90",
    "9.05"
];

const name = [
    "Apache",
    "Postfix",
    "Ruby R1",
    "MySQL",
    "Ruby R2"
];

const gbLeft = [
    "2,234",
    "6,738",
    "982",
    "9,001",
    "1,329"
];

const tdValue = [
    "783",
    "45",
    "4",
    "190",
    "65"
];

const tdUnits = [
    "",
    "Mb",
    "%",
    "Kb/s"
];

const TrSystem = (props) => (
    <tr>
        <td style={{ width: '20%' }}>
            <span className="d-flex mb-2">
                <h6 className="mb-0 mr-5">
                    { randomArray(name) }
                </h6>
                <Badge pill className="ml-auto align-self-center">
                    v. { randomArray(versions) }
                </Badge>
            </span>
            <Progress value={ randomArray(percents) } style={{height: "4px"}} className="mb-2" />
            <span className="d-flex">
                <span className="text-inverse">
                    { randomArray(percents) }%
                </span>
                <span className="ml-auto text-right">
                    { randomArray(gbLeft) } GB Left
                </span>
            </span>
        </td>
        {
            _.map(props.colors, (color,index)=>(
                <td style={{ width: '20%' }} key={index}>
                    <h6 className="mb-0">
                        { randomArray(tdValue) } {tdUnits[index]}
                    </h6>
                    <TinyAreaChart 
                        strokeColor={color.stroke} 
                        fillColor={color.fill} 
                    />
                </td>
            ))
        }
    </tr>
);

TrSystem.propTypes = {
    title: PropTypes.node,

    colors: PropTypes.array
};
TrSystem.defaultProps = {
    colors: [ 
        {
            fill: "400",
            stroke: "primary"
        },
        {
            fill: "yellow",
            stroke: "400"
        },
        {
            fill: "purple",
            stroke: "info"
        },
        {
            fill: "success",
            stroke: "500"
        }
    ]
};

export { TrSystem };
