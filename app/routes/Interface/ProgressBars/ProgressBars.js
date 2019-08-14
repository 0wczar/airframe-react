import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Progress,
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const ProgressBars = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Progress Bars"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Progress Bars Colors" 
                        subTitle={(
                            <React.Fragment>
                                Basic button layout options.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Primary
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default progress styling. Use 
                                <code> &lt;Progress value={'{'}2 * 5{'}'}/&gt;</code>
                            </p>
                            <Progress value={2 * 5} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Success
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="success" value={'{'}50{'}'}/&gt;</code>
                            </p>
                            <Progress color="success" value={50} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Info
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="info" value={'{'}60{'}'}/&gt;</code>
                            </p>
                            <Progress color="info" value={60} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Warning
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="warning" value={'{'}70{'}'}/&gt;</code>
                            </p>
                            <Progress color="warning" value={70} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Danger
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="danger" value={'{'}80{'}'}/&gt;</code>
                            </p>
                            <Progress color="danger" value={80} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Dark
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="dark" value={'{'}20{'}'}/&gt;</code>
                            </p>
                            <Progress color="dark" value={20} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 2 */}
                { /* START Col4 3 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Secondary
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="secondary" value={'{'}30{'}'}/&gt;</code>
                            </p>
                            <Progress color="secondary" value={30} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Custom Color
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="purple" value={'{'}40{'}'}/&gt;</code>
                            </p>
                            <Progress color="purple" value={40} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Social Colors
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress color="facebook" value={'{'}60{'}'}/&gt;</code>
                            </p>
                            <Progress color="facebook" value={60} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 3 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Progress Bars Heights"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Basic button layout options.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Default
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default progress styling. Use 
                                <code> &lt;Progress value={'{'}3 * 5{'}'}/&gt;</code>
                            </p>
                            <Progress value={3 * 5} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: 5px
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress value={'{'}50{'}'} style={'{'}{'{'}height: "5px"{'}'}{'}'}/&gt;</code>
                            </p>
                            <Progress value={2 * 5} style={{height: "5px"}} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: 3px
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress value={'{'}60{'}'} style={'{'}{'{'}height: "3px"{'}'}{'}'}/&gt;</code>
                            </p>
                            <Progress value={60} style={{height: "3px"}} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: 1px
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress value={'{'}30{'}'} style={'{'}{'{'}height: "1px"{'}'}{'}'}/&gt;</code>
                            </p>
                            <Progress value={30} style={{height: "1px"}} />
                        </CardBody>
                    </Card>
                    
                </Col>
                { /* END Col4 2 */}
                { /* START Col4 3 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: 4px
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress value={'{'}70{'}'} style={'{'}{'{'}height: "4px"{'}'}{'}'}/&gt;</code>
                            </p>
                            <Progress value={70} style={{height: "4px"}} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: 2px
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Color progress styling. Use 
                                <code> &lt;Progress value={'{'}40{'}'} style={'{'}{'{'}height: "2px"{'}'}{'}'}/&gt;</code>
                            </p>
                            <Progress value={40} style={{height: "2px"}} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 3 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Progress Bars Options"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Basic button layout options.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Label
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use 
                                <code> &lt;Progress value={'{'}25{'}'}&gt;25%&lt;Progress&gt;</code>
                            </p>
                            <Progress value="25">25%</Progress>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Label Icon
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use 
                                <code> &lt;Progress value={'{'}25{'}'}&gt;&lt;i className="fa fa-twitter"&gt;&lt;/i&gt;&lt;Progress&gt;</code>
                            </p>
                            <Progress value="55" color="twitter">
                                    <i className="fa fa-twitter"></i>
                            </Progress>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Multiple Bars
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use 
                                <code> &lt;Progress multi &gt;&lt;Progress bar value="15" /&gt;&lt;/Progress&gt;
                                </code>
                            </p>
                            <Progress multi>
                                <Progress bar value="15" />
                                <Progress bar color="success" value="30" />
                                <Progress bar color="info" value="25" />
                            </Progress>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Striped
                                <span className="small ml-1 text-muted">
                                    #3.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use <code>&lt;Progress striped value={'{'}45{'}'} /&gt;</code>
                            </p>
                            <Progress striped value={45} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Animated Striped
                                <span className="small ml-1 text-muted">
                                    #3.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use <code>&lt;Progress animated striped value={'{'}45{'}'} /&gt;</code>
                            </p>
                            <Progress animated striped value={45} />
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Square Rounds
                                <span className="small ml-1 text-muted">
                                    #3.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use <code>&lt;Progress value={'{'}25{'}'} /&gt;</code>
                            </p>
                            <Progress value={25} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 2 */}
                { /* START Col4 3 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Full Rounds
                                <span className="small ml-1 text-muted">
                                    #3.07
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Custom progress styling. Use <code>&lt;Progress value={'{'}15{'}'} /&gt;</code>
                            </p>
                            <Progress value={15} />
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 3 */}
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Progress Bars Layouts"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Below are often used UI cases in applications.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Details Below
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                A combined example that is often used in UI/UX.
                            </p>
                            <Progress value="25" className="mb-2">25%</Progress>
                            <div className="d-flex">
                                <p>Your Computer:</p>
                                <p className="ml-auto text-inverse">
                                    6GB/12GB
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Details Above
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                A combined example that is often used in UI/UX.
                            </p>
                            <div className="d-flex mb-0">
                                <p>Your Disk:</p>
                                <p className="ml-auto text-inverse">
                                    4125GB
                                </p>
                            </div>
                            <Progress value="95" color="danger" className="mt-0">95%</Progress>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 2 */}
                { /* START Col4 3 */}
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Progress Bars: Details Inline
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                A combined example that is often used in UI/UX.
                            </p>
                            <div className="d-flex justify-content-between">
                                <span className="d-flex align-items-center mr-2">HDD</span>
                                <Progress value="55" color="success" className="mt-1 w-100">55%</Progress>
                                <span className="ml-2 text-inverse">34GB</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 3 */}
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default ProgressBars;
