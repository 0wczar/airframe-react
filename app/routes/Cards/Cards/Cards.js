import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import {
    HeaderDemo
} from "../../components/HeaderDemo";

const cardText = ({ cardNo }) => (
    <CardText>
        <span className="mr-2 text-muted">
            #{ cardNo }
        </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl elit, porta a sapien eget, fringilla sagittis ex.
    </CardText>
);

const cardContent = (title = 'Some Card Title') => (
    <CardBody>
        <CardTitle>
            { title }
        </CardTitle>
        { cardText }
    </CardBody>
);

const Cards = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Cards"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Card Default Styles" 
                        subTitle="Available panel styles and colors"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardHeader tag="h6">
                            Default Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.01" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6">
                            White Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.02" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-primary text-white">
                            Primary Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.03" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-secondary text-white">
                            Secondary Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.04" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-info text-white">
                            Info Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.05" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-success text-white">
                            Success Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.06" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-warning text-white">
                            Warning Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.07" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-danger text-white">
                            Danger Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.08" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-dark text-white">
                            Dark Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.09" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader tag="h6" className="bg-facebook text-white">
                            Facebook Card
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "1.10" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Without Header 
                                <span className="small ml-1">
                                    Optional
                                </span>
                            </CardTitle>
                            { cardText({ cardNo: "1.11" }) } 
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
                        title="Cards Borders" 
                        subTitle="Provide contextual feedback messages"
                        className="mt-5" 
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    <Card type="border" color="dark" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Dark Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.01" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="primary" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Primary Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.02" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="secondary" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Secondary Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.03" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="info" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Info Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.04" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card type="border" color="success" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Success Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.05" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="warning" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Warning Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.01" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="danger" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Danger Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.01" }) } 
                        </CardBody>
                    </Card>
                    <Card type="border" color="facebook" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Facebook Border Card
                            </CardTitle>
                            { cardText({ cardNo: "2.01" }) } 
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
                        title="Cards Sides Borders" 
                        subTitle="Provide contextual feedback messages"
                        className="mt-5" 
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 6 }>
                    <Card type="side-border" color="dark" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Dark Border 
                            </CardTitle>
                            { cardText({ cardNo: "3.01" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="primary" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Primary Border
                            </CardTitle>
                            { cardText({ cardNo: "3.02" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="secondary" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Secondary Border
                            </CardTitle>
                            { cardText({ cardNo: "3.03" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="info" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Info Border
                            </CardTitle>
                            { cardText({ cardNo: "3.04" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card type="side-border" color="success" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Success Border
                            </CardTitle>
                            { cardText({ cardNo: "3.05" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="warning" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Warning Border
                            </CardTitle>
                            { cardText({ cardNo: "3.06" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="danger" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Danger Border
                            </CardTitle>
                            { cardText({ cardNo: "3.07" }) } 
                        </CardBody>
                    </Card>
                    <Card type="side-border" color="facebook" className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Left Facebook Border
                            </CardTitle>
                            { cardText({ cardNo: "3.08" }) } 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Cards Sides Borders" 
                        subTitle="Provide contextual feedback messages"
                        className="mt-5" 
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="dark"
                            tag="h6">
                                Bottom Dark Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.01" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="primary"
                            tag="h6">
                                Bottom Primary Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.02" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="secondary"
                            tag="h6">
                                Bottom Secondary Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.03" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="success"
                            tag="h6">
                                Bottom Success Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.04" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="info"
                            tag="h6">
                                Bottom Info Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.05" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="dark"
                            tag="h6">
                                Bottom Warning Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.06" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="primary"
                            tag="h6">
                                Bottom Danger Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.07" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="secondary"
                            tag="h6">
                                Bottom Dark Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.08" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardHeader
                            type="border"
                            color="success"
                            tag="h6">
                                Bottom Facebook Border
                        </CardHeader>
                        <CardBody>
                            { cardText({ cardNo: "4.09" }) } 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Cards Backgrounds" 
                        subTitle="Provide contextual feedback messages"
                        className="mt-5"  
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                White Background
                            </CardTitle>
                            { cardText({ cardNo: "5.01" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="primary">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Primary Background
                            </CardTitle>
                            { cardText({ cardNo: "5.02" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="secondary">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Secondary Background
                            </CardTitle>
                            { cardText({ cardNo: "5.03" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="success">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Success Background
                            </CardTitle>
                            { cardText({ cardNo: "5.04" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="warning">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Warning Background
                            </CardTitle>
                            { cardText({ cardNo: "5.05" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3" type="background" color="info">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Info Background
                            </CardTitle>
                            { cardText({ cardNo: "5.06" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="danger">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Danger Background
                            </CardTitle>
                            { cardText({ cardNo: "5.07" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="dark">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Dark Background
                            </CardTitle>
                            { cardText({ cardNo: "5.04" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="background" color="facebook">
                        <CardBody>
                            <CardTitle tag="h6" className="text-white">
                                Facebook Background
                            </CardTitle>
                            { cardText({ cardNo: "5.05" }) } 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 5 */}

            { /* START Header 6 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={6} 
                        title="Cards Various" 
                        subTitle="Provide contextual feedback messages"
                        className="mt-5"  
                    />
                </Col>
            </Row>
            { /* END Header 6 */}
            { /* START Section 6 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3 bg-none">
                        <CardBody>
                            <CardTitle tag="h6">
                               Without Background
                            </CardTitle>
                            { cardText({ cardNo: "6.01" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="border-dash">
                        <CardBody>
                            <CardTitle tag="h6">
                                Dashed Border Card
                            </CardTitle>
                            { cardText({ cardNo: "6.02" }) } 
                        </CardBody>
                    </Card>
                   <Card className="mb-3" type="shadow">
                        <CardBody>
                            <CardTitle tag="h6">
                                Shadow Custom
                            </CardTitle>
                            { cardText({ cardNo: "6.03" }) } 
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3 bg-none" type="border-dot">
                        <CardBody>
                            <CardTitle tag="h6">
                               Dotted Border Card
                            </CardTitle>
                            { cardText({ cardNo: "6.04" }) } 
                        </CardBody>
                    </Card>
                    <Card className="mb-3" type="none">
                        <CardBody>
                            <CardTitle tag="h6">
                                Without Border & Background Card
                            </CardTitle>
                            { cardText({ cardNo: "6.05" }) } 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}
        </Container>
    </React.Fragment>
);

export default Cards;
