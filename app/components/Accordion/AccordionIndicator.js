import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Consumer } from './context';

export const AccordionIndicator = (props) => (
    <Consumer>
    {
        ({ isOpen }) => isOpen ?
            React.cloneElement(props.open, {
                className: classNames(props.className, props.open.props.className)
            }) : React.cloneElement(props.closed, {
                className: classNames(props.className, props.closed.props.className)
            })
    }
    </Consumer>
);
AccordionIndicator.propTypes = {
    open: PropTypes.node,
    closed: PropTypes.node,
    className: PropTypes.string
}
AccordionIndicator.defaultProps = {
    open: <i className="fa fa-fw fa-minus"></i>,
    closed: <i className="fa fa-fw fa-plus"></i>
}
