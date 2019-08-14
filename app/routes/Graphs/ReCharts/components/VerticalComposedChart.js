import React from 'react';
import {
    Area,
    Line,
    Bar,
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Legend,
    ComposedChart,
    Dot
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

// eslint-disable-next-line react/prop-types
const generateDot = ({stroke, ...other}) => (
    <Dot
        r={ 5 }
        strokeWidth={ 2 }
        { ...other }
        fill={ stroke }
        stroke={ colors['white'] }
    />
);

export const VerticalComposedChart = () => (
    <ResponsiveContainer width='100%' aspect={ 6.0/3.0 }>
        <ComposedChart layout="vertical" width={600} height={400} data={data}
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
            <CartesianGrid />
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip/>
            <Legend/>
            <Area dataKey='amt' fill={ colors['200'] } stroke={ colors['400'] } />
            <Bar dataKey='pv' barSize={5} fill={ colors['primary'] } />
            <Line dataKey='uv' stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} />
        </ComposedChart>
    </ResponsiveContainer>
);
