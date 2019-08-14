import React from 'react';
import { PageConfigContext } from './PageConfigContext';

export const withPageConfig = (Component) => {
    const WithPageConfig = (props) => (
        <PageConfigContext.Consumer>
        {
            (pageConfig) => <Component pageConfig={ pageConfig } { ...props } />   
        }
        </PageConfigContext.Consumer>
    );
    return WithPageConfig;
};
