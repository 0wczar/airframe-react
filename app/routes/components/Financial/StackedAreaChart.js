import React from 'react';
import { map } from 'lodash';
import { 
    AreaChart, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Area,
    Dot,
    Rectangle,
    Polygon
} from './../../../components/recharts';

import colors from './../../../colors';

const generateDot = ({ diameter, fill, stroke }) =>
    /* eslint-disable */
    ({ cx, cy }) => (
        <Dot
            cx={ cx }
            cy={ cy }
            r={ diameter / 2 }
            fill={ fill }
            stroke={ stroke }
            strokeWidth={ 2 }
            strokeOpacity={ 1 }
            fillOpacity={ 1 }
        />
    )
    /* eslint-enable */

const generateSquare = ({ height, fill, stroke }) =>
    /* eslint-disable */
    ({ cx, cy }) => (
        <Rectangle
            x={ cx - height / 2 }
            y={ cy - height / 2 }
            fill={ fill }
            stroke={ stroke }
            strokeOpacity={ 1 }
            strokeWidth={ 2 }
            fillOpacity={ 1 }
            width={ height }
            height={ height }
        /> 
    );
    /* eslint-enable */

const generateTriangle = ({height, fill, stroke}) =>
    // eslint-disable-next-line react/prop-types
    ({ cx, cy }) => {
        const halfSide = height / Math.sqrt(3);
        const points = [
            { x: 0, y: -(height * 2 / 3) },
            { x: -halfSide, y: height / 3 },
            { x: halfSide, y: height / 3 }
        ];
        const vertices = map(points, ({ x, y }) => ({ x: cx + x, y: cy + y }));

        return (
            <Polygon
                points={ vertices }
                fill={ fill }
                fillOpacity={ 1 }
                stroke={ stroke }
                strokeWidth={ 2 }
            />
        );
    }

const data = [
      {name: 'Mon', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Tue', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Wed', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Thu', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Fri', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Sat', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Sun', uv: 3490, pv: 4300, amt: 2100},
];

const StackedAreaChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area
                dataKey='uv'
                stackId="1"
                stroke={ colors['purple'] }
                fill={ colors['purple-04'] }
                dot={ generateTriangle({ height: 5, stroke: colors['purple'], fill: colors['purple'] }) }
                activeDot={ generateTriangle({ height: 7, stroke: colors['purple'], fill: colors['purple'] }) }
            />
            <Area
                dataKey='pv'
                stackId="1"
                stroke={ colors['primary'] }
                fill={ colors['primary-04'] }
                dot={ generateSquare({ height: 5, stroke: colors['primary'], fill: colors['primary'] }) }
                activeDot={ generateSquare({ height: 7, stroke: colors['primary'], fill: colors['primary'] }) }
            />
            <Area
                dataKey='amt'
                stackId="1"
                stroke={ colors['success'] }
                fill={ colors['success-04'] }
                dot={ generateDot({ diameter: 5, stroke: colors['success'], fill: colors['success'] }) }
                activeDot={ generateDot({ diameter: 7, stroke: colors['success'], fill: colors['success'] }) }
            />
        </AreaChart>
    </ResponsiveContainer>

)

export { StackedAreaChart };
