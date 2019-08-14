import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    Popover
} from 'reactstrap';

class UncontrollerPopover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        const { target } = this.props;

        if (typeof document !== 'undefined') {
            this.triggerElement = document.querySelector(`#${target}`);

            if (!this.triggerElement) {
                // eslint-disable-next-line no-console
                console.error('UncontrolledPopover: \'target\' element has not been found in the DOM via querySelector');
                return;
            }

            this.triggerElement.addEventListener('click', this.clickEventHandler.bind(this));
        }
    }

    componentDidUpdate() {
        if (this.props.activateTrigger && this.triggerElement) {
            const { activeClassName } = this.props;
            this.triggerElement.classList.toggle(activeClassName, this.state.isOpen);
        }
    }

    componentWillUnmount() {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickEventHandler);
        }
    }

    clickEventHandler() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Popover
                { ..._.omit(this.props, ['activateTrigger', 'activeClassName']) }
                isOpen={ this.state.isOpen }
                toggle={ () => { this.setState({ isOpen: !this.state.isOpen }) } }
            >
                { this.props.children }
            </Popover>
        )
    }
}
UncontrollerPopover.propTypes = {
    activateTrigger: PropTypes.bool,
    activeClassName: PropTypes.string
};
UncontrollerPopover.defaultProps = {
    activateTrigger: true,
    activeClassName: 'active'
};

export { UncontrollerPopover };
