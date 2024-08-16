import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import uid from 'uuid/v4';
import { customFilter, Comparator, FILTER_TYPES } from 'react-bootstrap-table2-filter';

import { CustomInput, Input } from './../../../../components';

const comparatorSign = (comp) => {
    switch (comp) {
        case Comparator.EQ:
            return '=';
        case Comparator.GT:
            return '>';
        case Comparator.LT:
            return '<';
    }
}

class NumberFilter extends React.Component {
    static propTypes = {
        column: PropTypes.object.isRequired,
        onFilter: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        getFilter: PropTypes.func,
        comparators: PropTypes.array,
        comparator: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        comparators: [Comparator.EQ],
        comparator: Comparator.EQ
    }

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            comparator: props.comparator
        }

        this.comparatorInputId = uid();
        this.valueInputId = uid();
    }

    componentDidMount() {
        if (_.isFunction(this.props.getFilter)) {
            this.props.getFilter((value) => {
                this.setState({ value });
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.value !== this.state.value ||
            prevState.comparator !== this.state.comparator
        ) {
            this.props.onFilter({
                number: this.state.value,
                comparator: this.state.comparator
            });
        }
        if (prevProps.comparator !== this.props.comparator) {
            this.setState({ comparator: this.props.comparator });
        }
    }

    handleClick(e) {
        e.stopPropagation();

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const { placeholder, comparators } = this.props;
        const { comparator } = this.state;
        return (
            <div className='d-flex'>
            {
                (!_.isEmpty(comparators) && comparators.length > 0) && (
                    <CustomInput
                        type="select"
                        bsSize="sm"
                        onChange={(e) => { this.setState({ comparator: e.target.value }) }}
                        onClick={this.handleClick}
                        value={ comparator }
                        className="d-block bg-white mr-1"
                        id={this.comparatorInputId}
                    >
                        <option value=""></option>

                        {
                            _.map(comparators, (comparator, index) => (
                                <option
                                    value={ comparator }
                                    key={ index }
                                >
                                    { comparatorSign(comparator) }
                                </option>
                            ))
                        }
                    </CustomInput>
                )
            }
                <Input
                    type="number"
                    className="bg-white"
                    bsSize="sm"
                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                    onClick={this.handleClick}
                    value={ this.state.value }
                    placeholder={ placeholder }
                    id={this.valueInputId}
                />
            </div>
        )
    }
}

export const buildCustomNumberFilter = ({ placeholder, getFilter, comparators, ...other } = {}) => ({
    filter: customFilter({
        type: FILTER_TYPES.NUMBER,
        ...other
    }),
    filterRenderer: function NumberFilterWrap(onFilter, column) {
        return (
            <NumberFilter
                {...{
                    onFilter,
                    column,
                    placeholder,
                    getFilter,
                    comparators
                }}
            />
        )
    }
});