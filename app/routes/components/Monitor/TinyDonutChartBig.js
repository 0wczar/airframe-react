import React from 'react';
import PropTypes from 'prop-types';
import {  
    PieChart, 
    Pie,
    Cell
} from 'recharts';

import colors from './../../../colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300}
];

const TinyDonutChartBig = (props) => (
    <PieChart width={ 130 } height={ 160 }>
        <Pie
            data={data}
            dataKey="value"
            stroke="{ colors['white'] }"
            innerRadius={ 58 }
            outerRadius={ 65 }
            fill={ colors[ props.pieBg ] }
        >
        <Cell fill={ colors[ props.pieColor ] } />
        </Pie>
    </PieChart>
);

TinyDonutChartBig.propTypes = {
    pieColor: PropTypes.string,
    pieBg: PropTypes.string
};
TinyDonutChartBig.defaultProps = {
    pieColor: "secondary",
    pieBg: "300"
};

export { TinyDonutChartBig };
