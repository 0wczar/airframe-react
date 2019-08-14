import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    BarChart, 
    Bar
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = _.times(40, () => ({ pv: Math.random() * 100 }));

const TinyBarChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <BarChart data={data}>
            <Bar dataKey='pv' fill={ colors['primary'] } barSize={5} />
        </BarChart>
    </ResponsiveContainer>
);

export { TinyBarChart };
