import React from 'react';
import PropTypes from 'prop-types';
import { FloatGridContext } from './floatGridContext';

export const Ready = ({ children }) => (
    <FloatGridContext.Consumer>
    {
        ({ gridReady }) => gridReady ? children : null
    }
    </FloatGridContext.Consumer>
);
Ready.propTypes = {
    children: PropTypes.node
}