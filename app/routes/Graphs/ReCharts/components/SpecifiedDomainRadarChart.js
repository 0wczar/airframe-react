import React from 'react';
import {  
    ResponsiveContainer,
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend,
    PolarAngleAxis, 
    PolarRadiusAxis
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const SpecifiedDomainRadarChart = () => (
    <ResponsiveContainer width='100%' aspect={ 1/1 }>
        <RadarChart outerRadius={150} data={data}>
          <PolarGrid stroke={ colors['400'] } />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke={ colors['primary'] } fill={ colors['primary'] } fillOpacity={0.3}/>
          <Radar name="Lily" dataKey="B" stroke={ colors['500'] } fill={ colors['500'] } fillOpacity={0.3}/>
          <Legend />
        </RadarChart>
    </ResponsiveContainer>
);

export { SpecifiedDomainRadarChart };
