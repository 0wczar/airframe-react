import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import { withPageConfig } from './../Layout/withPageConfig';

const SlimOnly = (props) => (
    <MediaQuery minWidth={ 992 }>
    {
        props.pageConfig.sidebarSlim && props.pageConfig.sidebarCollapsed && props.children
    }
    </MediaQuery>
);
SlimOnly.propTypes = {
    children: PropTypes.node.isRequired,
    pageConfig: PropTypes.object
};

const ExtendedSlimOnly = withPageConfig(SlimOnly);

export {
    ExtendedSlimOnly as SlimOnly
};
