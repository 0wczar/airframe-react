import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { 
    Container,
    Row,
    Col,
    ButtonToolbar,
    Avatar,
    AvatarAddOn,
    Card,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    CustomInput,
    Table,
    Badge,
    InputGroup,
    InputGroupAddon,
    Input,
    UncontrolledTooltip
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { MailboxLeftNav } from "../../components/Mailbox/MailboxLeftNav";
import { Paginations } from "../../components/Paginations";
import { TrTableInbox } from "./components/TrTableInbox";

const Inbox = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Inbox"
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
                            <div className="d-lg-flex justify-content-end">
                                <div className="mr-auto d-flex align-items-center mb-3 mb-lg-0">
                                    <InputGroup>
                                        <Input placeholder="Search for..." />
                                        <InputGroupAddon addonType="append">
                                            <Button color="secondary" outline>
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <ButtonToolbar>
                                    <ButtonGroup className="mr-2">
                                        <Button color="link" className="text-decoration-none align-self-center" id="tooltipRefresh">
                                            <i className="fa fa-fw fa-refresh"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipRefresh">
                                            Refresh
                                        </UncontrolledTooltip>
                                        <Button color="link" className="text-decoration-none align-self-center" id="tooltipFav">
                                            <i className="fa fa-fw fa-star"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipFav">
                                            Add to Favorites
                                        </UncontrolledTooltip>
                                        <Button color="link" className="text-decoration-none align-self-center" id="tooltipTag">
                                            <i className="fa fa-fw fa-tag"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipTag">
                                            Tag
                                        </UncontrolledTooltip>
                                        <Button color="link" className="text-decoration-none align-self-center" id="tooltipBan">
                                            <i className="fa fa-fw fa-ban"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipBan">
                                            Ban this User
                                        </UncontrolledTooltip>
                                        <Button color="link" className="text-decoration-none align-self-center" id="tooltipDelete">
                                            <i className="fa fa-fw fa-trash"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipDelete">
                                            Delete
                                        </UncontrolledTooltip>
                                    </ButtonGroup>
                                    <ButtonGroup className="ml-auto ml-lg-0">
                                        <Button color="primary" className="align-self-center" tag={ Link } to="/apps/new-email" id="tooltipAddNew">
                                            <i className="fa fa-fw fa-pencil"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                                            Add New
                                        </UncontrolledTooltip>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0"></th>
                                    <th className="bt-0"></th>
                                    <th className="bt-0">From</th>
                                    <th className="bt-0">Subject</th>
                                    <th className="text-right bt-0">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                _.times(11, (index) => (
                                    <TrTableInbox 
                                        id={index.toString()}
                                        key={index}
                                    />            
                                ))
                            }
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center pb-0">
                            <Paginations />
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default Inbox;