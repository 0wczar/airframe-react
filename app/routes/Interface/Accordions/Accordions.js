import React from 'react';
import faker from 'faker/locale/en_US';

import {
    Accordion,
    Container,
    Row,
    Col,
    CardText,
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Accordions = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Accordions"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Accordions Default" 
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card with Links
                            <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header className="h6">
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="h6">
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="h6">
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Normal Text 
                            <span className="small ml-1 text-muted">
                                #1.04
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Left Icon
                            <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>, <code>&lt;i className="fa fa-fw fa-plus" /&gt;</code>
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header className='h6'>
                                <Accordion.Indicator className="mr-2"/>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className='h6'>
                                <Accordion.Indicator className="mr-2"/>
                                Accordion Card #2
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className='h6'>
                                <Accordion.Indicator className="mr-2"/>
                                Accordion Card #3
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Right Icon
                            <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>

                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header className="d-flex h6">
                                <span>Accordion Card #1</span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="d-flex h6">
                                <span>Accordion Card #1</span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="d-flex h6">
                                <span>Accordion Card #1</span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Right & Left Icon
                            <span className="small ml-1 text-muted">
                                #1.05
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header className="d-flex align-items-center h6">
                                <span>
                                    <i className="fa fa-fw fa-bookmark-o mr-2"></i>
                                    Accordion Card #1
                                </span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="d-flex align-items-center h6">
                                <span>
                                    <i className="fa fa-fw fa-clone mr-2"></i>
                                    Accordion Card #2
                                </span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="d-flex align-items-center h6">
                                <span>
                                    <i className="fa fa-fw fa-copy mr-2"></i>
                                    Accordion Card #3
                                </span>
                                <Accordion.Indicator className="ml-auto"/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Accordions Styling"
                        className="mt-5"
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Colors Borders
                            <span className="small ml-1 text-muted">
                                #2.01
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>

                        <Accordion className="mb-2 b-primary" initialOpen>
                            <Accordion.Header className="text-primary">
                                Primary Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="text-success">
                                Success Card #2
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header className="text-danger">
                                Danger Card #3
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Colors Backgrounds
                            <span className="small ml-1 text-muted">
                                #2.02
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2 bg-primary text-white" initialOpen>
                            <Accordion.Header className="text-white">
                                Primary Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2 bg-success text-white">
                            <Accordion.Header className="text-white">
                                Success Card #2
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2 bg-danger text-white">
                            <Accordion.Header className="text-white">
                                Danger Card #3
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card White Background
                            <span className="small ml-1 text-muted">
                                #2.03
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Accordion className="mb-2" initialOpen>
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>

                        <Accordion className="mb-2">
                            <Accordion.Header>
                                Accordion Card #1
                            </Accordion.Header>
                            <Accordion.Body>
                                <CardText>
                                    { faker.lorem.paragraph() }
                                </CardText>
                            </Accordion.Body>
                        </Accordion>
                    </div>
                    { /* END Example */}
                </Col>
            </Row>
            { /* END Section 2 */}
        </Container>
    </React.Fragment>
);

export default Accordions;
