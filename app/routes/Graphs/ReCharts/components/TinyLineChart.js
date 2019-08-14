import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    LineChart, 
    Line,
	Dot
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const generateDot = ({stroke, ...other}) => (
    <Dot
        { ...other }
        r={ 4 }
        strokeWidth={ 2 }
        fill={ stroke }
        stroke={ colors['white'] }
    />
);

const TinyLineChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <LineChart data={data}>
            <Line dataKey='pv' stroke={ colors['primary'] } strokeWidth={2} activeDot={{r: 5}} dot={generateDot} />
        </LineChart>
    </ResponsiveContainer>
);

export { TinyLineChart };
