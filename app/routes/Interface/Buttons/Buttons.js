import React from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardTitle,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardText
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

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

const Buttons = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Buttons"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Buttons Colors" 
                        subTitle="Available panel styles and colors"
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
                                Button: Primary
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="primary"&gt;Primary&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="primary">Primary Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Secondary
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="secondary"&gt;Secondary&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="secondary">Secondary Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Success
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="success"&gt;Success&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="success">Success Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Warning
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="warning"&gt;Warning&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="warning">Warning Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Danger
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="danger"&gt;Danger&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="danger">Danger Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Info
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="info"&gt;Info&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="info">Info Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Light
                                <span className="small ml-1 text-muted">
                                    #1.07
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="light"&gt;Light&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="light">Warning Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dark
                                <span className="small ml-1 text-muted">
                                    #1.08
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="dark"&gt;Dark&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="dark">Dark Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Custom (Purple)
                                <span className="small ml-1 text-muted">
                                    #1.09
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="purple"&gt;Purple&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="purple">Custom Button</Button>{' '}
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
                        title="Buttons Social Colors" 
                        className="mt-5"
                        subTitle="Often the colors used in applications with social networking sites."
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
                                Button: Facebook
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="facebook"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-facebook mr-2"></i>
                                Facebook Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Twitter
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="twitter"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-twitter mr-2"></i>
                                Twitter Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: LastFM
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="lastfm"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="lastfm">
                                <i className="fa fa-lastfm mr-2"></i>
                                LastFM Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Pinterest
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="pinterest"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="pinterest">
                                <i className="fa fa-pinterest mr-2"></i>
                                Pinterest Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Linkedin
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="linkedin"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="linkedin">
                                <i className="fa fa-linkedin mr-2"></i>
                                Linkedin Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Medium
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="medium"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="medium">
                                <i className="fa fa-medium mr-2"></i>
                                Medium Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Android
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="android"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="android">
                                <i className="fa fa-android mr-2"></i>
                                Android Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Spotify
                                <span className="small ml-1 text-muted">
                                    #2.08
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="spotify"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="spotify">
                                <i className="fa fa-spotify mr-2"></i>
                                Spotify Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Foursquare
                                <span className="small ml-1 text-muted">
                                    #2.09
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="foursquare"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="foursquare">
                                <i className="fa fa-foursquare mr-2"></i>
                                Foursquare Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Skype
                                <span className="small ml-1 text-muted">
                                    #2.10
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="skype"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="skype">
                                <i className="fa fa-skype mr-2"></i>
                                Skype Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Youtube
                                <span className="small ml-1 text-muted">
                                    #2.11
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="youtube"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="youtube">
                                <i className="fa fa-play mr-2"></i>
                                Youtube Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Windows
                                <span className="small ml-1 text-muted">
                                    #2.12
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="windows"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="windows">
                                <i className="fa fa-windows mr-2"></i>
                                Windows Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Amazon
                                <span className="small ml-1 text-muted">
                                    #2.13
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="amazon"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="amazon">
                                <i className="fa fa-amazon mr-2"></i>
                                Amazon Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Buttons Layouts" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
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
                                Button: Outline
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p>
                                Outline button, example:  
                                <code>
                                    &lt;Button outline color="secondary"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button outline color="secondary">
                                Outline Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p>
                                Available in both directions, example:  
                                <code>&lt;Button outline color="secondary"&gt;&lt;i className="fa fa-home mr-2" /&gt;&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-home mr-2"></i>
                                With Icon Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p>
                                Below example:
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" caret>
                                    Default Button
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Default
                                <span className="small ml-1 text-muted">
                                    #3.04
                                </span>
                            </CardTitle>
                            <p>
                                Button with Contextual Colors
                            </p>
                             <Button color="secondary">
                                Default Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.05
                                </span>
                            </CardTitle>
                            <p>
                                Button with Contextual Colors
                            </p>
                            <Button color="secondary">
                                <i className="fa fa-gear mr-2"></i>
                                With Icon
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.06
                                </span>
                            </CardTitle>
                            <p>
                                Colored button with dropdown
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="primary" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded
                                <span className="small ml-1 text-muted">
                                    #3.07
                                </span>
                            </CardTitle>
                            <p>
                                Works with all button types
                            </p>
                             <Button outline color="secondary">
                                Rounded Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                   <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.08
                                </span>
                            </CardTitle>
                            <p>
                                Available in both directions
                            </p>
                            <Button color="secondary">
                                <i className="fa fa-gear mr-2"></i>
                                With Icon
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline Rounded Drodpown
                                <span className="small ml-1 text-muted">
                                    #3.09
                                </span>
                            </CardTitle>
                            <p>
                                Rounded button with dropdown
                            </p>
                             <Button outline color="secondary">
                                Default Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Link
                                <span className="small ml-1 text-muted">
                                    #3.10
                                </span>
                            </CardTitle>
                            <p>
                                Button as Link
                                <code>
                                    &lt;Button outline color="link"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="link">
                                Linked Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Link Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.11
                                </span>
                            </CardTitle>
                            <p>
                                 Button as Link with Icon
                            </p>
                            <Button color="link">
                                <i className="fa fa-gear mr-2"></i>
                                With Icon
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Link Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.12
                                </span>
                            </CardTitle>
                            <p>
                                Colored button with dropdown
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="link" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline Icon Alone
                                <span className="small ml-1 text-muted">
                                    #3.13
                                </span>
                            </CardTitle>
                            <p>
                                Button with a single icon only
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-fw fa-bars"></i>
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Outline Icon Alone
                                <span className="small ml-1 text-muted">
                                    #3.14
                                </span>
                            </CardTitle>
                            <p>
                                Button with a single icon only
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-fw fa-bars"></i>
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline Icon Alone Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.15
                                </span>
                            </CardTitle>
                            <p>
                                Icon button with dropdown
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    <i className="fa fa-fw fa-bars"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Icon Alone
                                <span className="small ml-1 text-muted">
                                    #3.13
                                </span>
                            </CardTitle>
                            <p>
                                Button with a single icon only
                            </p>
                            <Button color="secondary">
                                <i className="fa fa-fw fa-bars"></i>
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Icon Alone Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.17
                                </span>
                            </CardTitle>
                            <p>
                                Works with all button types
                            </p>
                            <Button color="secondary">
                                <i className="fa fa-fw fa-bars"></i>
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Icon Alone Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.18
                                </span>
                            </CardTitle>
                            <p>
                                Icon button with dropdown
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" caret>
                                    <i className="fa fa-fw fa-bars"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Icons Only Small & Default
                                <span className="small ml-1 text-muted">
                                    #3.19
                                </span>
                            </CardTitle>
                            <p>
                                Floating action button example
                            </p>
                            <div className="d-flex">
                                <Button color="secondary" outline size="sm" className="mr-2 align-self-center">
                                    <i className="fa fa-fw fa-caret-left"></i>
                                </Button>
                                <Button color="secondary" size="lg" className="mr-2 align-self-center">
                                    <i className="fa fa-fw fa-check"></i>
                                </Button>
                                <Button color="secondary" outline size="sm" className="mr-2 align-self-center">
                                    <i className="fa fa-fw fa-caret-right"></i>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Icons Above Text
                                <span className="small ml-1 text-muted">
                                    #3.20
                                </span>
                            </CardTitle>
                            <p>
                                Float buttons with text and icons
                            </p>
                            <div className="d-flex">
                                <Button color="secondary" outline size="sm" className="mr-2 align-self-center text-center">
                                    <i className="fa fa-fw fa-caret-left"></i>
                                    <div>Prev</div>
                                </Button>
                                <Button color="secondary" size="lg" className="mr-2 align-self-center text-center">
                                    <i className="fa fa-fw fa-check"></i>
                                    <div>Confirm</div>
                                </Button>
                                <Button color="secondary" outline size="sm" className="mr-2 align-self-center">
                                    <i className="fa fa-fw fa-caret-right"></i>
                                    <div>Next</div>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Buttons Styling" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
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
                                Buttons: Large, Default and Small
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p>
                                Button with a single icon only
                            </p>
                            <Button color="primary" size="lg" className="mb-2">
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Large Button
                            </Button>{' '}
                            <br />
                            <Button color="secondary" className="mb-2">
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Default Button
                            </Button>{' '}
                            <br />
                            <Button color="secondary" outline>
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Small Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Buttons: Rounded
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p>
                                Available styling of <code>.r-30</code> button
                            </p>
                            <Button color="primary" size="lg" className="mb-2">
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Large Button
                            </Button>{' '}
                            <br />
                            <Button color="secondary" className="mb-2">
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Default Button
                            </Button>{' '}
                            <br />
                            <Button color="secondary" outline>
                                <i className="fa fa-folder-open-o mr-2"></i>
                                Small Button
                            </Button>{' '}
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Buttons States" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
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
                                Button: Default State
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                            </p>
                            <Button color="primary">
                                Default Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Default State
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p>
                                Active button, just add: <code>active</code> to 
                                <code>&lt;Button /&gt;</code>.
                            </p>
                            <Button color="primary" active>
                                Active Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Disabled State
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p>
                                Active button, just add: <code>disabled</code> to 
                                <code>&lt;Button /&gt;</code>.
                            </p>
                            <Button color="primary" active>
                                Disabled Button
                            </Button>{' '}
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
                        title="Buttons Icons Positions" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
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
                                Button: Left Icon
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p>
                                Display icon on the left side
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-envelope-o mr-2"></i>
                                Left Position
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Right Icon
                                <span className="small ml-1 text-muted">
                                    #6.02
                                </span>
                            </CardTitle>
                            <p>
                                Display icon on the right side
                            </p>
                            <Button outline color="secondary">
                                Right Position
                                <i className="fa fa-envelope-o ml-2"></i>
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Right Icon Dropdown
                                <span className="small ml-1 text-muted">
                                    #6.03
                                </span>
                            </CardTitle>
                            <p>
                                Additional option for right icon
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    Dropdown <i className="fa fa-fw fa-envelope-o mx-1"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Left Icon Dropdown
                                <span className="small ml-1 text-muted">
                                    #6.04
                                </span>
                            </CardTitle>
                            <p>
                                Additional option for left icon
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    <i className="fa fa-fw fa-envelope-o"></i> Dropdown 
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
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
                        title="Buttons Dropdowns" 
                        className="mt-5"
                        subTitle="Dropdown menus attached to buttons."
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
                                Button: Dropup
                                <span className="small ml-1 text-muted">
                                    #7.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic button dropup example
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown direction="up">
                                <DropdownToggle color="secondary" outline caret>
                                    Dropup
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Left Icon Dropdown
                                <span className="small ml-1 text-muted">
                                    #7.02
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown button with icon
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    <i className="fa fa-fw fa-user mr-1"></i>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Group Dropdown
                                <span className="small ml-1 text-muted">
                                    #7.03
                                </span>
                            </CardTitle>
                            <p>
                                Segmented button dropdown
                            </p>
                            { /* START Button Group Dropdown */}
                            <ButtonGroup>
                                <Button outline>Segmented</Button>
                                <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret />
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            { /* END Button Group Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Dropup
                                <span className="small ml-1 text-muted">
                                    #7.03
                                </span>
                            </CardTitle>
                            <p>
                                Dropup attached to <code>.r-30</code> button
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown direction="up">
                                <DropdownToggle color="secondary" outline caret>
                                    Dropup
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>        
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Dropdown
                                <span className="small ml-1 text-muted">
                                    #7.05
                                </span>
                            </CardTitle>
                            <p>
                                Rouned button menu with icon
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Rounded Group Dropdown
                                <span className="small ml-1 text-muted">
                                    #7.06
                                </span>
                            </CardTitle>
                            <p>
                                Rounded button with segments
                            </p>
                            { /* START Button Group Dropdown */}
                            <ButtonGroup>
                                <Button outline>Segmented</Button>
                                <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret />
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            { /* END Button Group Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Icon Alone Dropup
                                <span className="small ml-1 text-muted">
                                    #7.07
                                </span>
                            </CardTitle>
                            <p>
                                Dropup attached to icon button
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown direction="up">
                                <DropdownToggle color="secondary" outline caret>
                                    <i className="fa fa-fw fa-gear"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Group Icon Alone Dropup
                                <span className="small ml-1 text-muted">
                                    #7.08
                                </span>
                            </CardTitle>
                            <p>
                                Segmented button dropdown
                            </p>
                            { /* START Button Group Dropdown */}
                            <ButtonGroup>
                                <Button outline>
                                    <i className="fa fa-fw fa-gear"></i>
                                </Button>
                                <UncontrolledButtonDropdown direction="up">
                                    <DropdownToggle color="secondary" outline caret />
                                    <DropdownMenu right>
                                        <DropdownItem header>
                                            Your Options
                                        </DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-folder-open mr-2"></i>
                                            View
                                        </DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-ticket mr-2"></i>
                                            Add Task
                                        </DropdownItem>
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-paperclip mr-2"></i>
                                            Add Files
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-trash mr-2"></i>
                                            Delete
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            { /* END Button Group Dropdown */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Group Icon Alone Dropdown
                                <span className="small ml-1 text-muted">
                                    #7.09
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown in segmented icon button
                            </p>
                            { /* START Button Group Dropdown */}
                            <ButtonGroup>
                                <Button outline>
                                    <i className="fa fa-fw fa-gear"></i>
                                </Button>
                                <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret />
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            { /* END Button Group Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropright
                                <span className="small ml-1 text-muted">
                                    #7.10
                                </span>
                            </CardTitle>
                            <p>
                                Basic button dropright example
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown direction="right">
                                <DropdownToggle color="secondary" outline caret>
                                    Dropright
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropleft
                                <span className="small ml-1 text-muted">
                                    #7.11
                                </span>
                            </CardTitle>
                            <p>
                                Basic button dropright example
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown direction="left">
                                <DropdownToggle color="secondary" outline caret>
                                    Dropleft
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropdown Menu Right
                                <span className="small ml-1 text-muted">
                                    #7.12
                                </span>
                            </CardTitle>
                            <p>
                                Basic button dropleft example
                            </p>
                            { /* START Button Dropdown */}
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
                                    Dropdown Menu Right
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>
                                        Your Options
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-folder-open mr-2"></i>
                                        View
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-ticket mr-2"></i>
                                        Add Task
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-paperclip mr-2"></i>
                                        Add Files
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-trash mr-2"></i>
                                        Delete
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            { /* END Button Dropdown */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 7 */}

            { /* START Header 8 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={8} 
                        title="Buttons Options" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
                    />
                </Col>
            </Row>
            { /* END Header 8 */}
            { /* START Section 8 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline
                                <span className="small ml-1 text-muted">
                                    #8.01
                                </span>
                            </CardTitle>
                            <p>
                                Default Button Group, example:  
                                <code>
                                &lt;ButtonGroup&gt;&lt;Button outline color="secondary"&gt;...&lt;/Button&gt;&lt;/ButtonGroup&gt;
                                </code>
                            </p>
                            <ButtonGroup>
                                <Button outline color="secondary">Left</Button>
                                <Button outline color="secondary">Middle</Button>
                                <Button outline color="secondary">Right</Button>
                            </ButtonGroup>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Toolbar
                                <span className="small ml-1 text-muted">
                                    #8.02
                                </span>
                            </CardTitle>
                            <p>
                                Example:   
                                <code>
                                &lt;ButtonToolbar&gt;&lt;ButtonGroup&gt;&lt;Button outline color="secondary"&gt;...&lt;/Button&gt;&lt;/ButtonGroup&gt;&lt;/ButtonToolbar&gt;
                                </code>
                            </p>
                            <ButtonToolbar>
                                <ButtonGroup className="mr-2">
                                    <Button outline color="secondary">1</Button>
                                    <Button outline color="secondary">2</Button>
                                    <Button outline color="secondary">3</Button>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button outline color="secondary">3</Button>
                                    <Button outline color="secondary">4</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button outline color="secondary">5</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Checkboxes
                                <span className="small ml-1 text-muted">
                                    #8.03
                                </span>
                            </CardTitle>
                            <p>
                                Bootstrap <code>checkbox</code> button group
                            </p>
                            <i>TO-DO...</i>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Radios
                                <span className="small ml-1 text-muted">
                                    #8.04
                                </span>
                            </CardTitle>
                            <p>
                                Bootstrap <code>radio</code> button group
                            </p>
                            <i>TO-DO...</i>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Toogle States
                                <span className="small ml-1 text-muted">
                                    #8.05
                                </span>
                            </CardTitle>
                            <p>
                                Using <code>data-toggle="button"</code>
                            </p>
                            <i>TO-DO...</i>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Block
                                <span className="small ml-1 text-muted">
                                    #8.06
                                </span>
                            </CardTitle>
                            <p>
                                Just add <code>block</code>.
                            </p>
                            <Button outline color="secondary" block>
                                Block Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Nesting
                                <span className="small ml-1 text-muted">
                                    #8.07
                                </span>
                            </CardTitle>
                            <p>
                                Below example
                            </p>
                            <i>TO-DO...</i>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Checked Single
                                <span className="small ml-1 text-muted">
                                    #8.08
                                </span>
                            </CardTitle>
                            <p>
                                Below example
                            </p>
                            <i>TO-DO...</i>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 8 */}
        </Container>
    </React.Fragment>
);

export default Buttons;