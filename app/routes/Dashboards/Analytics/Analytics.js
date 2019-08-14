import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FloatGrid as Grid,
    Card,
    Media,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    CardFooter,
    Button,
    CardHeader
} from './../../../components';
import { applyColumn } from './../../../components/FloatGrid';

import { HeaderMain } from "../../components/HeaderMain";

import {
    MetricVsTarget
} from "../../components/Analytics/MetricVsTarget";
import {
    WebsitePerformance
} from "../../components/Analytics/WebsitePerformance";
import {
    AudienceMetricsChart
} from "./components/AudienceMetricsChart";
import {
    TinyAreaChart
} from "../../components/Analytics/TinyAreaChart";
import {
    SimpleLineChart
} from "./../../Graphs/ReCharts/components/SimpleLineChart";

import classes from './Analytics.scss';

const LAYOUT = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 9, minH: 7 },
    'traffic-channels': { md: 6, h: 6 },
    'sessions': { md: 6, h: 6, maxH: 9, minW: 3 },
    'spend': { md: 6, h: 7 },
    'website-performance': { md: 6, h: 11 },
    'organic-traffic': { md: 6, h: 10 }
}

const SessionByDevice = (props) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);
SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
}

export class Analytics extends React.Component {
    state = {
        layouts: _.clone(LAYOUT)
    }

    _resetLayout = () => {
        this.setState({
            layouts: _.clone(LAYOUT)
        })
    }

    render() {
        const { layouts } = this.state;

        return (
            <React.Fragment>
                <Container fluid={ false }>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                            title="Analytics"
                            className="mt-0"
                        />
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-globe text-body mr-2"></i>
                                        www.webkom.co<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <div className="small">
                                        Last 30 Days vs Previous Period
                                    </div>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Site:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            www.webkom.co
                                        </DropdownItem>
                                        <DropdownItem>
                                            www.spin.webkom.co
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-plus mr-2"></i>
                                            Add New
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        Last Month<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <div className="small">
                                        Jan 01, 2017 to Jan 31, 2017
                                    </div>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Period:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Last Month
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 3 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 6 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last Year
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Custom...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        Previous Period<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <div className="small">
                                        Jan 01, 2017 to Jan 31, 2017
                                    </div>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Period:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Previous Period
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 3 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 6 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last Year
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Custom...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start">
                                <Button color="primary" className="mb-2 mr-2 px-3">
                                    Apply
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button
                                    color="link"
                                    className="mb-2 text-decoration-none align-self-start"
                                    onClick={this._resetLayout}
                                >
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Container>

                <Grid>
                    <Grid.Row
                        onLayoutChange={ layouts => this.setState({ layouts }) }
                        columnSizes={ this.state.layouts }
                        rowHeight={ 55 }
                    >
                        <Grid.Col { ...(applyColumn('metric-v-target-users', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Users
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <MetricVsTarget 
                                        title="Users"
                                        value="168,793"
                                        progressbarColor="danger"
                                        targetValue="169,001"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('metric-v-target-sessions', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Sessions
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <MetricVsTarget 
                                        title="Sessions"
                                        value="529,747"
                                        progressbarValue="67"
                                        progressbarColor="primary"
                                        targetValue="782,957"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('metric-v-target-pageviews', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Pageviews
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <MetricVsTarget 
                                        title="Pageviews"
                                        value="1,763,981"
                                        progressbarValue="34"
                                        progressbarColor="secondary"
                                        targetValue="1,567,334"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('analytics-audience-metrics', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-4 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2 text-body"></i> Analytics Audience Metrics
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <Grid.Ready>
                                        <AudienceMetricsChart height="100%" className="flex-fill" />
                                    </Grid.Ready>
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('traffic-channels', layouts)) }>
                            <Card className="d-flex flex-column">
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Traffic Channels
                                </CardHeader>
                                <Table responsive className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0">Channel</th>
                                            <th scope="col" className="bt-0">Sessions</th>
                                            <th scope="col" className="bt-0">Prev Period</th>
                                            <th scope="col" className="text-right bt-0">Change</th>
                                            <th scope="col" className="bt-0 text-right">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Organic Search
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Direct
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">157.11</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                82,1% 
                                                <i className="fa fa-caret-up text-success ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Social Media
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <CardFooter className="mt-auto flex-grow-0">
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('sessions', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Sessions by Device Type
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <div className={classes['sessions']}>
                                        <SessionByDevice 
                                            title="Desktop"
                                            color="purple"
                                            valuePercent="51,5"
                                            value="201,345"
                                        />
                                        <SessionByDevice 
                                            title="Mobile"
                                            color="primary"
                                            valuePercent="34,4"
                                            value="134,201"
                                        />
                                        <SessionByDevice 
                                            title="Mobile"
                                            color="success"
                                            valuePercent="20,8"
                                            value="81,525"
                                        />
                                    </div>
                                    <Progress multi className={ classes['sessions-progress'] } style={{height: "5px"}}>
                                        <Progress bar color="purple" value="25" style={{height: "5px"}} />
                                        <Progress bar color="primary" value="30" style={{height: "5px"}} />
                                        <Progress bar color="success" value="45" style={{height: "5px"}} />
                                    </Progress>
                                </CardBody>
                                <CardFooter className={`${classes['sessions-info']} mt-auto`}>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('spend', layouts)) }>
                            <Card>
                                <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                    <span className="h6">
                                        <i className="fa fa-ellipsis-v text-body mr-2"></i> Spend
                                    </span>
                                    <span className="ml-auto text-right">
                                        Dec 22, 2016 to<br />
                                        Dec 31, 2016 <i>(prev.)</i>
                                    </span>
                                </CardHeader>
                                <CardBody>
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
                                    <TinyAreaChart height={ 70 } />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('website-performance', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Website Performance
                                </CardHeader>
                                <ListGroup flush>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="Bounce Rate (Avg)"
                                            value="46,893"
                                            valuePercentIcon="caret-up"
                                            valuePercentColor="text-success"
                                            valuePercent="23,91"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="Pageviews (Avg)"
                                            value="2.15"
                                            valuePercentColor="text-danger"
                                            valuePercent="42,82"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="New Sessions"
                                            value="76,40"
                                            valuePercentIcon="caret-up"
                                            valuePercentColor="text-success"
                                            valuePercent="23,91"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0 bb-0">
                                        <WebsitePerformance 
                                            title="Time on Site (Avg)"
                                            value="2m:16s"
                                            valuePercentColor="text-danger"
                                            valuePercent="65,28"
                                        />
                                    </ListGroupItem>
                                </ListGroup>
                                <CardFooter className="flex-grow-0 mt-auto">
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('organic-traffic', layouts)) }>
                            <Card>
                                <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                    <Media>
                                        <Media left className="mr-3">
                                            <i className="fa fa-ellipsis-v"></i> 
                                        </Media>
                                        <Media body>
                                            <span className="h6">
                                                How did my organic traffic perform?
                                            </span>
                                            <br />
                                            <span>
                                                Dec 22, 2016 to Dec 31, 2016 <i>(prev.)</i>
                                            </span>
                                        </Media>
                                    </Media>
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <div className="text-center mb-4">
                                        <h6>Organics Sessons</h6>
                                        <h2>
                                        46,982
                                        </h2>
                                        <div className="mb-1 text-success">
                                            <i className="fa mr-1 fa-caret-up"></i>
                                            23.34% <span> vs { faker.finance .amount() } <i>(prev.)</i>
                                            </span>
                                        </div>
                                    </div>
                                    <Grid.Ready>
                                        <SimpleLineChart height="100%" className="flex-fill"/>
                                    </Grid.Ready>
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}
