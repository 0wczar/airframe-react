import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';

import { 
    Card,
    CardBody,
    Badge,
    CardFooter,
    Progress,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

import { randomArray, randomAvatar } from './../../../utilities';

const badges = [
    <Badge pill color="success" className="mb-2" key="badge-active">
        Active
    </Badge>,
    <Badge pill color="danger" className="mb-2" key="badge-suspended">
        Suspended
    </Badge>,
    <Badge pill color="warning" className="mb-2" key="badge-waiting">
        Waiting
    </Badge>,
    <Badge pill color="secondary" className="mb-2" key="badge-paused">
        Paused
    </Badge>,
];

const taskCompleted = [
    "15",
    "28",
    "30",
    "80",
    "57",
    "90"
];

const ProjectsCardGrid = () => (
    <React.Fragment>
            { /* START Card */}
            <Card>
                <CardBody>
                    { randomArray(badges) }
                    <div className="mb-2">
                        <a href="#" className="mr-2">
                            <i className="fa fa-fw fa-star-o"></i>
                        </a>
                        <Link to="/apps/tasks/grid" className="text-decoration-none">
                            { faker.company.catchPhrase() }
                        </Link>
                    </div>
                    <div className="mb-3">
                        Last Edited by: { faker.name.firstName() } { faker.name.lastName() } <br />
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                    </div>
                    <div className="mb-3">
                        <Progress value={ randomArray(taskCompleted) } style={{height: "5px"}} className="mb-2" />
                        <div>
                            Tasks Completed: 
                            <span className="text-inverse">
                                36/94
                            </span>
                        </div>
                    </div>
                    <div>
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
                    </div>
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        20 Sep, Fri, 2018
                    </span>
                    <UncontrolledButtonDropdown className="align-self-center ml-auto">
                        <DropdownToggle color="link" size="sm" className="pr-0">
                            <i className="fa fa-gear" /><i className="fa fa-angle-down ml-2" />
                        </DropdownToggle>
                        <DropdownMenu right>
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
                </CardFooter>
            </Card>
            { /* END Card */}
    </React.Fragment>
)

export { ProjectsCardGrid };
