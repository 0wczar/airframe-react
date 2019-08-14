import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { Consumer } from './context';

const UncontrolledModalClose = (props) => {
    const { tag, ...otherProps } = props;
    const Tag = tag;

    return (
        <Consumer>
        {
            (value) => (
                <Tag
                    { ...otherProps }
                    onClick={ () => value.toggleModal() }
                />
            )
        }
        </Consumer>
    )
};
UncontrolledModalClose.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
};
UncontrolledModalClose.defaultProps = {
    tag: Button
};

export { UncontrolledModalClose };
