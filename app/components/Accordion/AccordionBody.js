import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse, CardBody } from 'reactstrap';

import { Consumer } from './context';

export const AccordionBody = (props) => (
    <Consumer>
    {
        ({ isOpen }) => (
            <Collapse isOpen={ isOpen }>
                <CardBody className={ classNames(props.className, 'pt-0') }>
                    { props.children }
                </CardBody>
            </Collapse>
        )
    }
    </Consumer>
);
AccordionBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
