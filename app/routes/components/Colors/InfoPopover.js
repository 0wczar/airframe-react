import React from 'react';
import PropTypes from 'prop-types';
import {
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody,
    Button
} from './../../../components';

export const POPOVER_BODY_PARTS = [
    '.text-',
    '.bg-',
    '.b-',
    '.bl-',
    '.br-',
    '.bt-',
    '.bb-',
    '.by-',
    '.bx-',
    '.btn-'
];

export const InfoPopover = ({ colorId, children, className, tag: Tag, ...otherProps }) => (
    <React.Fragment>
        <Tag color="link" id={ `color-popover--${ colorId }` } className={ className } { ...otherProps }>
            { children }
        </Tag>
        <UncontrolledPopover
            target={ `color-popover--${ colorId }` }
            placement="top"
        >
            <PopoverHeader>
                Color Options for { colorId }
            </PopoverHeader>
            <PopoverBody>
            {
                POPOVER_BODY_PARTS.map((partText, index) =>
                    <span className="mr-1" key={ index }>{ `${partText}${colorId}` }</span>
                )
            }   
            </PopoverBody>
        </UncontrolledPopover>
    </React.Fragment>
);
InfoPopover.propTypes = {
    colorId: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ])
};
InfoPopover.defaultProps = {
    tag: 'a'
}