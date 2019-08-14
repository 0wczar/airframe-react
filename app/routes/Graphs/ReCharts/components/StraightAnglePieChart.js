import React from 'react';
import { 
    Pie, 
    ResponsiveContainer,
    PieChart
}  from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 }
];

const StraightAnglePieChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie
                startAngle={180}
                endAngle={0}
                data={data}
                dataKey="value"
                outerRadius={80}
                fill={ colors['primary'] }
                stroke={ colors['white'] }
                label={{fill: colors['900'], fontSize: '12px'}}
            />
       </PieChart>
    </ResponsiveContainer>

)

export { StraightAnglePieChart };
