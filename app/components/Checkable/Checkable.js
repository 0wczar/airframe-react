import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './context';

class Checkable extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        tag: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ])
    };
    static defaultProps = {
        tag: "div"
    };

    constructor(props) {
        super(props);
        
        this.state = {
            isChecked: false
        };
    }

    render() {
        const { tag, children, ...otherProps } = this.props;
        const Tag = this.props.tag;

        return (
            <Provider
                value={{
                    isChecked: this.state.isChecked,
                    toggle: (enabled) => { this.setState({ isChecked: enabled || !this.state.isChecked }) }
                }}
            >
                <Tag { ...otherProps }>
                    { children }
                </Tag>
            </Provider>
        );
    }
}

export { Checkable };
