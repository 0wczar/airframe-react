import React from 'react';

import {
    Container,
    Row,
    Card,
    CardBody,
    CardTitle,
    Col
} from './../../../components';
import {
    BasicExample,
    BasicBehaviors,
    ControllingSelections,
    InputSize,
    MenuAlignment,
    FormExample,
    PaginationExample,
    BodyContainer,
    RenderingExample,
    LabelKey,
    FilteringExample,
    CustomFilteringExample,
    CustomSelections,
    AsyncSearch,
    AsyncPagination,
    PublicMethods
} from './components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

export const Typeahead = () => (
    <Container>
        <HeaderMain 
            title="Typeahead"
            className="mb-5 mt-4"
        />
        <Row>
            <Col>
                { /* START Header Example */}
                <HeaderDemo 
                    no={1} 
                    title="Basic Example" 
                    subTitle={(
                        <React.Fragment>
                            The typeahead allows single-selection by default. 
                            Setting the <code>multiple</code> prop turns the component into a tokenizer, 
                            allowing multiple selections.
                        </React.Fragment>
                    )}
                />
                { /* END Header Example */}
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Basic Example
                            <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </CardTitle>
                        <BasicExample /> 
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        { /* START Header Example */}
        <HeaderDemo 
            no={2} 
            title="Behaviors" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    The typeahead has several basic configurable behaviors. 
                    You can <code>disable</code> it as you would any input. 
                    You can position the menu above the input with <code>dropup</code> or aoutomatically re-position it when it hits the viewport bounds. 
                    Use <code>minLength</code> to require a minimum user input before displaying results, 
                    or hide the menu when there are no results by passing an empty 
                    string to <code>emptyLabel</code>.
                </React.Fragment>
            )}
        />
        { /* END Header Example */}
        <Row className="mt-3">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Behaviors
                            <span className="small ml-1 text-muted">
                                #2.01
                            </span>
                        </CardTitle>
                        <BasicBehaviors /> 
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody>
                        <CardTitle tag="h6">
                            Controlling Selections
                            <span className="small ml-1 text-muted">
                                #2.02
                            </span>
                        </CardTitle>
                        <p>
                            You can pre-populate the the typeahead by passing in an array of selections. 
                            Setting the <code>clearButton</code> prop displays a button allowing users to clear the input.
                        </p>
                        <ControllingSelections />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Input Size
                            <span className="small ml-1 text-muted">
                                #2.03
                            </span>
                        </CardTitle>
                        <p>
                            Besides the default input size, you can specify either a 
                            <code>small</code> or <code>large</code> size using the <code>bsSize</code> prop.
                        </p>
                        <InputSize />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Menu Alignment
                            <span className="small ml-1 text-muted">
                                #2.04
                            </span>
                        </CardTitle>
                        <p>
                            Specify alignment of the menu via the <code>align</code> prop. 
                            Valid values are <code>justify</code>, <code>left</code>, or <code>right</code>.
                        </p>
                         <MenuAlignment />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Input Groups and Validation States
                            <span className="small ml-1 text-muted">
                                #2.05
                            </span>
                        </CardTitle>
                        <p>
                            The typeahead works with Bootstrap input groups and add-ons; it also handles validation states.
                        </p>
                        <FormExample />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Pagination
                            <span className="small ml-1 text-muted">
                                #2.06
                            </span>
                        </CardTitle>
                        <p>
                            To improve browser performance, the typeahead paginates large data sets by default. 
                            You can set the number of results to be displayed using <code>maxResults</code>, 
                            or override pagination completely using <code>paginate</code>. The <code>onPaginate</code> 
                            hook allows you to respond to the pagination event.
                        </p>
                        <PaginationExample />
                    </CardBody>
                </Card>
                { /* END Card Example */}                
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <CardTitle tag="h6">
                    Body Container
                    <span className="small ml-1 text-muted">
                        #2.07
                    </span>
                </CardTitle>
                <p>
                    Setting the <code>bodyContainer</code> prop will attach the menu 
                    to <code>document.body</code> instead of the typeahead. 
                    Compare the behaviors in the srolling container below.
                </p>
                <BodyContainer />
            </Col>
        </Row>
        { /* START Header Example */}
        <HeaderDemo 
            no={3} 
            title="Rendering" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    You can customize how the typeahead looks and behaves by using the provided rendering hooks.
                </React.Fragment>
            )}
        />
        { /* END Header Example */}
        <Row className="mt-3">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Rendering
                            <span className="small ml-1 text-muted">
                                #3.01
                            </span>
                        </CardTitle>
                        <p>
                            You can customize how the typeahead looks and behaves 
                            by using the provided rendering hooks.
                        </p>
                        <RenderingExample />
                    </CardBody>
                </Card>
                { /* END Card Example */}  
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody>
                        <CardTitle tag="h6">
                            LabelKey
                            <span className="small ml-1 text-muted">
                                #3.02
                            </span>
                        </CardTitle>
                        <p>
                            The <code>labelKey</code> prop accepts a callback allowing you to transform 
                            your data and return a compound string rather than just a single data field.
                        </p>
                        <LabelKey />
                    </CardBody>
                </Card>
                { /* END Card Example */}  
            </Col>
        </Row>
        { /* START Header Example */}
        <HeaderDemo 
            no={4} 
            title="Filtering" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    By default, the typeahead is not case-sensitive and ignores diacritical marks when filtering. 
                    You can change these behaviors using the <code>caseSensitive</code> and 
                    <code>ignoreDiacritics</code> props.
                </React.Fragment>
            )}
        />
        { /* END Header Example */}
        <Row className="mt-3">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Filtering
                            <span className="small ml-1 text-muted">
                                #4.01
                            </span>
                        </CardTitle>
                        <p>
                            By default, the typeahead is not case-sensitive and ignores diacritical marks when filtering. 
                            You can change these behaviors using the <code>caseSensitive</code> and 
                            <code>ignoreDiacritics</code> props.
                        </p>
                        <FilteringExample />
                    </CardBody>
                </Card>
                { /* END Card Example */}  
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Custom Filtering
                            <span className="small ml-1 text-muted">
                                #4.02
                            </span>
                        </CardTitle>
                        <p>
                            Using the <code>filterBy</code> prop, you can either specify your own 
                            callback or an array of fields on your data object by which to filter.
                        </p>
                        <CustomFilteringExample />
                    </CardBody>
                </Card>
                { /* END Card Example */}  
            </Col>
        </Row>
        { /* START Header Example */}
        <HeaderDemo 
            no={5} 
            title="Custom Selections" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    Setting the <code>allowNew</code> prop provides the ability to create new options for the data set. 
                    You can change the label displayed before the custom option in the menu by using the 
                    <code>newSelectionPrefix</code> prop.
                </React.Fragment>
            )}
        />
        { /* END Header Example */}
        <Row className="mt-3">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody>
                        <CardTitle tag="h6">
                            Custom Selections
                            <span className="small ml-1 text-muted">
                                #5.01
                            </span>
                        </CardTitle>
                        <p>
                            Setting the <code>allowNew</code> prop provides the ability to create new options for the data set. 
                            You can change the label displayed before the custom option in the menu by using the 
                            <code>newSelectionPrefix</code> prop.
                        </p>
                        <CustomSelections />
                    </CardBody>
                </Card>
                { /* END Card Example */}  
            </Col>
        </Row>
        { /* START Header Example */}
        <HeaderDemo 
            no={6} 
            title="Asynchronous Searching" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    You can use the <code>AsyncTypeahead</code> component for asynchronous searches. 
                    It debounces user input and includes an optional query cache to avoid making the same 
                    request more than once in basic cases.
                </React.Fragment>
            )}
        />
        { /* END Header Example */}
        <Row className="mt-3">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody className="pb-0">
                        <CardTitle tag="h6">
                            Asynchronous Searching
                            <span className="small ml-1 text-muted">
                                #6.01
                            </span>
                        </CardTitle>
                        <p>
                            You can use the <code>AsyncTypeahead</code> component for asynchronous searches. 
                            It debounces user input and includes an optional query cache to avoid making the same 
                            request more than once in basic cases.
                        </p>
                        <AsyncSearch />
                    </CardBody>
                </Card>
                { /* END Card Example */} 
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody>
                        <CardTitle tag="h6">
                            Pagination
                            <span className="small ml-1 text-muted">
                                #6.02
                            </span>
                        </CardTitle>
                        <p>
                            A more advanced case involves paginating async results. 
                            Additional results are fetched using <code>onPaginate</code> while a 
                            custom query cache tracks the incremental results and page number for each query.
                        </p>
                        <AsyncPagination />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                { /* START Card Example */}
                <Card>
                    <CardBody>
                        <CardTitle tag="h6">
                            Public Methods
                            <span className="small ml-1 text-muted">
                                #6.03
                            </span>
                        </CardTitle>
                        <p>
                            The <code>clear</code>, <code>focus</code>, and <code>blur</code> 
                            methods are exposed for programmatic control of the typeahead.
                        </p>
                        <PublicMethods />
                    </CardBody>
                </Card>
                { /* END Card Example */}
            </Col>
        </Row>
    </Container>
);