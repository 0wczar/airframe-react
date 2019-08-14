import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './ThemeContext';

const ThemeClass = ({ children, color, style }) => {
    const layoutThemeClass = `layout--theme--${ style }--${ color }`;
    
    return children(layoutThemeClass);
};
ThemeClass.propTypes = {
    children: PropTypes.func.isRequired,
    color: PropTypes.string,
    style: PropTypes.string,
};

const ContextThemeClass = (otherProps) =>
    <Consumer>
        {
            (themeState) => <ThemeClass {...{ ...themeState, ...otherProps }}/>
        }
    </Consumer>;

export { ContextThemeClass as ThemeClass };

