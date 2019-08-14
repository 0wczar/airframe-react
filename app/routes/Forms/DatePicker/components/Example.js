import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    FormGroup,
    Label
} from './../../../../components';

export const Example = ({ title, exampleInput, children, no }) => (
    <Row>
        <Col sm={ 12 }>
            <h6>
                { title }
                <span className="small ml-1 text-muted">
                    #{ no }
                </span>
            </h6>
        </Col>
        <Col md={ 12 }>
            <FormGroup>
                <Label>
                    Example
                </Label>
                <div>
                    { exampleInput }
                </div>
            </FormGroup>
        </Col>
        <Col md={ 12 }>
            <FormGroup>
                <Label>
                    Code
                </Label>
                <pre>
                    <code>
                        { children }
                    </code>
                </pre>
            </FormGroup>
        </Col>
    </Row>
);

Example.propTypes = {
    exampleInput: PropTypes.node.isRequired,
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    no:  PropTypes.node.isRequired
}