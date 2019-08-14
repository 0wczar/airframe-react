import React from 'react';

import { 
    Avatar,
    AvatarAddOn,
    Row,
    Container,
    Col,
    Card,
    CardBody,
    CardTitle,
} from './../../../components';
import { randomAvatar } from './../../../utilities';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Home = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Avatars"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Avatars Sizes" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Large
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Default
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Small
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
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
                        title="Avatars Types" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Photos
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                             <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-2"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Text
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                size="lg"
                                bgColor="primary"
                                className="mr-2"
                            >
                                VN
                            </Avatar.Font>
                            <Avatar.Font
                                size="md"
                                bgColor="info"
                                className="mr-2"
                            >
                                FS
                            </Avatar.Font>
                            <Avatar.Font
                                size="sm"
                                bgColor="secondary"
                                className="mr-2"
                            >
                                +4
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Icons
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                size="lg"
                                bgColor="200"
                                className="mr-2"
                                >
                                <i className="fa fa-user" />
                            </Avatar.Font>
                            <Avatar.Font 
                                size="md"
                                bgColor="200"
                                className="mr-2"
                                >
                                <i className="fa fa-plus" />
                            </Avatar.Font>
                            <Avatar.Font 
                                size="sm"
                                bgColor="200"
                                className="mr-2"
                                >
                                <i className="fa fa-bars" />
                            </Avatar.Font>
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
                        title="Avatars Status" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Large
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Default
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Small
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
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
                        title="Avatars Badges Pills" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Small
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Default
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Small
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
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
                        title="Avatars Badges" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Small
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Default
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Small
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
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
                        title="Avatars Icons" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 6 */}
            { /* START Section 6 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Custom Icons Large
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="facebook"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-facebook"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="twitter"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-twitter"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="linkedin"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-linkedin"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-plus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-minus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Custom Icons Default
                                <span className="small ml-1 text-muted">
                                    #6.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="facebook"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-facebook"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="twitter"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-twitter"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="linkedin"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-linkedin"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-plus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-minus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Custom Icons Small
                                <span className="small ml-1 text-muted">
                                    #6.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="facebook"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-facebook"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="twitter"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-twitter"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="linkedin"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-linkedin"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="success"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-plus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-white-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-minus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}

            { /* START Header 7 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={7} 
                        title="Avatars Colors" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 7 */}
            { /* START Section 7 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Colors Default
                                <span className="small ml-1 text-muted">
                                    #7.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                bgColor="primary"
                                className="mr-1"
                            >
                                PR
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="info"
                                className="mr-1"
                            >
                                IN
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="success"
                                className="mr-1"
                            >
                                SU
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="warning"
                                className="mr-1"
                            >
                                WA
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="danger"
                                className="mr-1"
                            >
                                DA
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="secondary"
                                className="mr-1"
                            >
                                SE
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="dark"
                                className="mr-1"
                            >
                                DA
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="light"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                LI
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="white"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                WH
                            </Avatar.Font>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Gray Colors
                                <span className="small ml-1 text-muted">
                                    #7.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                bgColor="100"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                100
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="200"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                200
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="300"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                300
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="400"
                                fgColor="secondary"
                                className="mr-1"
                            >
                                400
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="500"
                                fgColor="dark"
                                className="mr-1"
                            >
                                500
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="600"
                                fgColor="white"
                                className="mr-1"
                            >
                                600
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="700"
                                fgColor="white"
                                className="mr-1"
                            >
                                700
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="800"
                                fgColor="white"
                                className="mr-1"
                            >
                                800
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="900"
                                fgColor="white"
                                className="mr-1"
                            >
                                900
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Other Colors 
                                <span className="small ml-1 text-muted">
                                    #7.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                bgColor="indigo"
                                className="mr-1"
                            >
                                IN
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="purple"
                                className="mr-1"
                            >
                                PU
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="pink"
                                className="mr-1"
                            >
                                PI
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="teal"
                                className="mr-1"
                            >
                                TE
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="cyan"
                                className="mr-1"
                            >
                                CY
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Colors Social
                                <span className="small ml-1 text-muted">
                                    #7.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font 
                                bgColor="facebook"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-facebook" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="twitter"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-twitter" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="lastfm"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-lastfm" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="pinterest"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-pinterest" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="linkedin"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-linkedin" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="medium"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-medium" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="skype"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-skype" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="foursquare"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-foursquare" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="android"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-android" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="spotify"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-spotify" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="paypal"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-paypal" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="dribbble"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-dribbble" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="youtube"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-youtube" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="windows"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-windows" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="amazon"
                                fgColor="white"
                                className="mr-1"
                                >
                                <i className="fa fa-amazon" />
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 7 */}
        </Container>
    </React.Fragment>
);

export default Home;
