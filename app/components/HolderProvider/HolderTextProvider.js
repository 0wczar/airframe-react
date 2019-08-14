import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import uid from 'uuid/v4';
import qs from 'query-string';

import colors from './../../colors';

class HolderTextProvider extends React.Component {
    static propTypes = {
        bg: PropTypes.string,
        fg: PropTypes.string,
        text: PropTypes.string,
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        font: PropTypes.string,
        align: PropTypes.string,
        outline: PropTypes.bool,
        lineWrap: PropTypes.number,
        children: PropTypes.node
    }
    static defaultProps = {
        width: '100p',
        height: 220,
        bg: colors['200'],
        fg: colors['500']
    }

    constructor(props) {
        super(props);

        this.domId = `holderjs--${uid()}`;
    }

    componentDidMount() {
        this.initPlaceholder();

        if (typeof window !== 'undefined') {
            window.onload = this.initPlaceholder.bind(this);
        }
    }

    componentDidUpdate() {
        this.initPlaceholder();
    }

    initPlaceholder() {
        if (
            typeof window !== 'undefined' &&
            typeof document !== 'undefined' &&
            document.readyState === 'complete'
        ) {
            const Holder = require('holderjs');
            const domElement = document.getElementById(this.domId);

            if (domElement) {
                Holder.run({
                    domain: 'holder.js',
                    images: domElement,
                    object: null,
                    bgnodes: null,
                    stylenodes: null
                })

                return true;
            }
        }

        return false;
    }

    render() {
        const onlyChild = React.Children.only(this.props.children);

        const phProps = _.omit(this.props, ['children', 'width', 'height']);
        const phPropsQuery = qs.stringify(phProps);

        return React.cloneElement(onlyChild, {
            'id': this.domId,
            'data-src': `holder.js/${this.props.width}x${this.props.height}?${phPropsQuery}`
        });
    }
}

export { HolderTextProvider };

