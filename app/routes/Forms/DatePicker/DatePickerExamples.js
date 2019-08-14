import React from 'react';
import DatePicker, { setDefaultLocale } from 'react-datepicker';
import moment from 'moment';

import {
    Container,
    Row,
    Card,
    Col,
    CardBody
} from './../../../components';
import { Example, ButtonInput, AddonInput } from './components';

import { HeaderMain } from "../../components/HeaderMain";

setDefaultLocale('en');

export class DatePickerExamples extends React.Component {
    state = {
        startDate: moment().toDate(),
        endDate: moment().add(5, 'days').toDate()
    }

    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Date Picker"
                    className="mb-5 mt-4"
                />
                <p className="mb-4">
                    You’ll need to install React, PropTypes, and Moment.js separately since those dependencies 
                    aren’t included in the package. Below is a simple example of how to use the Datepicker in a React view. 
                    You will also need to require the CSS file from this package (or provide your own). 
                    The example below shows how to include the CSS from this package if your build system supports 
                    requiring CSS files (Webpack is one that does).
                </p>
                <Row>
                    <Col lg={ 4 }>
                        { /* START Card */}
                        <Card className="mb-3">
                            <CardBody>
                                <Example
                                    title="Default"
                                    no="1.01"
                                    exampleInput={(
                                        <DatePicker
                                            customInput={ <ButtonInput /> }
                                            selected={this.state.startDate}
                                            onChange={this._handleChangeStart}
                                        />
                                    )}
                                >
                                {   
                                    '<DatePicker\n' +
                                    '    selected={this.state.startDate}\n' +
                                    '    onChange={this._handleChange}\n' +
                                    '/>'
                                }
                                </Example>
                            </CardBody>
                        </Card>
                        { /* END Card */}
                        { /* START Card */}
                        <Card className="mb-3">
                            <CardBody>
                                <Example
                                    title="Inline"
                                    no="1.02"
                                    exampleInput={(
                                        <DatePicker
                                            inline
                                            selected={this.state.startDate}
                                            onChange={this._handleChangeStart}
                                        />
                                    )}
                                >
                                {   
                                    '<DatePicker\n' +
                                    '   inline\n' +
                                    '   selected={this.state.startDate}\n' +
                                    '   onChange={this._handleChange}\n' +
                                    '/>'
                                }
                                </Example>
                            </CardBody>
                        </Card>
                        { /* END Card */}
                    </Col>
                    <Col lg={ 8 }>
                        { /* START Card */}
                        <Card>
                            <CardBody>
                                <Example
                                    title="Range"
                                    no="1.03"
                                    exampleInput={(
                                        <div className="d-flex">
                                            <DatePicker
                                                customInput={ <AddonInput /> }
                                                selected={this.state.startDate}
                                                selectsStart
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this._handleChangeStart}
                                            />

                                            <DatePicker
                                                className="ml-2"
                                                customInput={ <AddonInput /> }
                                                selected={this.state.endDate}
                                                selectsEnd
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this._handleChangeEnd}
                                            />
                                        </div>
                                    )}
                                >
                                {   
                                    '<DatePicker\n' +
                                    '    selected={this.state.startDate}\n' +
                                    '    selectsStart\n' +
                                    '    startDate={this.state.startDate}\n' +
                                    '    endDate={this.state.endDate}\n' +
                                    '    onChange={this.handleChangeStart}\n' +
                                    '/>\n' +
                                    '\n' +
                                    '<DatePicker\n' +
                                    '    selected={this.state.endDate}\n' +
                                    '    selectsEnd\n' +
                                    '    startDate={this.state.startDate}\n' +
                                    '    endDate={this.state.endDate}\n' +
                                    '    onChange={this.handleChangeEnd}\n' +
                                    '/>\n'
                                }
                                </Example>
                            </CardBody>
                        </Card>
                        { /* END Card */}
                    </Col>
                </Row>
            </Container>
        )
    }

    _handleChangeStart = (startDate) => (
        this.setState({ startDate })
    )

    _handleChangeEnd = (endDate) => (
        this.setState({ endDate })
    )
}
