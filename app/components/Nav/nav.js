import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Nav as BsNav } from 'reactstrap';

const Nav = ({ accent, className, ...otherProps }) => {
    return (
        <BsNav
            className={
                classNames(className, 'nav', { 'nav-accent': accent })
            }
            { ...otherProps }
        />
    );
};
Nav.propTypes = {
    ...BsNav.propTypes,
    accent: PropTypes.bool,
};
Nav.defaultProps = {
    accent: false
};

export { Nav };
