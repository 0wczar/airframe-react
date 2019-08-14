import React from 'react';
import PropTypes from 'prop-types';

import Card from './../Card';

import { Provider } from './context';

export class Accordion extends React.Component {
    static propTypes = {
        initialOpen: PropTypes.bool,
        onToggle: PropTypes.func,
        open: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.initialOpen
        }

        if (props.open !== 'undefined' && props.onToggle === 'undefined') {
            throw "Accordion: props.open has to be used combined with props.onToggle " +
                "use props.initialOpen to create an uncontrolled Accordion."
        }
    }

    toggleHandler() {
        const { onToggle } = this.props;

        if (!onToggle) {
            this.setState({ isOpen: !this.state.isOpen });
        } else {
            this.onToggle(!this.props.open);
        }
    }

    isOpen() {
        return !this.props.onToggle ?
            this.state.isOpen : this.props.open;
    }

    render() {
        /* eslint-disable-next-line no-unused-vars */
        const { className, children, initialOpen, ...otherProps } = this.props;

        return (
            <Provider
                value={{
                    onToggle: this.toggleHandler.bind(this),
                    isOpen: this.isOpen()
                }}
            >
                <Card className={ className } { ...otherProps }>
                    { children }
                </Card>
            </Provider>
        );
    }
}