import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    CardDeck, 
    Progress,
    CardFooter,
    CardColumns,
    CardTitle,
    InputGroup,
    Input,
    InputGroupAddon,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button
} from './../../components'
import { HeaderMain } from "../components/HeaderMain";
import {
    HeaderDemo
} from "../components/HeaderDemo";
import {
    TasksCardGrid
} from "../components/Tasks/TasksCardGrid";
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    GalleryCard
} from "../components/Gallery/GalleryCard";
import {
    UsersResultsCard
} from "../components/SearchResults/UsersResultsCard";
import {
    ImagesResultsCard
} from "../components/SearchResults/ImagesResultsCard";
import {
    Attachment
} from "../components/Attachment";
import {
    Comment
} from "../components/Comment";
import {
    ChatLeft
} from "../components/Chat/ChatLeft";
import {
    ChatRight
} from "../components/Chat/ChatRight";
import {
    ChatCardFooter
} from "../components/Chat/ChatCardFooter";
import {
    SessionsByDevice
} from "../components/Analytics/SessionsByDevice";
import {
    MetricVsTarget
} from "../components/Analytics/MetricVsTarget";
import {
    Activity
} from "../components/Dropdowns/Activity";
import {
    WebsitePerformance
} from "../components/Analytics/WebsitePerformance";
import {
    Messages
} from "../components/Dropdowns/Messages";
import {
    TasksMedia
} from "../components/ProjectsDashboards/TasksMedia";
import {
    ProjectsList
} from "../components/ProjectsDashboards/ProjectsList";
import {
    SimpleLineChart
} from "../Graphs/ReCharts/components/SimpleLineChart";
import {
    TinyAreaChart
} from "../Graphs/ReCharts/components/TinyAreaChart";
import {
    TimelineMini
} from "../components/Timeline/TimelineMini";

