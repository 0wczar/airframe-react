import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import { withPageConfig } from './../Layout/withPageConfig';

const DefaultOnly = (props) => (
    <React.Fragment>
    {
        props.pageConfig.sidebarSlim && props.pageConfig.sidebarCollapsed ? (
            <MediaQuery maxWidth={ 991.8 }>
                { props.children }
            </MediaQuery>
        ) : (
            props.children
        )
    }
    </React.Fragment>
);
DefaultOnly.propTypes = {
    children: PropTypes.node.isRequired,
    pageConfig: PropTypes.object
};

const ExtendedDefaultOnly = withPageConfig(DefaultOnly);

export {
    ExtendedDefaultOnly as DefaultOnly
};