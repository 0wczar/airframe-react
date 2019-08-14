import React from 'react';
import PropTypes from 'prop-types';
import Slider, { Range } from 'rc-slider';

import colors from './../../../colors';
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    CardTitle,
    Label,
    Input,
    Button,
    Row,
    Col,
    Container
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import classes from './Sliders.scss';

const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
            color: colors['danger'],
        },
        label: <strong>100°C</strong>,
    },
}

class CustomizedRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lowerBound: 20,
            upperBound: 40,
            value: [20, 40]
        };
    }
    onLowerBoundChange(e) {
        this.setState({ lowerBound: +e.target.value });
    }
    onUpperBoundChange(e) {
        this.setState({ upperBound: +e.target.value });
    }
    onSliderChange(value) {
        this.setState({
            value,
        });
    }
    handleApply() {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    }
    render() {
        return (
            <div>
                <Form inline className='mb-3 d-flex justify-content-between'>
                    <div className="d-flex">
                        <FormGroup  className='mr-3'>
                            <Label>
                                Lower Bound
                            </Label>
                            <Input
                                type="number"
                                bsSize="sm"
                                className={ classes.inlineInput }
                                value={this.state.lowerBound}
                                onChange={this.onLowerBoundChange.bind(this)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Upper Bound
                            </Label>
                            <Input
                                type="number"
                                bsSize="sm"
                                className={ classes.inlineInput }
                                value={this.state.upperBound}
                                onChange={this.onUpperBoundChange.bind(this)}
                            />
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <Button
                            onClick={this.handleApply.bind(this)}
                            type="button"
                            color="primary"
                            size="sm"
                            block
                        >
                            Apply
                        </Button>
                    </FormGroup>
                </Form>

                <div className={ classes.sliderWrap }>
                    <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange.bind(this)} />
                </div>
            </div>
        );
    }
}

class DynamicBounds extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            max: 100,
        };
    }
    onMinChange(e) {
        this.setState({
            min: +e.target.value || 0,
        });
    }
    onMaxChange(e) {
        this.setState({
            max: +e.target.value || 100,
        });
    }
    render() {
        const { children } = this.props;
        const updatedChild = React.cloneElement(React.Children.only(children), {
            min: this.state.min,
            max: this.state.max
        });

        return (
            <div>
                <Form inline className="mb-3">
                    <FormGroup className="mr-3">
                        <Label>
                            Min
                        </Label>
                        <Input
                            className={ classes.inlineInput }
                            type="number"
                            value={this.state.min}
                            onChange={this.onMinChange.bind(this)}
                            bsSize="sm"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Max
                        </Label>
                        <Input
                            className={ classes.inlineInput }
                            type="number"
                            value={this.state.max}
                            onChange={this.onMaxChange.bind(this)}
                            bsSize="sm"
                        />
                    </FormGroup>
                </Form>
                <div className={ classes.sliderWrap }>
                    { updatedChild }
                </div>
            </div>
        );
    }
}

class ControlledRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [20, 40, 60, 80],
        };
    }
    handleChange = (value) => {
        this.setState({
            value,
        });
    }
    render() {
        return (
            <Range value={this.state.value} onChange={this.handleChange}/>
        );
    }
}

class CustomizedSlider extends React.Component {
    constructor() {
        super();

        this.state = {
            value: 50
        }
    }

    onSliderChange(value) {
        this.setState({
            value
        });
    }

    render() {
        return(
            <Slider value={this.state.value} onChange={this.onSliderChange.bind(this)} />
        )
    }
}

