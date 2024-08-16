import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { customFilter } from 'react-bootstrap-table2-filter';

import {
    Form,
    Input
} from './../../../../components';

class TextFilter extends React.Component {
    static propTypes = {
        column: PropTypes.object.isRequired,
        onFilter: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        getFilter: PropTypes.func,
        onClick: PropTypes.func
    }

    constructor() {
        super();

        this.state = {
            value: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (_.isFunction(this.props.getFilter)) {
            this.props.getFilter((value) => {
                this.setState({ value });
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onFilter(this.state.value);
        }
    }

    handleClick(e) {
        e.stopPropagation();

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const { onFilter, placeholder } = this.props;
        return (
            <Form 
                onSubmit={(e) => {
                    e.preventDefault();
                    onFilter(this.state.value) 
                }}
            >
                <Input
                    type="text"
                    bsSize="sm"
                    className="bg-white"
                    onChange={(e) => this.setState({value: e.target.value})}
                    onClick={ this.handleClick }
                    value={ this.state.value }
                    placeholder={ placeholder }
                />
            </Form>
        )
    }
}

export const buildCustomTextFilter = ({ placeholder, getFilter, ...other } = {}) => ({
    filter: customFilter(other),
    filterRenderer: function TextFilterWrap(onFilter, column) {
        return (
            <TextFilter
                {...{
                    onFilter,
                    column,
                    placeholder,
                    getFilter
                }}
            />
        )
    }
});