import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import {  
    ResponsiveContainer,
    BarChart, 
    Bar
} from './../../../../components/recharts';

import colors from './../../../../colors';

const TinyBarChart = (props) => {
        const data = _.times(40, () => ({ pv: 20+Math.random() * 100 }));
        return (
            <ResponsiveContainer width='100%' height={ 80 }>
                <BarChart data={data} margin={{ top: 0, bottom: 0, right: 0, left: 0 }}>
                    <Bar dataKey='pv' fill={ colors[ props.barColor ] } />
                </BarChart>
            </ResponsiveContainer>
        )
};

TinyBarChart.propTypes = {
    barColor: PropTypes.string
};
TinyBarChart.defaultProps = {
    barColor: "200"
};

export { TinyBarChart };
