import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from 'recharts';

import colors from './../../../colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyAreaChartSpend = () => (
    <ResponsiveContainer width='100%' height={ 125 }>
        <AreaChart data={data}>
            <Area dataKey='pv' stroke={ colors['primary'] } fill={ colors['primary-02'] } />
        </AreaChart>
    </ResponsiveContainer>
);

export { TinyAreaChartSpend };
