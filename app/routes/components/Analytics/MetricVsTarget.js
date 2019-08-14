import React from 'react';
import PropTypes from 'prop-types';

import { 
    Progress,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup
} from './../../../components';


const MetricVsTarget = (props) => (
    <React.Fragment>
        <h2 className="pt-4 pb-2">
            { props.value }
        </h2>
        <Progress value={ `${ props.progressbarValue }` } color={ `${ props.progressbarColor }` } className="mb-2" style={{height: "5px"}} />
        <div className="mb-3">
            Target: { props.targetValue }
        </div>
        <InputGroup className="mb-1">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Daily Target:</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Enter..." />
        </InputGroup>
    </React.Fragment>
)
MetricVsTarget.propTypes = {
    title: PropTypes.node,
    value: PropTypes.node,
    progressbarValue: PropTypes.string,
    progressbarColor: PropTypes.node,
    targetValue: PropTypes.node
};
MetricVsTarget.defaultProps = {
    title: "Title",
    value: "000.000",
    progressbarValue: "24",
    progressbarColor: "secondary",
    targetValue: "000.000"
};


export { MetricVsTarget };
