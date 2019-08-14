import React from 'react';
import PropTypes from 'prop-types';

import { HolderTextProvider } from './HolderTextProvider';

const HolderIconProvider = (props) => {
    const { iconChar, children, ...otherProps } = props;
    return (
        <HolderTextProvider
            font='FontAwesome'
            text={ iconChar }
            { ...otherProps }
        >
            { children }
        </HolderTextProvider>
    );
};
HolderIconProvider.propTypes = {
    iconChar: PropTypes.string.isRequired,
    children: PropTypes.node
};

export { HolderIconProvider };