import React from 'react';
import PropTypes from 'prop-types';

const SessionsByDevice = (props) => (
    <React.Fragment>
        <div className={ `mb-2 ${ props.valuePercentColor }` }>
            { props.title }
        </div>
        <h2 className={ `${ props.valuePercentColor }` }>
            { props.valuePercent }%
        </h2>
        <div className={ `mb-3 ${ props.valueColor }` }>
            { props.value }
        </div>
    </React.Fragment>
)
SessionsByDevice.propTypes = {
    title: PropTypes.node,
    titlePercentColor: PropTypes.node,
    valuePercent: PropTypes.string,
    valuePercentColor: PropTypes.node,
    value: PropTypes.node,
    valueColor: PropTypes.node
};
SessionsByDevice.defaultProps = {
    title: "Title",
    titlePercentColor: "text-inverse",
    valuePercent: "00,0",
    valuePercentColor: "text-muted",
    value: "000,000",
    valueColor: "text-muted"
};


export { SessionsByDevice };
