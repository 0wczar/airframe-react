import React from 'react';
import PropTypes from 'prop-types';

import config from './config';

const RADIAN = Math.PI / 180;                    

export const PieValueLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, color } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={ x }
            y={ y }
            textAnchor={ x > cx ? 'start' : 'end' }
            dominantBaseline="central"
            fill={ props.color || config.pieLabel.fill }
            fontSize={ config.pieLabel.fontSize }
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
PieValueLabel.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    midAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    percent: PropTypes.number,
    color: PropTypes.string
};
