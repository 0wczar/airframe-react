import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
    Line,
    Dot
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
              {name: 'Page B', uv: 868, pv: 967, amt: 1506},
              {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
              {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
              {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
              {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

// eslint-disable-next-line react/prop-types
const generateDot = ({stroke, ...other}) => (
    <Dot
        { ...other }
        r={ 4 }
        strokeWidth={ 2 }
        fill={ stroke }
        stroke={ colors['white'] }
    />
);

const LineBarAreaComposedChart = ({height, className}) => (
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
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
          <CartesianGrid />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey='amt' fill={ colors['200'] } stroke={ colors['400'] } />
          <Bar dataKey='pv' barSize={ 5 } fill={ colors['primary'] } />
          <Line dataKey='uv' stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} />
       </ComposedChart>
    </ResponsiveContainer>
);
LineBarAreaComposedChart.propTypes = {
    height: PropTypes.string,
    className: PropTypes.string
}

export { LineBarAreaComposedChart };
