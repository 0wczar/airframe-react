import React from 'react';
import PropTypes from 'prop-types';

const LogotypeNavbar = (props) => (
<React.Fragment>
    { /* START Logotype: Visible on: md, lg, xl */}
    <div className={` fw-600 sidebar-logo mb-1 text-left d-none d-lg-block ${ props.logoH }`}>
        { props.logotype } <i className="fa fa-angle-down"></i>
    </div>
    { /* END Logotype: Visible on: md, lg, xl */}
    { /* START Logotype: Visible on: xs, sm */}
    <div className="h6 fw-600 sidebar-logo mb-0 text-left d-lg-none">
        { props.logotype } <i className="fa fa-angle-down"></i>
    </div>
    { /* END Logotype: Visible on: xs, sm */}
    <div className="job-title small text-left d-flex">
        <span className="d-none d-lg-block">Version: </span>React, { props.version }
    </div>
</React.Fragment>
)

LogotypeNavbar.propTypes = {
    logoH: PropTypes.node,
    logotype: PropTypes.node,
    version: PropTypes.node,
};
LogotypeNavbar.defaultProps = {
    logoH: "h5",
    logotype: "react",
    version: "2.0"
};

export { LogotypeNavbar };
