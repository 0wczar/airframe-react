import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withPageConfig
} from './../../components/Layout';

class EmptyLayout extends React.Component {
    static propTypes = {
        pageConfig: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string
    };

    componentDidMount() {
        this.props.pageConfig.setElementsVisibility({
            navbarHidden: true,
            sidebarHidden: true,
            footerHidden: true 
        });
    }

    componentWillUnmount() {
        this.props.pageConfig.setElementsVisibility({
            navbarHidden: false,
            sidebarHidden: false,
            footerHidden: false 
        });
    }

    render() {
        const emptyLayoutClass = classNames('fullscreen', this.props.className);

        return (
            <div className={ emptyLayoutClass }>
                { this.props.children }
            </div>
        );
    }
};

const PageConfigEmptyLayout = withPageConfig(EmptyLayout);

export {
    PageConfigEmptyLayout as EmptyLayout
};
