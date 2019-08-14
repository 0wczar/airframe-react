import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// Safely gets the browser document object,
// returns a simple mock for server rendering purposes
const getDocument = () =>
    typeof document === 'undefined' ?
        {
            querySelector() { return null; }
        } : document

/*
    Calls an EventHandler when User clicks outside of the child element
*/
class OuterClick extends React.Component {
    static propTypes = {
        onClickOutside: PropTypes.func,
        children: PropTypes.node,
        excludedElements: PropTypes.array,
        active: PropTypes.bool
    }

    static defaultProps = {
        onClickOutside: () => { },
        excludedElements: [],
        active: true
    }

    componentDidMount() {
        this.rootElement = getDocument().querySelector('body');

        if (this.rootElement) {
            this.rootElement.addEventListener('click', this.handleDocumentClick);
            this.rootElement.addEventListener('touchstart', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.rootElement) {
            this.rootElement.removeEventListener('click', this.handleDocumentClick);
            this.rootElement.removeEventListener('touchstart', this.handleDocumentClick);
        }
    }

    assignRef(elementRef) {
        this.elementRef = elementRef;
    }

    handleDocumentClick = (evt) => {
        if(this.props.active) {
            // eslint-disable-next-line react/no-find-dom-node
            const domElement = ReactDOM.findDOMNode(this.elementRef);

            const isExcluded = _.some(this.props.excludedElements,
                // eslint-disable-next-line react/no-find-dom-node
                (element) => element && ReactDOM.findDOMNode(element).contains(evt.target));

            if (!isExcluded && !domElement.contains(evt.target)) {
                this.props.onClickOutside(evt);
            }
        }
    }

    render() {
        const onlyChild = React.Children.only(this.props.children);

        const updatedChild = React.isValidElement(onlyChild) ?
            React.cloneElement(onlyChild, { ref: this.assignRef.bind(this) }) : onlyChild;

        return updatedChild;
    }
}

export { OuterClick };