export const Widgets = () => (
    <Container>
        <HeaderMain 
            title="Widgets"
            className="mb-5 mt-4"
        />
        { /* START Header 1 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={1} 
                    title="Widgets Metrics" 
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 1 */}
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Views"
                        badgeTitle="Monthly"
                        badgeColor="primary"
                        value="6.200"
                        valueTitle="vs 4.891 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="23%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Orders"
                        badgeTitle="Annual"
                        badgeColor="info"
                        value="75.938"
                        valueTitle="vs 55.002 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-danger"
                        footerValue="12%"
                        footerIcon="caret-down"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Visits"
                        badgeTitle="Daily"
                        badgeColor="secondary"
                        value="456"
                        valueTitle="vs 231 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="67%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Bounces"
                        badgeTitle="Reatime"
                        badgeColor="warning"
                        value="91"
                        valueTitle="vs 87 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="8%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
        </CardDeck>
        { /* START Section 1 */}

        { /* START Header 2 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={2} 
                    title="Widgets Grids"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 2 */}
        { /* START Section 2 */}
        <CardColumns>
            <TasksCardGrid />
            <GalleryCard />
            <UsersResultsCard />
            <ImagesResultsCard />
        </CardColumns>
        { /* START Section 2 */}

        { /* START Header 3 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={3} 
                    title="Widgets Texts"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 3 */}
        { /* START Section 3 */}
        <Row>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Attachments
                            <span className="small ml-1 text-muted">
                                #3.01
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem tag={ Link } to="apps/email-details" action className="by-0">
                            <Attachment 
                                BgIconClassName="text-primary"
                                icon="file-word-o"
                            />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } to="apps/email-details" action className="by-0">
                            <Attachment 
                                BgIconClassName="text-success"
                                icon="file-excel-o"
                            />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } to="apps/email-details" action className="by-0 mb-3">
                            <Attachment 
                                BgIconClassName="text-warning"
                                icon="file-powerpoint-o"
                            />
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Chat
                            <span className="small ml-1 text-muted">
                                #3.03
                            </span>
                        </CardTitle>
                        <ChatLeft />
                        <ChatRight />
                        <ChatLeft />
                    </CardBody>
                    <CardFooter>
                        <ChatCardFooter />
                    </CardFooter>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Messages
                            <span className="small ml-1 text-muted">
                                #3.05
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush className="mb-4">
                        <ListGroupItem tag={ Link } action to="/apps/email-details" className="bt-0">
                            <Messages />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } action to="/apps/email-details" className="bt-0">
                            <Messages />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } action to="/apps/email-details" className="bt-0">
                            <Messages />
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Projects
                            <span className="small ml-1 text-muted">
                                #3.07
                            </span>
                        </CardTitle>
                        <InputGroup>
                            <Input placeholder="Search Projects..." />
                            <InputGroupAddon addonType="append">
                                <Button color="secondary" outline tag={ Link } to="/apps/projects/list">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem action tag={ Link } to="/apps/projects/list">
                            <ProjectsList 
                                badgeColor="success"
                                badgeTitle="Active"
                                progressValue="76"
                                completeValue="13"
                                myTasksValue="35"
                                daysDueValue="6"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/projects/list">
                            <ProjectsList 
                                badgeColor="danger"
                                badgeTitle="Suspended"
                                progressValue="23"
                                completeValue="6"
                                myTasksValue="87"
                                daysDueValue="15"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/projects/list">
                            <ProjectsList 
                                badgeColor="secondary"
                                badgeTitle="Archived"
                                progressValue="4"
                                completeValue="98"
                                myTasksValue="21"
                                daysDueValue="7"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/projects/list">
                            <ProjectsList 
                                badgeColor="warning"
                                badgeTitle="Paused"
                                progressValue="63"
                                completeValue="98"
                                myTasksValue="21"
                                daysDueValue="7"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/projects/list" className="text-center">
                            View All Projects
                            <i className="fa fa-angle-right ml-2"></i>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* END Card Widget */}
            </Col>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Comments
                            <span className="small ml-1 text-muted">
                                #3.02
                            </span>
                        </CardTitle>
                        <Comment />
                        <Comment />
                        <Comment />
                    </CardBody>
                    <CardFooter>
                        <ChatCardFooter />
                    </CardFooter>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Activity
                            <span className="small ml-1 text-muted">
                                #3.04
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush className="mb-4">
                        <ListGroupItem action tag={ Link } to="/apps/profile-details" className="bt-0">
                            <Activity 
                                iconColorBelow="success"
                                icon="check"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/profile-details" className="bt-0">
                            <Activity 
                                iconColorBelow="danger"
                                icon="close"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/profile-details" className="bt-0">
                            <Activity 
                                iconColorBelow="warning"
                                icon="exclamation"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/profile-details" className="bt-0">
                            <Activity 
                                iconColorBelow="primary"
                                icon="info"
                            />
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* END Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Tasks
                            <span className="small ml-1 text-muted">
                                #3.06
                            </span>
                        </CardTitle>
                        <InputGroup>
                            <Input placeholder="Search Tasks..." />
                            <InputGroupAddon addonType="append">
                                <Button color="secondary" outline tag={ Link } to="/apps/tasks/list">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem action>
                            <TasksMedia 
                                iconColor="success"
                                id="1"
                            />
                        </ListGroupItem>
                        <ListGroupItem action>
                            <TasksMedia 
                                iconColor="danger"
                                id="2"
                            />
                        </ListGroupItem>
                        <ListGroupItem action>
                            <TasksMedia 
                                iconColor="warning"
                                id="3"
                            />
                        </ListGroupItem>
                        <ListGroupItem action>
                            <TasksMedia 
                                id="4"
                            />
                        </ListGroupItem>
                        <ListGroupItem action tag={ Link } to="/apps/tasks/list" className="text-center">
                            View All Tasks
                            <i className="fa fa-angle-right ml-2"></i>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* END Card Widget */}
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
                    <ListGroup flush>
                        <ListGroupItem action tag={ Link } to="/pages/timeline" className="text-center">
                            Timeline Details
                            <i className="fa fa-angle-right ml-2"></i>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* END Card Widget */}
            </Col>
        </Row>
        { /* START Section 3 */}

        { /* START Header 4 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={4} 
                    title="Widgets Graphs"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>2</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 4 */}
        { /* START Section 4 */}
        <Row>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Sessions by Device Type
                            <span className="small ml-1 text-muted">
                                #4.01
                            </span>
                        </CardTitle>
                        <Row>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Desktop"
                                    valuePercent="51,5"
                                    valuePercentColor="text-primary"
                                    value="201,345"
                                    valueColor="text-primary"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Mobile"
                                    valuePercent="34,4"
                                    valuePercentColor="text-info"
                                    value="134,201"
                                    valueColor="text-info"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Tablet"
                                    valuePercent="20,8"
                                    value="81,525"
                                />
                            </Col>
                        </Row>
                        <Progress multi className="mb-2" style={{height: "5px"}}>
                            <Progress bar value="25" />
                            <Progress bar color="info" value="30" />
                            <Progress bar color="secondary" value="45" />
                        </Progress>
                    </CardBody>
                    <CardFooter className="small">
                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                        How do your users (visitors), sessions (visits) and pageviews 
                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                    </CardFooter>
                </Card>
                { /* END Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Website Performance
                            <span className="small ml-1 text-muted">
                                #4.03
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem className="by-0">
                            <WebsitePerformance 
                                title="Bounce Rate (Avg)"
                                value="46,893"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem className="by-0">
                            <WebsitePerformance 
                                title="Pageviews (Avg)"
                                value="2.15"
                                valuePercentColor="text-danger"
                                valuePercent="42,82"
                            />
                        </ListGroupItem>
                        <ListGroupItem className="by-0">
                            <WebsitePerformance 
                                title="New Sessions"
                                value="76,40"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem className="by-0 pb-4">
                            <WebsitePerformance 
                                title="Time on Site (Avg)"
                                value="2m:16s"
                                valuePercentColor="text-danger"
                                valuePercent="65,28"
                            />
                        </ListGroupItem>
                    </ListGroup>
                    <CardFooter className="small">
                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                        How do your users (visitors), sessions (visits) and pageviews 
                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                    </CardFooter>
                </Card>
                { /* END Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-4">
                            <CardTitle tag="h6">
                                Spend
                                <span className="small ml-1">
                                    #4.05
                                </span>
                            </CardTitle>
                            <span className="ml-auto text-right">
                                Dec 22, 2016 to<br />
                                Dec 31, 2016 (prev.)
                            </span>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               $2,890.12
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34%
                            </div>
                            <div>
                                vs { faker.finance .amount() } (prev.)
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
                </Card>
                { /* END Card Widget */}
            </Col>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Metrics vs Targets
                            <span className="small ml-1 text-muted">
                                #4.02
                            </span>
                        </CardTitle>
                        <MetricVsTarget 
                            title="Users"
                            value="168,793"
                            progressbarColor="danger"
                            targetValue="169,001"
                        />
                    </CardBody>
                    <CardFooter className="small">
                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                        How do your users (visitors), sessions (visits) and pageviews 
                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                    </CardFooter>
                </Card>
                { /* END Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-5">
                            <div>
                                <h6 className="mb-0">
                                    How did my organic traffic perform?
                                    <span className="small ml-1 text-muted">
                                        #4.04
                                    </span>
                                </h6>
                                <span>
                                    Dec 22, 2016 to Dec 31, 2016 (prev.)
                                </span>
                            </div>
                            <span className="ml-auto text-right">
                                Goal:
                                <UncontrolledButtonDropdown className="ml-2">
                                    <DropdownToggle color="link" className="text-decoration-none">
                                        All<i className="fa fa-angle-down ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Select Goal:</DropdownItem>
                                        <DropdownItem active>All</DropdownItem>
                                        <DropdownItem>Other</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Custom...</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </span>
                        </div>
                        <div className="text-center mb-4">
                            <h6>Organics Sessons</h6>
                            <h2>
                               46,982
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34% <span> vs { faker.finance .amount() } (prev.)
                                </span>
                            </div>
                        </div>
                        <SimpleLineChart />
                    </CardBody>
                    <CardFooter className="small">
                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                        How do your users (visitors), sessions (visits) and pageviews 
                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                    </CardFooter>
                </Card>
                 { /* END Card Widget */}
            </Col>
        </Row>
        { /* START Section 3 */}

    </Container>
);

export default Widgets;
