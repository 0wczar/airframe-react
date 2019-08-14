import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    CardHeader as BsCardHeader
} from 'reactstrap';

import classes from './CardHeader.scss';

const CardHeader = (props) => {
    const { type, color, className, children, ...otherProps } = props;
    const cardHeaderClass = classNames(className,
        classes['custom-card-header'],
        type && classes[`custom-card-header--${ type }`],
        color && classes[`custom-card-header--color-${ color }`]
    );
    return (
        <BsCardHeader className={ cardHeaderClass } { ...otherProps }>
            { children }
        </BsCardHeader>
    );
};
CardHeader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    ...BsCardHeader.propTypes
};

export { CardHeader };
