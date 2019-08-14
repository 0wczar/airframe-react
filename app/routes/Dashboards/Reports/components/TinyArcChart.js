import React from 'react';
import {  
    PieChart, 
    Pie,
    Cell
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Free', value: 40 },
    {name: 'Used', value: 60 },
];

const COLORS = [ colors['light'], colors['primary'] ];
const SIZE = 70;

const TinyArcChart = () => (
    <PieChart width={ SIZE } height={ SIZE / 2 } margin={{ bottom: 0, top: 0, left: 5, right: 5 }}>
        <Pie
            data={data}
            dataKey="value"
            stroke="no"
            innerRadius={ SIZE / 2 * 0.7 }
            outerRadius={ SIZE / 2 } 
            fill="#8884d8"
            startAngle={ 0 }
            endAngle={ 180 }
            cy="100%"
        >
            {
                data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
    </PieChart>
);

export { TinyArcChart };
