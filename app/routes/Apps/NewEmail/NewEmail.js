import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container,
    Row,
    Col,
    Card,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    Badge,
    ButtonToolbar,
    InputGroup,
    InputGroupAddon,
    Input,
    UncontrolledTooltip
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { MailboxLeftNav } from "../../components/Mailbox/MailboxLeftNav";
import { Attachment } from "../../components/Attachment";

const NewEmail = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="New Email"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <MailboxLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                            { /* START Header */}
                            <div className="flex-column flex-md-row d-flex mb-4">
                                <div className="mr-md-auto mr-sm-0">
                                    <Button color="link" tag={ Link } to="/apps/inbox" className="text-decoration-none">
                                        <i className="fa fa-angle-left mr-2"></i>  Inbox
                                    </Button>
                                </div>
                                <ButtonToolbar>
                                    <ButtonGroup className="mr-2">
                                        <Button color="link" tag={ Link } to="/apps/inbox" className="text-decoration-none">
                                            Cancel
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button color="primary" tag={ Link } to="/apps/inbox" id="tooltipSend">
                                            <i className="fa fa-send"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipSend">
                                            Send Now
                                        </UncontrolledTooltip>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                            { /* END Header */}
                            { /* START Forms */}
                            <div className="mb-4">
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        To:
                                    </InputGroupAddon>
                                    <Input placeholder="Enter email(s)..." />
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary" outline>
                                            <i className="fa fa-fw fa-plus"></i>
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                <Row className="mb-3">
                                    <Col sm={12} lg={6} className="mb-3 mb-lg-0">
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                CC:
                                            </InputGroupAddon>
                                            <Input placeholder="Enter email(s)..." />
                                        </InputGroup>
                                    </Col>
                                    <Col sm={12} lg={6}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                BCC:
                                            </InputGroupAddon>
                                            <Input placeholder="Enter email(s)..." />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        Subject:
                                    </InputGroupAddon>
                                    <Input placeholder="Enter topic..." />
                                </InputGroup>
                                <Input type="textarea" name="text" />
                            </div>
                            { /* END Forms */}
                            { /* START Attachments */}
                            <div>
                                <div className="mb-3">
                                    <span className="small mr-2">
                                        Attachments
                                    </span>
                                    <Badge pill color="secondary">3</Badge>
                                </div>
                                <Attachment 
                                    BgIconClassName="text-primary"
                                    icon="file-word-o"
                                    mediaClassName="mb-3"
                                />
                                <Attachment 
                                    BgIconClassName="text-success"
                                    icon="file-excel-o"
                                    mediaClassName="mb-3"
                                />
                                <Attachment 
                                    BgIconClassName="text-warning"
                                    icon="file-powerpoint-o"
                                />
                            </div>

                        </CardBody>
                        <CardFooter className="text-right">
                            <Button color="link" className="text-decoration-none">
                                <i className="fa fa-paperclip mr-2"></i>
                                Add New Files
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default NewEmail;