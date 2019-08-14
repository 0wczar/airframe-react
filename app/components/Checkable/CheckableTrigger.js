import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Consumer } from './context';

import classes from './CheckableTrigger.scss';

const CheckableTrigger = (props) => {
    const { children, tag, className, ...otherProps } = props;
    const Tag = tag;
    const tagClass = classNames(classes['checkable__trigger'], className);

    return (
        <Consumer>
        {
            (value) => (
                <Tag { ...otherProps } className={ tagClass } onClick={ () => { value.toggle() } }>
                    { children }
                </Tag>
            )
        }
        </Consumer>
    );
};
CheckableTrigger.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
};
CheckableTrigger.defaultProps = {
    tag: "div"
};

export { CheckableTrigger };