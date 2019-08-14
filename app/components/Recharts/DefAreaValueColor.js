import React from 'react';
import PropTypes from 'prop-types';

import colors from './../../colors';

const gradientOffset = (data) => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));
  
    if (dataMax <= 0){
        return 0
    }
    else if (dataMin >= 0){
        return 1
    }
    else{
        return dataMax / (dataMax - dataMin);
    }
}

export const DefAreaValueColor = (props) => {
    const offset = gradientOffset(props.data);

    return (
        <linearGradient id={ props.id } x1="0" y1="0" x2="0" y2="1">
            <stop offset={offset} stopColor={ props.positiveColor } stopOpacity={1}/>
            <stop offset={offset} stopColor={ props.negativeColor } stopOpacity={1}/>
        </linearGradient>
    );
};
DefAreaValueColor.propTypes = {
    positiveColor: PropTypes.string,
    negativeColor: PropTypes.string,
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};
DefAreaValueColor.defaultProps = {
    positiveColor: colors['success-07'],
    negativeColor: colors['danger-07']
};
