import React from 'react';
import { 
    BarChart, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Legend, 
    Bar 
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
      {name: 'Page A', uv: 4000, female: 2400, male: 2400},
      {name: 'Page B', uv: 3000, female: 1398, male: 2210},
      {name: 'Page C', uv: 2000, female: 9800, male: 2290},
      {name: 'Page D', uv: 2780, female: 3908, male: 2000},
      {name: 'Page E', uv: 1890, female: 4800, male: 2181},
      {name: 'Page F', uv: 2390, female: 3800, male: 2500},
      {name: 'Page G', uv: 3490, female: 4300, male: 2100},
];

const MixBarChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <BarChart data={data}
        margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="female" stackId="a" fill={ colors['purple'] } barSize={ 5 } />
            <Bar dataKey="male" stackId="a" fill={ colors['primary'] } barSize={ 5 } />
            <Bar dataKey="uv" fill={ colors['success'] } barSize={ 5 } />
        </BarChart>
    </ResponsiveContainer>

)

export { MixBarChart };