export class Sliders extends React.Component {
    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Sliders"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col>
                        { /* START Header 1 */}
                        <HeaderDemo 
                            no={1} 
                            title="Marks"
                            subTitle={(
                                <React.Fragment>
                                    See 6 examples below:
                                </React.Fragment>
                            )}                                 
                        />
                        { /* END Header 1 */}
                        { /* START Card Example */}
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={ 6 }>
                                        <p>Slider with marks, <code>step=null</code></p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Slider min={-10} marks={marks} step={null} defaultValue={20} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Slider with marks, <code>included=false</code></p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Slider min={-10} marks={marks} included={false} defaultValue={20} />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Slider with marks and steps</p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Slider dots min={-10} marks={marks} step={10} defaultValue={20} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Slider with marks and steps, <code>included=false</code></p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Range with marks</p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Range min={-10} marks={marks} defaultValue={[20, 40]} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Range with marks and steps</p>
                                        <div className={ classes.markedSliderWrap }>
                                            <Range min={-10} marks={marks} step={10} defaultValue={[20, 40]} />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END Card Example */}

                        { /* START Header 2 */}
                        <HeaderDemo 
                            no={2} 
                            title="Range"
                            className="mt-5"
                            subTitle={(
                                <React.Fragment>
                                    See 8 examples below:
                                </React.Fragment>
                            )}                                 
                        />
                        { /* END Header 2 */}
                        { /* START Card Example */}
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={ 6 }>
                                        <p>Basic Range，<code>allowCross=false</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Range allowCross={false} defaultValue={[0, 20]} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Basic Range，<code>disabled</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Range allowCross={false} defaultValue={[0, 20]} disabled />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Basic Range，<code>step=20</code> </p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Range step={20} defaultValue={[20, 20]} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Basic Range，<code>step=20, dots</code> </p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Range dots step={20} defaultValue={[20, 40]} />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Controlled Range</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <ControlledRange />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Multi Range</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Range count={3} defaultValue={[20, 40, 60, 80]} pushable />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Customized Range</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <CustomizedRange />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Range with dynamic <code>max</code> <code>min</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <DynamicBounds>
                                                <Range defaultValue={[20, 50]} />
                                            </DynamicBounds>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END Card Example */}

                        { /* START Header 3 */}
                        <HeaderDemo 
                            no={3} 
                            title="Sliders"
                            className="mt-5"
                            subTitle={(
                                <React.Fragment>
                                    See 7 examples below:
                                </React.Fragment>
                            )}                                 
                        />
                        { /* END Header 3 */}
                        { /* START Card Example */}
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={ 6 }>
                                        <p>Basic Slider</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Slider tipTransitionName="rc-slider-tooltip-zoom-down" />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Basic Slider, <code>disabled</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Slider tipTransitionName="rc-slider-tooltip-zoom-down" disabled />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Basic Slider，<code>step=20</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Slider step={20} defaultValue={50} />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Basic Slider，<code>step=20, dots</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Slider dots step={20} defaultValue={100} />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Controlled Slider</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <Slider value={50} />
                                        </div>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p>Customized Slider</p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <CustomizedSlider />
                                        </div>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <p>Slider with dynamic <code>min</code>, <code>max</code></p>
                                        <div className={ classes.rangeSliderWrap }>
                                            <DynamicBounds>
                                                <Slider defaultValue={50} />
                                            </DynamicBounds>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        { /* START Header 4 */}
                        <HeaderDemo 
                            no={4} 
                            title="Vertical Sliders"
                            className="mt-5"
                            subTitle={(
                                <React.Fragment>
                                    See 6 examples below:
                                </React.Fragment>
                            )}                                 
                        />
                        { /* END Header 4 */}
                        { /* START Card Example */}
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={ 3 }>
                                        <p>Slider with marks, <code>step=null</code></p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Slider vertical min={-10} marks={marks} step={null} defaultValue={20} />
                                        </div>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <p>Slider with marks and steps</p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Slider vertical dots min={-10} marks={marks} step={10} defaultValue={20} />
                                        </div>
                                    </Col>

                                    <Col lg={ 3 }>
                                        <p>Slider with marks, <code>included=false</code></p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Slider vertical min={-10} marks={marks} included={false} defaultValue={20} />
                                        </div>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <p>Slider with marks and steps, <code>included=false</code></p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Slider vertical min={-10} marks={marks} step={10} included={false} defaultValue={20} />
                                        </div>
                                    </Col>

                                    <Col lg={ 3 }>
                                        <p>Range with marks</p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Range vertical min={-10} marks={marks} defaultValue={[20, 40]} />
                                        </div>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <p>Range with marks and steps</p>
                                        <div className={ classes.markedSliderVerticalWrap }>
                                            <Range vertical min={-10} marks={marks} step={10}
                                                defaultValue={[20, 40]}
                                            />
                                        </div>
                                    </Col>
                                </Row>                   
                            </CardBody>
                        </Card>
                    { /* END Card Example */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
