import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import {  
    ResponsiveContainer,
    ComposedChart, 
    CartesianGrid, 
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    Bar,
    Dot
} from './../../../../components/recharts';

import colors from './../../../../colors';

const CHART_LENGTH = 30;
const CHART_START_DATE = moment().subtract(CHART_LENGTH, 'months');

const dataGenerator = (index) => {
    const referenceValue = _.random(1500, 1800);
    const halfedRefVal = referenceValue / 2;

    return {
        key: index,
        month: moment(CHART_START_DATE).add(index, 'months').format('MMM YY'),
        "Tokyo": referenceValue,
        "New York": _.random(1200, 2200),
        "Berlin": referenceValue - _.random(halfedRefVal, halfedRefVal * 1.1),
    };
}

const data = _.times(CHART_LENGTH, dataGenerator);

// eslint-disable-next-line react/prop-types
const generateDot = ({stroke, ...other}) => (
    <Dot
        { ...other }
        fill={ stroke }
        stroke={ colors['white'] }
        strokeWidth={ 2 }
        r={ 5 }
    />
);

export const AudienceMetricsChart = ({height, className}) => (
    <ResponsiveContainer
        width='100%'
        minHeight='250px'
        className={ className }
        {...(!_.isUndefined(height) ? {
            height
        } : {
            aspect: 2 / 1
        })}
    >
        <ComposedChart data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke={ colors['200'] } strokeDasharray='none' vertical={ false }/>
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='New York' barSize={5} fill={ colors['400'] } />
          <Area dataKey='Tokyo' fill={ colors['purple-02'] } stroke={ colors['purple'] } activeDot={ null } />
          <Area dataKey='Berlin' fill={ colors['primary-04'] } stroke={ colors['primary'] } activeDot={{r: 5}} dot={generateDot}  />
       </ComposedChart>
    </ResponsiveContainer>
);
AudienceMetricsChart.propTypes = {
    height: PropTypes.string,
    className: PropTypes.string
}
