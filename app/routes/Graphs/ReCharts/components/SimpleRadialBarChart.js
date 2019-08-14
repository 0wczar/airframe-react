import React from 'react';
import {  
    ResponsiveContainer,
    RadialBarChart, 
    RadialBar, 
    Legend
} from 'recharts';

import colors from './../../../../colors';

const data = [
      {name: '18-24', uv: 31.47, pv: 2400, fill: colors['primary']},
      {name: '25-29', uv: 26.69, pv: 4567, fill: colors['purple']},
      {name: '30-34', uv: 15.69, pv: 1398, fill: colors['success']},
      {name: '35-39', uv: 8.22, pv: 9800, fill: colors['yellow']},
      {name: '40-49', uv: 8.63, pv: 3908, fill: colors['danger']},
      {name: '50+', uv: 2.63, pv: 4800, fill: colors['info']},
      {name: 'unk.', uv: 6.67, pv: 4800, fill: colors['warning']}
    ];
    
  const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
  };

const SimpleRadialBarChart = () => (
    <ResponsiveContainer width='100%' aspect={ 1 / 1}>
        <RadialBarChart cx={ 150 } innerRadius={20} outerRadius={140} barSize={7} data={data}>
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: colors['900'], fontSize: '11px' }}
                background={{fill: colors['200']}}
                clockWise={true}
                dataKey='uv'
            />
            <Legend iconSize={10} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    </ResponsiveContainer>

)

export { SimpleRadialBarChart };
