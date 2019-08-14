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

const SettingsEdit = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Settings Edit"
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
                           <CardTitle tag="h6" className="mb-4">
                                Settings Edit
                           </CardTitle>
                            <Form>
                                { /* START Input */}
                                <FormGroup className="mb-5">
                                    <Label for="notifyMe" className="mb-1 text-inverse">
                                        Monthly Newsletter
                                    </Label>
                                    <p className="mb-2">
                                        Do you want receive our monthly newsletter about 
                                        new products and offers?
                                    </p>
                                    <CustomInput type="checkbox" id="notifyMe" label="Notify Me" inline />
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup className="mb-5">
                                    <Label for="privateMessage" className="mb-1 text-inverse">
                                        Private Message
                                    </Label>
                                    <p className="mb-2">
                                        Do you want notify you by email whenever contacts send you a message?
                                    </p>
                                    <CustomInput type="radio" id="privateMessageYes" name="privateMessage" label="Yes" defaultChecked />
                                    <CustomInput type="radio" id="privateMessageNo" name="privateMessage" label="No" />
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup className="mb-5">
                                    <Label for="privateMessage" className="mb-1 text-inverse">
                                        Publication Email Subscriptions
                                    </Label>
                                    <p className="mb-2">
                                        Control the emails that publications send to you.
                                    </p>
                                    <Button color="primary" outline>
                                        Manage Publication
                                    </Button>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup className="mb-5">
                                    <Label for="ActivityNotifications" className="mb-1 text-inverse">
                                        Activity Notifications
                                    </Label>
                                    <p className="mb-2">
                                        Notify me via email when...
                                    </p>
                                    <CustomInput type="radio" id="someoneComments" name="ActivityNotifications" label="Someone Comments" defaultChecked />
                                    <CustomInput type="radio" id="someoneMentions" name="ActivityNotifications" label="Someone Mentions" />
                                    <CustomInput type="radio" id="anyoneFollowsMe" name="ActivityNotifications" label="Anyone Follows Me" />
                                </FormGroup>
                                { /* END Input */}

                            
                            </Form>
                            { /* END Form */}
                        </CardBody>
                        <CardFooter className="small">
                            <i className="fa fa-fw fa-support text-muted mr-2"></i>
                             If you have trouble with the configuration, you can contact us. <a href="#">We Can Help</a>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default SettingsEdit;