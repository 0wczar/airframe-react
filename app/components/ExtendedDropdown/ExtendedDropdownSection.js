import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ExtendedDropdownSection = (props) => {
    const { children, list, className, tag, ...otherProps } = props;
    const sectionClass = classNames(
        "extended-dropdown__section", className, {
            "extended-dropdown__section--list": list
        }
    );
    const Tag = tag;

    return (
        <Tag className={ sectionClass } { ...otherProps }>
            { children }
        </Tag>
    );
};
ExtendedDropdownSection.propTypes = {
    children: PropTypes.node,
    list: PropTypes.bool,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
ExtendedDropdownSection.defaultProps = {
    tag: "div"
};

export { ExtendedDropdownSection };