import React from 'react';
import { TabContent } from 'reactstrap';

import { Consumer } from './context';

const UncontrolledTabsTabContent = (props) => (
    <Consumer>
    {
        (value) => (
            <TabContent { ...props } activeTab={ value.activeTabId } />
        )
    }
    </Consumer>
);

export { UncontrolledTabsTabContent };