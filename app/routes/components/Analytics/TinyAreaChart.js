import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from 'recharts';

import colors from './../../../colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyAreaChart = ({ height }) => (
    <ResponsiveContainer width='100%' height={ height }>
        <AreaChart data={data}>
            <Area dataKey='pv' stroke={ colors['primary'] } fill={ colors['primary-02'] } />
        </AreaChart>
    </ResponsiveContainer>
);
TinyAreaChart.propTypes = {
    height: PropTypes.number,
};
TinyAreaChart.defaultProps = {
    height: 25,
};

export { TinyAreaChart };
