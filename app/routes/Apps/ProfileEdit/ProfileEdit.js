import React from 'react';

import { 
    Container,
    Row,
    Col,
    Input,
    Card,
    Button,
    CardBody,
    CardFooter,
    FormText,
    CardTitle,
    CustomInput,
    Label,
    FormGroup,
    Form
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { ProfileLeftNav } from "../../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";

const ProfileEdit = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Profile Edit"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                   <ProfileHeader />
                </Col>
                <Col lg={ 3 }>
                    <ProfileLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card>
                        <CardBody>
                            <div className="d-flex mb-4">
                               <CardTitle tag="h6">
                                    Profile Edit
                               </CardTitle>
                                <span className="ml-auto align-self-start small">
                                    Fields mark as <span className="text-danger">*</span> is required.
                                </span>
                            </div>
                            <Form>
                                <div className="small mt-4 mb-3">
                                    Required
                                </div>
                                { /* START File Select */}
                                <FormGroup row>
                                    <Label for="uploadYourAvatar" sm={3} className="text-right">
                                        Upload Your Avatar
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput type="file" id="uploadYourAvatar" name="customFile" label="Browse for a file to upload...." />
                                        <FormText color="muted">
                                            JPG, GIF, PNG, MOV and AVI. Please choose a files under 2GB to upload. File sizes are 400 x 300px.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END File Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="firstName" sm={3} className="text-right">
                                        <span className="text-danger">*</span> First Name
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="firstName" 
                                            placeholder="First Name..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="lastName" sm={3} className="text-right">
                                        <span className="text-danger">*</span> Last Name
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="text" 
                                            id="lastName" 
                                            placeholder="Last Name..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="jobType" sm={3} className="text-right">
                                        Job Type
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="jobType"  
                                        >
                                            <option value="">Select...</option>
                                            <option>Human Intranet Developer </option>
                                            <option>Dynamic Tactics Specialist</option>
                                            <option>Global Configuration Consultant</option>
                                            <option>Principal Directives Orchestrator</option>
                                            <option>Corporate Usability Consultant</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                <div className="small mt-5 mb-3">
                                    Availability
                                </div>
                                { /* START Radios */}
                                <FormGroup row>
                                    <Label for="afterLogging" sm={3} className="text-right pt-0">
                                        After Logging
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput 
                                            type="radio" 
                                            id="operatingSystem12"
                                            name="afterLogging"
                                            label="Available" 
                                            defaultChecked
                                        />
                                        <CustomInput 
                                            type="radio" 
                                            id="operatingSystem22"
                                            name="afterLogging"
                                            label="Inactive" 
                                    
                                        />
                                        <CustomInput 
                                            type="radio" 
                                            id="operatingSystem33" 
                                            name="afterLogging"
                                            label="Busy" 
                                        />
                                        <CustomInput 
                                            type="radio" 
                                            id="operatingSystem34" 
                                            name="afterLogging"
                                            label="Offline" 
                                        />
                                    </Col>
                                </FormGroup>
                                <div className="small mt-4 mb-3">
                                    Fill Profile
                                </div>
                                { /* END Radios */}
                                { /* START Textarea */}
                                <FormGroup row>
                                    <Label for="profile" sm={3} className="text-right">
                                        Profile
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="profile" 
                                            placeholder="Please Describe Your Profile..." 
                                            className="mb-2"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Textarea */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="addLabels" sm={3} className="text-right">
                                        Add Labels
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="addLabels" 
                                            placeholder="Add Here..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                        <CardFooter className="text-right">
                            <Button color="primary">
                                Update Profile
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default ProfileEdit;