import React from 'react';
import MaskedInput from 'react-text-mask'
import {
    createAutoCorrectedDatePipe,
    createNumberMask,
    emailMask
} from 'text-mask-addons';

import {
    Row,
    Card,
    CardBody,
    Container,
    Col,
    FormGroup,
    Label,
    Input
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
const dolarsMask = createNumberMask({ prefix: '$' });
const dolarsMaskDecimal = createNumberMask({ prefix: '$', allowDecimal: true });
const percentageMask = createNumberMask({ prefix: '', suffix: '%', integerLimit: 3 });
const upperCasePipe = conformedValue => conformedValue.toUpperCase();

export const TextMask = () => (
    <Container>
        <HeaderMain 
            title="Text Mask"
            className="mb-4 mt-4"
        />
        <p className="mb-3">
            Text Mask is an input mask library. 
            It can create input masks for <code>phone</code>, 
            <code>date</code>, <code>currency</code>, <code>zip code</code>, <code>percentage</code>, <code>email</code>, and literally anything!
        </p>
        <Card>
            <CardBody>
                <Row>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSPhoneNumber">
                                US Phone Number
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </Label>
                            <Input
                                mask={ ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                                placeholder='(555) 495-3947'
                                tag={ MaskedInput }
                                id="uSPhoneNumber"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSPhoneNumberWith">
                                US Phone Number With Masked Input
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </Label>
                            <Input
                                mask={ ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                                placeholder='+1 (555) 495-3947'
                                tag={ MaskedInput }
                                id="uSPhoneNumberWith"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="date">
                                Date
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </Label>
                            <Input
                                mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                                placeholder='25/09/1970'
                                tag={ MaskedInput }
                                id="date"
                            />
                        </FormGroup>
                    </Col>

                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="dateAuto">
                                Date (Auto-Corrected)
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </Label>
                            <Input
                                mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                                keepCharPositions={ true }
                                pipe={ autoCorrectedDatePipe }
                                placeholder='Please Enter a Date'
                                tag={ MaskedInput }
                                id="dateAuto"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSDollarAmount">
                                US dollar amount
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </Label>
                            <Input
                                mask={ dolarsMask }
                                className='text-right form-control'
                                placeholder='Enter an amount'
                                tag={ MaskedInput }
                                id="uSDollarAmount"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSDollarAmountAllows">
                                US dollar amount (allows decimal)
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </Label>
                            <Input
                                mask={ dolarsMaskDecimal }
                                className='text-right form-control'
                                placeholder='Enter an amount'
                                tag={ MaskedInput }
                                id="uSDollarAmountAllows"
                            />
                        </FormGroup>
                    </Col>

                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="percentageAmount">
                                Percentage Amount
                                <span className="small ml-1 text-muted">
                                    #1.07
                                </span>
                            </Label>
                            <Input
                                mask={ percentageMask }
                                className='text-right form-control'
                                placeholder='Enter an amount'
                                tag={ MaskedInput }
                                id="percentageAmount"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="email">
                                Email
                                <span className="small ml-1 text-muted">
                                    #1.08
                                </span>
                            </Label>
                            <Input
                                mask={ emailMask }
                                placeholder='john@smith.com'
                                tag={ MaskedInput }
                                id="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSZipCode">
                                US Zip Code
                                <span className="small ml-1 text-muted">
                                    #1.09
                                </span>
                            </Label>
                            <Input
                                mask={ [/[1-9]/, /\d/, /\d/, /\d/, /\d/] }
                                placeholder='94303'
                                tag={ MaskedInput }
                                id="uSZipCode"
                            />
                        </FormGroup>
                    </Col>

                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="canadianPostal">
                                Canadian Postal Code
                                <span className="small ml-1 text-muted">
                                    #1.10
                                </span>
                            </Label>
                            <Input
                                pipe={ upperCasePipe }
                                mask={ [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/] }
                                placeholder='K1A 0B2'
                                tag={ MaskedInput }
                                id="canadianPostal"
                            />
                        </FormGroup>
                    </Col>
                </Row>      
            </CardBody>
        </Card>

    </Container>
);
