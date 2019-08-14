import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Typography = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Typography"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Colors" 
                        subTitle={(
                            <React.Fragment>
                                Convey meaning through color with a 
                                handful of color utility classes. 
                                Includes support for styling links 
                                with hover states, too.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Defaults Colors
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use any of these color variables as they 
                                are or reassign them to more meaningful 
                                variables for your project.
                            </p>
                            <div>
                                <p className="text-secondary">This is an example for <code>.text-secondary</code>
                                </p>
                                <p className="text-success">
                                    This is an example for <code>.text-success</code>
                                </p>
                                <p className="text-danger">
                                    This is an example for <code>.text-danger</code>
                                </p>
                                <p className="text-warning">
                                    This is an example for <code>.text-warning</code>
                                </p>
                                <p className="text-info">
                                    This is an example for <code>.text-info</code>
                                </p>

                                <p className="text-body">
                                    This is an example for <code>.text-body </code>
                                </p>
                                <p className="text-muted">
                                    This is an example for <code>.text-muted</code>
                                </p>
                                <p className="text-dark p-2 bg-gray-500">
                                    This is an example for <code>.text-dark</code>
                                </p>
                                <p className="text-black-50 p-2 bg-gray-500">
                                    This is an example for <code>.text-black-50</code>
                                </p>
                                <p className="text-white p-2 bg-dark">
                                    This is an example for <code>.text-white</code>
                                </p>
                                <p className="text-light p-2 bg-dark">
                                    This is an example for <code>.text-light</code>
                                </p>
                                <p className="text-white-50 p-2 bg-dark">
                                    This is an example for <code>.text-white-50</code>
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Social Colors
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Colors are often used for social media.
                            </p>
                            <div>
                                <p className="text-facebook">
                                    <i className="fa fa-fw fa-facebook mr-1"></i>
                                    This is an example for <code>.text-facebook</code>
                                </p>
                                <p className="text-twitter">
                                    <i className="fa fa-fw fa-twitter mr-1"></i>
                                    This is an example for <code>.text-twitter</code>
                                </p>
                                <p className="text-lastfm">
                                    <i className="fa fa-fw fa-lastfm mr-1"></i>
                                    This is an example for <code>.text-lastfm</code>
                                </p>
                                <p className="text-pinterest">
                                    <i className="fa fa-fw fa-pinterest mr-1"></i>
                                    This is an example for <code>.text-pinterest</code>
                                </p>
                                <p className="text-linkedin">
                                    <i className="fa fa-fw fa-linkedin mr-1"></i>
                                    This is an example for <code>.text-linkedin</code>
                                </p>
                                <p className="text-medium">
                                    <i className="fa fa-fw fa-medium mr-1"></i>
                                    This is an example for <code>.text-medium</code>
                                </p>
                                <p className="text-skype">
                                    <i className="fa fa-fw fa-skype mr-1"></i>
                                    This is an example for <code>.text-skype</code>
                                </p>
                                <p className="text-foursquare">
                                    <i className="fa fa-fw fa-foursquare mr-1"></i>
                                    This is an example for <code>.text-foursquare</code>
                                </p>
                                <p className="text-android">
                                    <i className="fa fa-fw fa-android mr-1"></i>
                                    This is an example for 
                                    <code>.text-android</code>
                                </p>
                                <p className="text-spotify">
                                    <i className="fa fa-fw fa-spotify mr-1"></i>
                                    This is an example for <code>.text-spotify</code>
                                </p>
                                <p className="text-youtube">
                                    <i className="fa fa-fw fa-youtube mr-1"></i>
                                    This is an example for <code>.text-youtube</code>
                                </p>
                                <p className="text-windows">
                                    <i className="fa fa-fw fa-windows mr-1"></i>
                                    This is an example for <code>.text-windows</code>
                                </p>
                                <p className="text-amazon">
                                    <i className="fa fa-fw fa-amazon mr-1"></i>
                                    This is an example for <code>.text-amazon</code>
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Grays
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Grayscale colors provide quick access to 
                                commonly used shades of black while semantic 
                                include various colors assigned to meaningful 
                                contextual values.
                            </p>
                            <div>
                                <p className="text-gray-100 p-2 bg-dark">
                                    This is an example for <code>.text-gray-100</code>
                                </p>
                                <p className="text-gray-200 p-2 bg-dark">
                                    This is an example for <code>.text-gray-200</code>
                                </p>
                                <p className="text-gray-300 p-2 bg-dark">
                                    This is an example for <code>.text-gray-300</code>
                                </p>
                                <p className="text-gray-400 p-2 bg-dark">
                                    This is an example for <code>.text-gray-400</code>
                                </p>
                                <p className="text-gray-500 p-2 bg-dark">
                                    This is an example for 
                                    <code>.text-gray-500</code>
                                </p>
                                <p className="text-gray-600 p-2 bg-gray-100">
                                    This is an example for <code>.text-gray-600</code>
                                </p>
                                <p className="text-gray-700 p-2 bg-gray-100">
                                    This is an example for <code>.text-gray-700</code>
                                </p>
                                <p className="text-gray-800 p-2 bg-gray-100">
                                    This is an example for <code>.text-gray-800</code>
                                </p>
                                <p className="text-gray-900 p-2">
                                    This is an example for <code>.text-gray-900</code>
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Social Colors
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Colors are often used for social media.
                            </p>
                            <div>
                                <p>
                                    This is an example <a href="#" className="text-primary">Primary Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-secondary">Secondary Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-success">Success Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-danger">Danger Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-warning">Warning Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-info">Info Link</a>
                                </p>
                                <p>
                                    This is an example <a href="#" className="text-dark">Dark Link</a>
                                </p>
                                <p>
                                    <a href="#" className="text-light bg-dark">Light Link</a>
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Headings"
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                All HTML headings, <code>&lt;h1&gt;</code> 
                                through <code>&lt;h6&gt;</code>, are available.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Light
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Just add class/helper <code>.fw-300</code> to <code>&lt;h1&gt;</code> 
                                - <code>&lt;h6&gt;</code>.
                            </p>
                            <div>
                                <h1 className="mb-2 fw-300">
                                    h1. Light Heading
                                </h1>
                                <h2 className="fw-300">
                                    h2. Light Heading
                                </h2>
                                <h3 className="fw-300">
                                    h3. Light Heading
                                </h3>
                                <h4 className="fw-300">
                                    h4. Light Heading
                                </h4>
                                <h5 className="fw-300">
                                    h5. Light Heading
                                </h5>
                                <h6 className="fw-300">
                                    h6. Light Heading
                                </h6>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Displays
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Traditional heading elements are designed 
                                to work best in the meat of your page content. 
                                When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.
                            </p>
                            <div>
                                <h1 className="display-1">Display 1</h1>
                                <h1 className="display-2">Display 2</h1>
                                <h1 className="display-3">Display 3</h1>
                                <h1 className="display-4">Display 4</h1>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Regular
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                In the case of Regular is from set as default in <code>.scss</code>.
                            </p>
                            <div>
                                <h1 className="mb-0">
                                    h1. Regular Heading
                                </h1>
                                <h2>
                                    h2. Regular Heading
                                </h2>
                                <h3>
                                    h3. Regular Heading
                                </h3>
                                <h4>
                                    h4. Regular Heading
                                </h4>
                                <h5>
                                    h5. Regular Heading
                                </h5>
                                <h6>
                                    h6. Regular Heading
                                </h6>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Customizing
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use the included utility classes to recreate the small secondary 
                                heading text from Bootstrap 4
                            </p>
                            <div>
                                <h1 className="mb-0">
                                    h1. Custom 
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h1>
                                <h2>
                                    h2. Custom
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h2>
                                <h3>
                                    h3. Custom
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h3>
                                <h4>
                                    h4. Custom
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h4>
                                <h5>
                                    h5. Custom
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h5>
                                <h6>
                                    h6. Custom
                                    <small className="text-muted">
                                        with Small Text
                                    </small>
                                </h6>
                            </div>
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
                        title="Text" 
                        className="mt-5"
                        subTitle="Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Justify
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                               Just add class <code>.text-justify</code>.
                            </p>
                            <p className="card-text text-justify">
                                Ambitioni dedisse scripsisse iudicaretur. 
                                Cras mattis iudicium purus sit amet fermentum. 
                                Donec sed odio operae, eu vulputate felis rhoncus. 
                                Praeterea iter est quasdam res quas ex communi. 
                                At nos hinc posthac, sitientis piros Afros. 
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. 
                                Cras mattis iudicium purus sit amet fermentum.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: No Wrap
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                               Prevent text from wrapping with a <code>.text-nowrap</code> class.
                            </p>
                            <div className="text-nowrap" style={{ width: '8rem' }}>
                                This text should overflow the parent.
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Transform
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Transform text in components with text capitalization classes.
                            </p>
                            <p className="text-lowercase">
                                Lowercased text.
                            </p>
                            <p className="text-uppercase">
                                Uppercased text.
                            </p>
                            <p className="text-capitalize">
                                CapiTaliZed text.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Monospace
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Change a selection to our monospace font stack with <code>.text-monospace</code>.
                            </p>
                            <p className="text-monospace">
                                This is in monospace
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Inline Text Elements
                                <span className="small ml-1 text-muted">
                                    #2.09
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Styling for common inline HTML5 elements.
                            </p>
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del></p>
                            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                            <p><u>This line of text will render as underlined</u></p>
                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p><em>This line rendered as italicized text.</em></p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Alignment
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Add class <code>.text-left</code>, 
                                <code>.text-center</code> or 
                                <code>.text-right</code>.
                            </p>
                            <div>
                                <p className="text-left">
                                    Left aligned text on all viewport sizes.
                                </p>
                                <p className="text-center">
                                    Center aligned text on all viewport sizes.
                                </p>
                                <p className="text-right">
                                    Right aligned text on all viewport sizes.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Truncate
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                For longer content, you can add a <code>.text-truncate</code> 
                                class to truncate the text with an ellipsis. <strong>Requires</strong> display: 
                                <code>inline-block</code> or <code>display: block</code>.
                            </p>
                            <div className="row">
                                <div className="col-3 text-truncate">
                                    Praeterea iter est quasdam res quas ex communi.
                                </div>
                            </div>
                            <span className="d-inline-block text-truncate" style={{ maxWidth: '150px'}}>
                                    Praeterea iter est quasdam res quas ex communi.
                                </span>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Transform
                                <span className="small ml-1 text-muted">
                                    #3.06
                                </span>
                            </CardTitle>
                            <div>
                                <p className="card-text">
                                    Quickly change the weight (boldness) of text or italicize text.
                                </p>
                                <p className="font-weight-bold">
                                    Bold text.
                                </p>
                                <p className="font-weight-normal">
                                    Normal weight text.
                                </p>
                                <p className="font-weight-light">
                                    Light weight text.
                                </p>
                                <p className="font-italic">
                                    Italic text.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Lead
                                <span className="small ml-1 text-muted">
                                    #3.08
                                </span>
                            </CardTitle>
                            <p className="card-text">
                               Make a paragraph stand out by adding <code>.lead</code>.
                            </p>
                            <p className="card-text lead">
                                Vivamus sagittis lacus vel augue laoreet rutrum 
                                faucibus dolor auctor. Duis mollis, est non commodo luctus.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Text: Abbreviations
                                <span className="small ml-1 text-muted">
                                    #3.10
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.
                            </p>
                            <p><abbr title="attribute">attr</abbr></p>
                            <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
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
                        title="Blackquotes" 
                        className="mt-5"
                        subTitle="For quoting blocks of content from another source within your document."
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Blackquote: Default
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                               Wrap <code>&lt;blockquote className="blockquote" /&gt;</code> around any HTML as the quote.
                            </p>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer posuere erat a ante.</p>
                            </blockquote>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Blackquote: Alignment Center
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use text utilities as needed to change the alignment of your blockquote.
                            </p>
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Blackquote: Naming a Source
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                               Add a <code>&lt;footer className="blockquote-footer"&gt;</code> 
                               for identifying the source. Wrap the name of the source work in <code>cite</code>.
                            </p>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Blackquote: Alignment Right
                                <span className="small ml-1 text-muted">
                                    #4.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use text utilities as needed to change the alignment of your blockquote.
                            </p>
                            <blockquote className="blockquote text-right">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
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
                        title="Lists" 
                        className="mt-5"
                        subTitle="For quoting blocks of content from another source within your document."
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
                                Lists: Unstyled
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Remove the default <code>.list-style</code> and left margin on list items.
                            </p>
                           <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor sem</li>
                                        <li>Ac tristique libero volutpat at</li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Lists: Inline
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Remove a list’s bullets and apply some light margin 
                                with a combination of two classes, <code>.list-inline</code> and 
                                <code>.list-inline-item</code>.
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">Lorem ipsum</li>
                                <li className="list-inline-item">Phasellus iaculis</li>
                                <li className="list-inline-item">Nulla volutpat</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Lists: Description List Alignment
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Align terms and descriptions horizontally by using 
                                our grid system’s predefined classes (or semantic mixins). 
                                For longer terms, you can optionally add a <code>.text-truncate</code> 
                                class to truncate the text with an ellipsis.
                            </p>
                           <dl className="row">
                                <dt className="col-sm-3">Description lists</dt>
                                <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                                <dt className="col-sm-3">Euismod</dt>
                                <dd className="col-sm-9">
                                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                                </dd>
                                <dt className="col-sm-3">Malesuada porta</dt>
                                <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                                <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                                <dt className="col-sm-3">Nesting</dt>
                                <dd className="col-sm-9">
                                    <dl className="row">
                                        <dt className="col-sm-4">Nested definition list</dt>
                                        <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                    </dl>
                                </dd>
                            </dl>
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
                        title="Code" 
                        className="mt-5"
                        subTitle="Documentation and examples for displaying inline and multiline blocks of code with Bootstrap."
                    />
                </Col>
            </Row>
            { /* END Header 6 */}
            { /* START Section 6 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Code: Inline Code
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Wrap inline snippets of code with <code>&lt;code&gt;</code>. 
                                Be sure to escape HTML angle brackets.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Code: Variables
                                <span className="small ml-1 text-muted">
                                    #6.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                For indicating variables use the <code>&lt;var&gt;</code> tag.
                            </p>
                            <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Code: User Input
                                <span className="small ml-1 text-muted">
                                    #6.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use the <code>&lt;kbd&gt;</code> to indicate input that is typically entered via keyboard.
                            </p>
                            To switch directories, type <kbd>cd</kbd> followed by the name of 
                            the directory.<br />
                            To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Code: Sample Output
                                <span className="small ml-1 text-muted">
                                    #6.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                For indicating sample output from a program use the <code>&lt;samp&gt;</code> tag.
                            </p>
                            <samp>This text is meant to be treated as sample output from a computer program.</samp>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Code: Code Blocks
                                <span className="small ml-1 text-muted">
                                    #6.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use <code>&lt;pre&gt;</code>s for multiple lines of code. Once again, be sure to 
                                escape any angle brackets in the code for proper rendering. 
                                You may optionally add the <code>.pre-scrollable</code> class, \
                                which will set a max-height of 340px and provide a y-axis scrollbar.
                            </p>
                            <code>&lt;p&gt;Sample text here...&lt;/p&gt;
                            &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                            </code>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}
        </Container>
    </React.Fragment>
);

export default Typography;
