import React from 'react';
import { 
    Line, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Legend, 
    LineChart,
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

const generateDot = ({stroke, ...other}) => (
    <Dot
        { ...other }
        r={ 5 }
        fill={ stroke }
        stroke={ colors['white'] }
        strokeWidth={ 3 }
        strokeDasharray={ 0 }
    />
);

const DashedLineChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <CartesianGrid strokeDasharray="3 3"/>
           <XAxis dataKey="name"/>
           <YAxis/>
           <Tooltip/>
           <Legend />
           <Line dataKey="pv" stroke={ colors['primary'] } activeDot={{r: 5}} dot={generateDot} strokeDasharray="5 5" />
           <Line dataKey="uv" stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} strokeDasharray="3 4 5 2" />
      </LineChart>
    </ResponsiveContainer>

)

export { DashedLineChart };
