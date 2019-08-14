import React from 'react';
import PropTypes from 'prop-types';

import config from './config';

export const ValueLabel = (props) =>
    <text
        x={ props.x }
        y={ props.y - config.label.fontSize }
        textAnchor="middle"
        { ...config.label }
    >
        { props.value }
    </text>;

ValueLabel.propTypes = {
    value: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
};