import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './../../styles/components/wizard.scss';

export class Wizard extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        onStepChanged: PropTypes.func,
        activeStep: PropTypes.string,
        initialActiveStep: PropTypes.string
    }

    componentDidMount() {
        const { initialActiveStep, activeStep, onStepChanged } = this.props;

        if (activeStep && !onStepChanged) {
            // eslint-disable-next-line no-console
            console.warn(
                'Warning: You need to provide onStepChanged props if you want the ' +
                'component to be controlled. For uncontrolled type, use initialActiveStep.'
            );
        }

        if (!onStepChanged) {
            this.setState({
                activeStep: initialActiveStep || activeStep
            })
        }
    }

    stepClick(id) {
        this.setState({
            activeStep: id
        });

        this.props.onStepChanged(id);
    }

    getActiveStep() {
        const { activeStep, onStepChanged } = this.props;
        if (_.isUndefined(activeStep) || _.isUndefined(onStepChanged)) {
            return this.state.activeStep;
        }
        return this.props.activeStep;
    }

    render() {
        const { children } = this.props;
        const activeStep = this.getActiveStep();

        return (
            <div className='wizard'>
                {
                    _.map(children, (child, index) => (
                        React.cloneElement(child, {
                            onClick: () => {this.stepClick(child.props.id || '')},
                            active: child.props.id === activeStep,
                            key: index
                        })
                    ))
                }
            </div>
        );
    }
}
