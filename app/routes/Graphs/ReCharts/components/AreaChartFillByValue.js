import React from 'react';
import { 
    AreaChart, 
    CartesianGrid,
    DefAreaValueColor,
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Area
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: -1000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 500, pv: 3908, amt: 2000},
    {name: 'Page E', uv: -2000, pv: 4800, amt: 2181},
    {name: 'Page F', uv: -250, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];

export const AreaChartFillByValue = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <AreaChart
            data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
            <CartesianGrid/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <defs>
                <DefAreaValueColor
                    id="splitColor"
                    data={ data }
                    positiveColor={ colors['success-03'] }
                    negativeColor={ colors['danger-03'] }
                />
            </defs>
            <Area dataKey="uv" stroke={ colors['white'] } fill="url(#splitColor)" />
        </AreaChart>
    </ResponsiveContainer>

);
