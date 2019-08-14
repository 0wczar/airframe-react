import React from 'react';
import {  
    PieChart, 
    Pie,
    Cell
} from 'recharts';

import colors from './../../../colors';

const data = [
    {name: 'Group A', value: 200},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}
];

const COLORS = [ colors['yellow'], colors['red'], colors['success'], colors['yellow']];

const TinyDonutChart = () => (
    <PieChart width={ 80 } height={ 80 }>
        <Pie
            data={data}
            dataKey="value"
            stroke={ colors['white'] }
            innerRadius={ 26 }
            outerRadius={ 35 } 
            fill="#8884d8"
        >
            {
                data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
    </PieChart>
);

export { TinyDonutChart };
