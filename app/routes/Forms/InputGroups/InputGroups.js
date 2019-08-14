import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Button, 
    InputGroup,
    InputGroupAddon,
    CustomInput,
    Form, 
    FormGroup, 
    Label,
    UncontrolledButtonDropdown, 
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Input
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const InputGroups = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Input Groups"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Inputs Groups" 
                        subTitle={(
                            <React.Fragment>
                                Easily extend form controls by adding text, buttons, 
                                or button groups on either side of textual inputs, custom selects, and custom file inputs.
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
                                Input Groups: Text
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftAddon" sm={3}>
                                        Left Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                            <Input placeholder="Left Addon..." id="leftAddon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightAddon" sm={3}>
                                        Right Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Left Addon..." id="rightAddon" />
                                            <InputGroupAddon addonType="append">%</InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothAddon" sm={3}>
                                        Both Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                            <Input placeholder="Amount..." id="bothAddon" />
                                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="urlAddon" sm={3}>
                                        URL Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">wwww.webkom.co/users/</InputGroupAddon>
                                            <Input placeholder="Enter Your Nick..." id="urlAddon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftTextarea" sm={3}>
                                        Left Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">Left Addon</InputGroupAddon>
                                            <Input type="textarea" name="text" id="leftTextarea" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightTextarea" sm={3}>
                                        Right Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightTextarea" />
                                            <InputGroupAddon addonType="append">Right Addon</InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothTextarea" sm={3}>
                                        Both Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">Left Addon</InputGroupAddon>
                                            <Input type="textarea" name="text" id="bothTextarea" />
                                            <InputGroupAddon addonType="append">Right Addon</InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Icons
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftIcon" sm={3}>
                                        Left Icon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-user"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Left Addon..." id="leftIcon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightIcon" sm={3}>
                                        Right Icon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Left Addon..." id="rightIcon" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-lock"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothIcon" sm={3}>
                                        Both Icon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-dollar"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Amount..." id="bothIcon" />
                                            <InputGroupAddon addonType="append">
                                                .00
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="urlIcon" sm={3}>
                                        URL Icon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-link"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Enter Your Nick..." id="urlIcon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftIconTextarea" sm={3}>
                                        Left Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-file-text-o"></i>
                                            </InputGroupAddon>
                                            <Input type="textarea" name="text" id="leftIconTextarea" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightIconTextarea" sm={3}>
                                        Right Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightIconTextarea" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-file-text-o"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothIconTextarea" sm={3}>
                                        Both Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-comment-o"></i>
                                            </InputGroupAddon>
                                            <Input type="textarea" name="text" id="bothIconTextarea" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-file-text-o"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Icons
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSpin" sm={3}>
                                        Left Spin
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-spinner fa-spin"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Left Addon..." id="leftSpin" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightSpin" sm={3}>
                                        Right Spin
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Left Addon..." id="rightSpin" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-spinner fa-spin"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSpinTextarea" sm={3}>
                                        Left Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-spinner fa-spin"></i>
                                            </InputGroupAddon>
                                            <Input type="textarea" name="text" id="leftSpinTextarea" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightSpinTextarea" sm={3}>
                                        Right Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightSpinTextarea" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-spinner fa-spin"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Multiple
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="multipleInputs" sm={3}>
                                        Multiple Inputs
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                First and last name
                                            </InputGroupAddon>
                                            <Input placeholder="First..." id="multipleInputs" />
                                            <Input placeholder="Last..." id="multipleInputs" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftMultiple" sm={3}>
                                        Left Multiple
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                $
                                            </InputGroupAddon>
                                            <InputGroupAddon addonType="prepend">
                                                0.00
                                            </InputGroupAddon>
                                            <Input id="leftMultiple" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightMultiple" sm={3}>
                                        Right Multiple
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input id="rightMultiple" />
                                            <InputGroupAddon addonType="append">
                                                $
                                            </InputGroupAddon>
                                            <InputGroupAddon addonType="append">
                                                0.00
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
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
                        title="Input Groups Buttons"
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
                            <CardTitle tag="h6" className="mb-4">
                                Input Groups: Buttons
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftButton" sm={3}>
                                        Left Button
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                 <Button color="secondary" outline>
                                                    Change...
                                                 </Button>
                                            </InputGroupAddon>
                                            <Input placeholder="Left Addon..." id="leftButton" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightButton" sm={3}>
                                        Right Button
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Right Addon..." id="rightButton" />
                                            <InputGroupAddon addonType="append">
                                                 <Button color="secondary" outline>
                                                    Add <i className="fa fa-angle-right ml-2"></i>
                                                 </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothButtons" sm={3}>
                                        Both Buttons
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                 <Button color="secondary" outline>
                                                    $
                                                 </Button>
                                            </InputGroupAddon>
                                            <Input placeholder="Amount..." id="bothButtons" />
                                            <InputGroupAddon addonType="append">
                                                 <Button color="secondary" outline>
                                                    Add <i className="fa fa-angle-right ml-2"></i>
                                                 </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftButtonTextarea" sm={3}>
                                        Left Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-close mr-2"></i>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>
                                            <Input type="textarea" name="text" id="leftButtonTextarea" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightButtonTextarea" sm={3}>
                                        Right Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightButtonTextarea" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-close mr-2"></i>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>                                            
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothButtonTextarea" sm={3}>
                                        Both Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Change...
                                                </Button>
                                            </InputGroupAddon>  
                                            <Input type="textarea" name="text" id="bothButtonTextarea" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-close mr-2"></i>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>                                            
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Buttons Dropdowns
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftDropdown" sm={3}>
                                        Left Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Select
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input placeholder="Left Addon..." id="leftDropdown" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightDropdown" sm={3}>
                                        Right Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Left Addon..." id="rightDropdown" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Select
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothDropdowns" sm={3}>
                                        Both Dropdowns
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Users
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>
                                                        Select Priveleges:
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-circle-o mr-2"></i>
                                                        Administrator
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-o mr-2"></i>
                                                        User
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-users mr-2"></i>
                                                        All
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                                        Add New User
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input placeholder="Amount..." id="bothDropdowns" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Select
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftTexareaDropdown" sm={3}>
                                        Left Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input type="textarea" name="text" id="leftTexareaDropdown" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightTexareaDropdown" sm={3}>
                                        Right Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightTexareaDropdown" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothTexareaDropdowns" sm={3}>
                                        Both Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Users
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>
                                                        Select Priveleges:
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-circle-o mr-2"></i>
                                                        Administrator
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-o mr-2"></i>
                                                        User
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-users mr-2"></i>
                                                        All
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                                        Add New User
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input type="textarea" name="text" id="bothTexareaDropdowns" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                    { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Segmented
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSegmentedDropdown" sm={3}>
                                        Left Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                { /* START Button Dropdown */}
                                                <Button color="secondary" outline>
                                                    Options
                                                </Button>
                                                { /* END Button Dropdown */}
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input placeholder="Left Addon..." id="leftSegmentedDropdown" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightSegmentedDropdown" sm={3}>
                                        Right Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Left Addon..." id="rightSegmentedDropdown" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    Options
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothSegmentedDropdowns" sm={3}>
                                        Both Dropdowns
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Options
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-user-circle-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>
                                                        Select Priveleges:
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-circle-o mr-2"></i>
                                                        Administrator
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-o mr-2"></i>
                                                        User
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-users mr-2"></i>
                                                        All
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                                        Add New User
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input placeholder="Amount..." id="bothSegmentedDropdowns" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    Options
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSegmentedTexareaDropdown" sm={3}>
                                        Left Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>
                                            <Input type="textarea" name="text" id="leftSegmentedTexareaDropdown" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightSegmentedTexareaDropdown" sm={3}>
                                        Right Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input type="textarea" name="text" id="rightSegmentedTexareaDropdown" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="bothSegmentedTexareaDropdowns" sm={3}>
                                        Both Dropdown
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Options
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="prepend">
                                                <DropdownToggle color="secondary" outline caret>
                                                    Users
                                                </DropdownToggle>
                                                <DropdownMenu persist>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>
                                                        Select Priveleges:
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-circle-o mr-2"></i>
                                                        Administrator
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-user-o mr-2"></i>
                                                        User
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-users mr-2"></i>
                                                        All
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                                        Add New User
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                            <Input type="textarea" name="text" id="bothSegmentedTexareaDropdowns" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    Clear
                                                </Button>
                                            </InputGroupAddon>
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="secondary" outline caret>
                                                    <i className="fa fa-fw fa-folder-open-o"></i>
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="fa fa-folder-o mr-2"></i>
                                                        My Music
                                                    </DropdownItem>
                                                    { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}
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
                        title="Input Groups Buttons" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Easily extend form controls by adding text, buttons, 
                                or button groups on either side of textual inputs, custom selects, and custom file inputs.
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
                            <CardTitle tag="h6" className="mb-4">
                                Input Groups: Sizes
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftLargeAddon" sm={3} size="lg">
                                        Large Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup size="lg">
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-user"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Enter Your Nick..." id="leftLargeAddon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftDefaultAddon" sm={3}>
                                        Default Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-envelope"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Enter Your Email..." id="leftDefaultAddon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSmallAddon" sm={3} size="sm">
                                        Small Addon
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-lock"></i>
                                            </InputGroupAddon>
                                            <Input placeholder="Enter Password..." id="leftSmallAddon" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Checkboxes and Radios
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftCheckbox" sm={3}>
                                        Left Checkbox
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="checkbox" id="leftCheckboxAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Checkbox Custom..." id="leftCheckbox" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightCheckbox" sm={3}>
                                        Right Checkbox
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Addon Checkbox Custom..." id="rightCheckbox" />
                                            <InputGroupAddon addonType="append">
                                                <Input type="checkbox" id="rightRadioAddon" label="" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftRadio" sm={3}>
                                        Left Radio
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="radio" id="leftRadioAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Radio Custom..." id="leftRadio" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightRadio" sm={3}>
                                        Right Radio
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Addon Radio Custom..." id="rightRadio" />
                                            <InputGroupAddon addonType="append">
                                                <Input type="radio" id="rightRadioAddon" label="" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftCustomCheckbox" sm={3}>
                                        Left Checkbox
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <CustomInput type="checkbox" id="leftCustomCheckboxAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Checkbox Native..." id="leftCustomCheckbox" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightCustomCheckbox" sm={3}>
                                        Right Checkbox
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Addon Checkbox Native..." id="rightCustomCheckbox" />
                                            <InputGroupAddon addonType="append">
                                                <CustomInput type="checkbox" id="rightCustomRadioAddon" label="" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftCustomRadio" sm={3}>
                                        Left Radio
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <CustomInput type="radio" id="leftCustomRadioAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Radio Native..." id="leftCustomRadio" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightCustomRadio" sm={3}>
                                        Right Radio
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <Input placeholder="Addon Radio Native..." id="rightCustomRadio" />
                                            <InputGroupAddon addonType="append">
                                                <CustomInput type="radio" id="rightCustomRadioAddonNative" label="" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Custom Selects
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightSelect" sm={3}>
                                        Right Select
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                Language:
                                            </InputGroupAddon>
                                            <CustomInput type="select" id="rightSelect" name="customSelect">
                                                <option value="">Choose...</option>
                                                <option>England</option>
                                                <option>Scotland</option>
                                                <option>Ireland</option>
                                                <option>United States</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>New Zeland</option>
                                            </CustomInput>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftSelect" sm={3}>
                                        Left Select
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <CustomInput type="select" id="leftSelect" name="customSelect">
                                                <option value="">Choose...</option>
                                                <option>England</option>
                                                <option>Scotland</option>
                                                <option>Ireland</option>
                                                <option>United States</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>New Zeland</option>
                                            </CustomInput>
                                            <InputGroupAddon addonType="append">
                                                Selected
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftButtonSelect" sm={3}>
                                        Left Button Select
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Confirm
                                                </Button>{' '}
                                            </InputGroupAddon>
                                            <CustomInput type="select" id="leftButtonSelect" name="customSelect">
                                                <option value="">Choose...</option>
                                                <option>England</option>
                                                <option>Scotland</option>
                                                <option>Ireland</option>
                                                <option>United States</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>New Zeland</option>
                                            </CustomInput>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightButtonSelect" sm={3}>
                                        Right Button Select
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <CustomInput type="select" id="rightButtonSelect" name="customSelect">
                                                <option value="">Choose...</option>
                                                <option>England</option>
                                                <option>Scotland</option>
                                                <option>Ireland</option>
                                                <option>United States</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>New Zeland</option>
                                            </CustomInput>
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-fw fa-check"></i>
                                                </Button>{' '}
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Input Groups: Custom File Inputs
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form className="table-responsive">
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftFileInput" sm={3}>
                                        Left File Input
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <CustomInput type="file" id="leftFileInput" name="customFile" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                All Images Accepted
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightFileInput" sm={3}>
                                        Right File Input
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-file-pdf-o mr-2"></i>
                                                Only PDF Accepted
                                            </InputGroupAddon>
                                            <CustomInput type="file" id="rightFileInput" name="customFile" />
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="leftFileInput2" sm={3}>
                                        Left File Input
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    Remove
                                                </Button>
                                            </InputGroupAddon>
                                            <CustomInput type="file" id="leftFileInput2" name="customFile" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                All Images Accepted
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="rightFileInput2" sm={3}>
                                        Right File Input
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <i className="fa fa-fw fa-file-pdf-o mr-2"></i>
                                                Only PDF Accepted
                                            </InputGroupAddon>
                                            <CustomInput type="file" id="rightFileInput" name="customFile" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    Send
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}
        </Container>
    </React.Fragment>
);

export default InputGroups;