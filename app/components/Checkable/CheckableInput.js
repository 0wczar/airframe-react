import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import { Consumer } from './context';

class CheckableInput extends React.Component {
    static propTypes = {
        tag: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]),
        type: PropTypes.string,
        defaultChecked: PropTypes.bool,
        toggle: PropTypes.func,
        isChecked: PropTypes.bool
    };
    static defaultProps = {
        tag: Input,
        type: "checkbox"
    };

    componentDidMount() {
        if (this.props.defaultChecked) {
            this.props.toggle(this.props.defaultChecked);
        }
    }

    render() {
        const { tag, isChecked, toggle, ...otherProps } = this.props;
        const Tag = tag;

        return (
            <Tag
                checked={ isChecked }
                onChange={ (e) => { toggle(e.target.checked) } }
                { ...otherProps }
            />
        );
    }
}

const ContextCheckableInput = (props) => (
    <Consumer>
    {
        (value) => (
            <CheckableInput { ...{ ...props, ...value } } />
        )
    }
    </Consumer>
);

export { ContextCheckableInput as CheckableInput };
