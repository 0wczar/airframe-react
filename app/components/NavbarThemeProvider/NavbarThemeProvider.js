import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarThemeProvider = ({ style, color, children, className }) => {
    const isSingleChild = React.Children.count(children) === 1;
    const themeClass = `navbar-${style}-${color}`;

    if (isSingleChild) {
        const child = React.Children.only(children);

        return React.cloneElement(child, {
            className: classNames(
                child.props.className,
                themeClass
            ),
        });
    } else {
        return (
            <div className={ classNames(className, themeClass) }>
                { children }
            </div>
        );
    }
};
NavbarThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.string,
    color: PropTypes.string,
};
NavbarThemeProvider.defaultProps = {
    style: 'light',
    color: 'primary',
};

export { NavbarThemeProvider };
