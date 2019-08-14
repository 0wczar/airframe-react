import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    CardBody,
    CardTitle,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    CustomInput,
    Button,
    Label
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini";
import {
    TimelineDefault
} from "../../components/Timeline/TimelineDefault";

const Timeline = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Timeline"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 8 }>
                    <TimelineDefault 
                        showPillDate
                            pillDate="Today"
                        smallIconColor="danger"
                        iconCircleColor="danger"
                            iconCircle="exclamation"
                    />
                    <TimelineDefault
                        showPillDate
                            pillDate="Yesterday"
                        smallIconColor="info"
                        iconCircleColor="info"
                            iconCircle="comment"
                    />
                    <TimelineDefault
                        showPillDate
                            pillDate="2 Days ago"
                        smallIconColor="primary"
                        iconCircleColor="primary"
                            iconCircle="envelope"
                    />
                    <TimelineDefault 
                        showPillDate
                            pillDate="3 Months ago"
                        smallIconColor="warning"
                        iconCircleColor="warning"
                            iconCircle="clock-o"
                    />
                    <TimelineDefault 
                        showPillDate
                            pillDate="Year ago"
                        smallIconColor="success"
                        iconCircleColor="success"
                            iconCircle="check"
                    />
                    <TimelineDefault 
                        iconCircle="close"
                    />
                </Col>
                <Col lg={ 4 }>
                    { /* START Card Widget */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Timeline Mini
                            </CardTitle>
                            <TimelineMini 
                                showPillDate
                                    pillDate="2 Days ago"
                                icon="times-circle"
                                    iconClassName="text-danger"
                                badgeTitle="Alert"
                                    badgeColor="danger"
                            />
                            <TimelineMini 
                                icon="question-circle"
                                    iconClassName="text-warning"
                                badgeTitle="Warning"
                                    badgeColor="warning"
                            />
                            <TimelineMini 
                                icon="info-circle"
                                    iconClassName="text-info"
                                badgeTitle="Info"
                                    badgeColor="info"
                            />
                            <TimelineMini 
                                showPillDate
                                    pillDate="Yesterday"
                                icon="plus-circle"
                                    iconClassName="text-primary"
                                badgeTitle="Message"
                                    badgeColor="primary"
                            />
                            <TimelineMini 
                                icon="check-circle"
                                    iconClassName="text-success"
                                badgeTitle="Success"
                                    badgeColor="success"
                            />
                            <TimelineMini 
                                icon="circle"
                                badgeTitle="Obsolete"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card Widget */}
                </Col>                
            </Row>
        </Container>
    </React.Fragment>
);
export default Timeline;
