import React from 'react';
import { 
    Pie, 
    ResponsiveContainer,
    Cell,
    PieChart,
    PieValueLabel
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];
const COLORS = [ colors['primary'], colors['purple'], colors['success'], colors['yellow']];

export const PieChartWithCustomizedLabel = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie
                data={data}
                dataKey="value"
                stroke={ colors['white'] }
                labelLine={false}
                label={<PieValueLabel />}
                outerRadius={80} 
                fill="#8884d8"
            >
                {
                    data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);
