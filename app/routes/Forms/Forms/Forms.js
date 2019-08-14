import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    FormFeedback,
    Badge,
    CustomInput,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Forms = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Forms"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Inputs" 
                        subTitle={(
                            <React.Fragment>
                                Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Forms: Inputs
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Input
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="input" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPassword" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="inputPassword" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordPlaceholder" sm={3}>
                                        Input Placeholder
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="inputPasswordPlaceholder" 
                                            placeholder="Placeholder..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordReadonly" sm={3}>
                                        Input Readonly
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="email" 
                                            id="inputPasswordReadonly" 
                                            placeholder="Readonly Input..." 
                                            readOnly
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordDisabled" sm={3}>
                                        Input Disabled
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="inputPasswordDisabled" 
                                            placeholder="Disabled" 
                                            disabled
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="defaultSelect" sm={3}>
                                        Default Select
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="defaultSelect" 
                                        >
                                            <option defaultValue="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="customSelect" sm={3}>
                                        Custom Select
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="customSelect"  
                                        >
                                            <option defaultValue="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="staticText" sm={3}>
                                        Static Text
                                    </Label>
                                    <Col sm={9}>
                                        <Input plaintext initialValue="static@text.com" />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="textArea" 
                                            placeholder="Enter text..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Selects
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="multipleSelect" sm={3}>
                                        Multiple Select
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="multipleSelect"
                                            multiple
                                        >
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                            <option>Four</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="multipleSelectDisabled" sm={3}>
                                        Multiple Select Disabled
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="multipleSelectDisabled"
                                            multiple
                                            disabled
                                        >
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                            <option>Four</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: File Inputs
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInput" sm={3}>File Input</Label>
                                    <Col sm={9}>
                                        <Input type="file" name="file" id="fileInput" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            Its a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyle" sm={3}>File Browser</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyle" name="customFile" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It&apos;s a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyleDisabled" sm={3}>File Browser Disabled</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyleDisabled" name="customFile" disabled />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It&apos;s a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyleCustom" sm={3}>File Browser Custom Label</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyleCustom" name="customFile" label="Yo, select a file!" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It&apos;s a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Text Helpers
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputHelper-1" sm={3}>
                                        Input Helper
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper-1" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted">
                                                    Left Text Helper
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper-2" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-center">
                                                    Center Text Helper
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 }>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper-3" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-right">
                                                    Right Text Helper
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputIcon-1" sm={3}>
                                        Input Icon
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon-1" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We&apos;ll never share your email.
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon-2" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-center">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We&apos;ll never share your email.
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 }>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon-3" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-right">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We&apos;ll never share your email.
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputBadge-1" sm={3}>
                                        Input Badge
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge-1" 
                                                    placeholder="" 
                                                />
                                                <FormText>
                                                    <Badge color="primary">
                                                        Left Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge-2" 
                                                    placeholder="" 
                                                />
                                                <FormText className="text-center">
                                                    <Badge color="success">
                                                        Center Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 }>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge-3" 
                                                    placeholder="" 
                                                />
                                                <FormText className="text-right">
                                                    <Badge color="warning">
                                                        Right Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Input Inline */}
                                <FormGroup row>
                                    <Label for="inputInline" sm={3}>
                                        Input Inline
                                    </Label>
                                    <Col sm={9} className="d-flex align-items-center">
                                        <FormGroup check inline>
                                            <Input 
                                                type="text" 
                                                name="" 
                                                id="inputInline" 
                                                placeholder="" 
                                            />
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <FormText className="align-self-center">
                                                Must be 8-20 characters long.
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input Inline */}
                                { /* START Input Inline */}
                                <FormGroup row>
                                    <Label for="inputInlineBadge" sm={3}>
                                        Input Inline Badge
                                    </Label>
                                    <Col sm={9} className="d-flex align-items-center">
                                        <FormGroup check inline>
                                            <Input 
                                                type="text" 
                                                name="" 
                                                id="inputInlineBadge" 
                                                placeholder="" 
                                            />
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Badge color="danger">
                                                Must be 8-20 characters long.
                                            </Badge>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input Inline */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Validations
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputWithoutValidation" sm={3}>
                                        Input Without Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputWithoutValidation" 
                                            placeholder="" 
                                        />
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputValidation-1" sm={3}>
                                        Input Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputValidation-1" 
                                            placeholder="" 
                                            valid
                                            defaultValue="Mark"
                                        />
                                        <FormFeedback valid>Looks good!</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputValidation-2" sm={3}>
                                        Input Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputValidation-2" 
                                            placeholder="Username..." 
                                            invalid
                                        />
                                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="selectCustomValidation" sm={3}>
                                        Select Custom Validation
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="selectCustomValidation" 
                                            invalid 
                                        >
                                            <option defaultValue="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                        <FormFeedback>Example invalid custom select feedback</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START File Input */}
                                <FormGroup row>
                                    <Label for="fileInputStyleValidation" sm={3}>
                                        File Browser Validation
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="file" 
                                            id="fileInputStyleValidation" 
                                            name="customFile" 
                                            invalid
                                        />
                                        <FormFeedback>Example invalid custom file feedback</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END File Input */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="validationTooltips-1" sm={3}>
                                        Validation Tooltips
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-5 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="validationTooltips-1" 
                                                    placeholder="" 
                                                    defaultValue="Mark"
                                                    valid
                                                />
                                                <FormFeedback valid tooltip>
                                                    Sweet! that name is available
                                                </FormFeedback>
                                                <FormText>
                                                    Example help text that remains unchanged.
                                                </FormText>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="validationTooltips-2" 
                                                    placeholder=""
                                                    invalid
                                                />
                                                <FormFeedback tooltip>
                                                    Oh noes! that name is already taken
                                                </FormFeedback>
                                                <FormText>
                                                    Example help text that remains unchanged.
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Sizes
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="largeSize-1" sm={3} size="lg">
                                       Large Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="largeSize-1" 
                                                    placeholder="Large (lg) Input"
                                                    bsSize="lg" 
                                                />
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="largeSize-2"
                                                    bsSize="lg" 
                                                >
                                                    <option defaultValue="">Large (lg) Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="largeSize-3"
                                                    bsSize="lg" 
                                                >
                                                    <option defaultValue="">Large (lg) Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="defaultSize-1" sm={3}>
                                       Default Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="defaultSize-1" 
                                                    placeholder="Default Input"
                                                />
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="defaultSize-2"
                                                >
                                                    <option defaultValue="">Default Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col>
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="defaultSize-3"
                                                >
                                                    <option defaultValue="">Default Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="smSize-1" sm={3} size="sm">
                                       Small Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="smSize-1" 
                                                    placeholder="Small (sm) Input"
                                                    bsSize="sm" 
                                                />
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 } className="mb-3 mb-md-0">
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="smSize-2"
                                                    bsSize="sm" 
                                                >
                                                    <option defaultValue="">Small (sm) Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col sm={ 12 } lg={ 4 }>
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="smSize-3"
                                                    bsSize="sm" 
                                                >
                                                    <option defaultValue="">Small (sm) Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Checkboxes" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <Row>
                                <Col lg={ 6 }>
                                    { /* START Checkboxes */}
                                    <div className="mb-5">
                                        <CardTitle tag="h6">
                                            Forms: Checkboxes Stacked
                                            <span className="small ml-1 text-muted">
                                                #2.01
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" defaultChecked />{' '}
                                                        Checked Checkbox
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" />{' '}
                                                        Unchecked Checkbox
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check disabled>
                                                    <Label check>
                                                        <Input type="checkbox" disabled />{' '}
                                                        Disabled Checkbox
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Checkboxes */}
                                    { /* START Checkboxes */}
                                    <div>
                                        <CardTitle tag="h6">
                                            Forms: Checkboxes Inline
                                            <span className="small ml-1 text-muted">
                                                #2.02
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" defaultChecked />{' '}
                                                        Checked
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" />{' '}
                                                        Unchecked
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check disabled inline>
                                                    <Label check>
                                                        <Input type="checkbox" disabled />{' '}
                                                        Disabled
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Checkboxes */}
                                </Col>
                                <Col lg={ 6 }>
                                    { /* START Checkboxes */}
                                    <div className="mb-5">
                                        <CardTitle tag="h6">
                                            Forms: Checkboxes Stacked Custom
                                            <span className="small ml-1 text-muted">
                                                #2.03
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesStackedCustom1" 
                                                    label="Checked Checkbox Custom"
                                                    defaultChecked 
                                                />
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesStackedCustom2" 
                                                    label="Unchecked Checkbox Custom" 
                                                />
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesStackedCustom3" 
                                                    label="Disabled Checkbox Custom" 
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Checkboxes */}
                                    { /* START Checkboxes */}
                                    <div>
                                        <CardTitle tag="h6">
                                            Forms: Checkboxes Inline
                                            <span className="small ml-1 text-muted">
                                                #2.02
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesInlineCustom1" 
                                                    label="Checked Custom" 
                                                    inline
                                                    defaultChecked
                                                />
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesInlineCustom2" 
                                                    label="Unchecked Custom" 
                                                    inline
                                                />
                                                <CustomInput 
                                                    type="checkbox" 
                                                    id="checkboxesInlineCustom3" 
                                                    label="Disabled Custom" 
                                                    inline
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Checkboxes */}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Radios" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <Row>
                                <Col lg={ 6 }>
                                    { /* START Radios */}
                                    <div className="mb-5">
                                        <CardTitle tag="h6">
                                            Forms: Radio Stacked
                                            <span className="small ml-1 text-muted">
                                                #3.01
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radioStacked" defaultChecked />{' '}
                                                        Checked Radio
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radioStacked" />{' '}
                                                        Unchecked Radio
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check disabled>
                                                    <Label check>
                                                        <Input type="radio" name="radioStacked" disabled />{' '}
                                                        Disabled Radio
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Radios */}
                                    { /* START Radios */}
                                    <div>
                                        <CardTitle tag="h6">
                                            Forms: Radio Inline
                                            <span className="small ml-1 text-muted">
                                                #3.02
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" defaultChecked />{' '}
                                                        Checked
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" />{' '}
                                                        Unchecked
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check disabled inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" disabled />{' '}
                                                        Disabled
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Radios */}
                                </Col>
                                <Col lg={ 6 }>
                                    { /* START Radios */}
                                    <div className="mb-5">
                                        <CardTitle tag="h6">
                                            Forms: Radio Stacked Custom
                                            <span className="small ml-1 text-muted">
                                                #3.03
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radiosStackedCustom1" 
                                                    name="radiosStackedCustom"
                                                    label="Checked Radio Custom"
                                                    defaultChecked 
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radiosStackedCustom2" 
                                                    name="radiosStackedCustom"
                                                    label="Unchecked Radio Custom" 
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radiosStackedCustom3" 
                                                    name="radiosStackedCustom"
                                                    label="Disabled Radio Custom" 
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Radios */}
                                    { /* START Radios */}
                                    <div>
                                        <CardTitle tag="h6">
                                            Forms: Radio Inline
                                            <span className="small ml-1 text-muted">
                                                #3.02
                                            </span>
                                        </CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radioInlineCustom1"
                                                    name="radioInlineCustom"
                                                    label="Checked Custom" 
                                                    inline
                                                    defaultChecked
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radioInlineCustom2" 
                                                    name="radioInlineCustom"
                                                    label="Unchecked Custom" 
                                                    inline
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="radioInlineCustom3" 
                                                    name="radioInlineCustom"
                                                    label="Disabled Custom" 
                                                    inline
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    { /* END Radios */}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}
        </Container>
    </React.Fragment>
);

export default Forms;