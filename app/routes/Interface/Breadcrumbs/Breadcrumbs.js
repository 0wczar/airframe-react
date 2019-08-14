import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Breadcrumb, 
    BreadcrumbItem,
    CardTitle,
} from './../../../components'
import { HeaderMain } from "../../components/HeaderMain";
import {
    HeaderDemo
} from "../../components/HeaderDemo";

export const Breadcrumbs = () => (
    <Container>
        <HeaderMain 
            title="Breadcrumbs"
            className="mb-5 mt-4"
        />
        { /* START Header 1 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={1} 
                    title="Breadcrumbs Defaults" 
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
           { /* START Col6 1 */}
            <Col lg={ 6 }>
                { /* START Card Breadcrumb */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Breadcrumb: Default
                            <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </CardTitle>
                        <Breadcrumb>
                            <BreadcrumbItem active>
                                Home
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </CardBody>
                </Card>
                { /* START Card Breadcrumb */}
            </Col>
            { /* END Col6 1 */}
           { /* START Col6 1 */}
            <Col lg={ 6 }>
                { /* START Card Breadcrumb */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Breadcrumb: Default
                            <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </CardTitle>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="#">Home</a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Library
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </CardBody>
                </Card>
                { /* START Card Breadcrumb */}
            </Col>
            { /* END Col6 1 */}
           { /* START Col6 1 */}
            <Col lg={ 6 }>
                { /* START Card Breadcrumb */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Breadcrumb: Default
                            <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </CardTitle>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="#">Home</a>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <a href="#">Library</a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Data
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </CardBody>
                </Card>
                { /* START Card Breadcrumb */}
            </Col>
            { /* END Col6 1 */}
        </Row>
        { /* START Section 1 */}

    </Container>
);

export default Breadcrumbs;