import React from 'react';
import fetch from 'node-fetch';
import classNames from 'classnames';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from './../../components';

const SERVICE_URL = "http://dashboards.webkom.co:8000";

export class VersionSelector extends React.Component {
    static propTypes = {
        dashboard: PropTypes.string,
        down: PropTypes.bool,
        compact: PropTypes.bool,
        render: PropTypes.func,
        className: PropTypes.string,
        sidebar: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.state = {
            versions: [],
            isError: false,
            render: null
        };
    }

    async fetchVersions() {
        const { dashboard } = this.props;
        let versions;
        try {
            versions = await fetch(`${SERVICE_URL}/dashboards/versions`)
                .then(response => response.json());
        } catch(exc) {
            this.setState({ isError: true })
        }
        const targetVersions = _.filter(versions, { dashboardName: dashboard });
        
        this.setState({ versions: targetVersions });
    }

    componentDidMount() {
        this.fetchVersions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dashboard !== this.props.dashboard) {
            this.fetchVersions();
        }
    }

    render() {
        const { down, render, className, sidebar } = this.props;
        const { versions } = this.state;
        const currentVersion = _.find(versions, { label: "React" });

        return (
            <UncontrolledButtonDropdown direction={ down ? "down" : "up" } className={ className }>
                <DropdownToggle
                    disabled={ _.isEmpty(versions) }
                    tag="a"
                    href="javascript:;"
                    className={classNames(
                        'btn-switch-version',
                        {
                            'sidebar__link': sidebar,
                        }
                    )}
                >
                    {
                        currentVersion ? (
                            render ? render(currentVersion) : (
                                <React.Fragment>
                                    React {currentVersion.version} <i className={`fa ${down ? "fa-angle-down" : "fa-angle-up"} ml-2`}></i>
                                    <br />
                                    <span className={ classNames('small', { 'sidebar__link--muted': sidebar }) }>
                                        { moment(currentVersion.date).format("ddd, MMM DD, YYYY h:mm:ss A") }
                                    </span>
                                </React.Fragment>
                            )
                        ) : (
                            <span>Loading...</span>
                        )
                    }
                </DropdownToggle>
                {
                    (!_.isEmpty(versions)) && (
                        <DropdownMenu>
                            <DropdownItem header>
                                Bootstrap 4 Versions:
                            </DropdownItem>
                            {
                                _.map(versions, (version, index) => (
                                    <DropdownItem
                                        key={ index }
                                        href={ version.demoUrl }
                                        className="d-flex"
                                        active={ version === currentVersion }
                                    >
                                        <span>
                                            { version.label } { version.version }
                                            <br />
                                            <span className="small">
                                                { moment(version.date).format("ddd, MMM DD, YYYY h:mm:ss A") }
                                            </span>
                                        </span>
                                        {
                                            (version === currentVersion) && (
                                                <i className="fa fa-fw fa-check text-success ml-auto align-self-center pl-3" />
                                            )
                                        }
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    )
                }
            </UncontrolledButtonDropdown>
        );
    }
}