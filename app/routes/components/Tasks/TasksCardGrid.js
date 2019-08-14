import React from 'react';
import faker from 'faker/locale/en_US';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { 
    Card,
    CardBody,
    Badge,
    Avatar,
    Media,
    CustomInput,
    CardFooter,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    AvatarAddOn
} from './../../../components';

import { randomArray, randomAvatar } from './../../../utilities';

const badgesColors = [
    "secondary"
];

const avatarStatus = [
    "secondary",
    "warning",
    "danger",
    "success"
];

const prioStatus = [
        <React.Fragment key="1">
            <i className="fa fa-circle text-success mr-2"></i>
            Small<i className="fa fa-angle-down ml-2" />
        </React.Fragment>,
        <React.Fragment key="2">
            <i className="fa fa-circle text-primary mr-2"></i>
            Normal<i className="fa fa-angle-down ml-2" />
        </React.Fragment>,
        <React.Fragment key="3">
            <i className="fa fa-circle text-warning mr-2"></i>
            High<i className="fa fa-angle-down ml-2" />
        </React.Fragment>,
        <React.Fragment key="3">
            <i className="fa fa-circle text-danger mr-2"></i>
            Big<i className="fa fa-angle-down ml-2" />
        </React.Fragment>
];

const TasksCardGrid = (props) => (
    <React.Fragment>
        { /* START Card */}
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" link size="sm" className="pl-0 mb-3 text-decoration-none">
                        { randomArray(prioStatus) }
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Select Priority</DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-danger mr-2"></i>
                            Big 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-warning mr-2"></i>
                            High 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-primary mr-2"></i>
                            Normal 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-success mr-2"></i>
                            Small 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <Media className="mb-2">
                    <Media left middle className="mr-2">
                        <CustomInput type="checkbox" id={`TasksCardGrid-${ props.id }` } label="" />
                    </Media>
                    <Media body>
                        <span className="mr-2">#{ faker.random.number() }</span>
                        <Link to="/apps/task-details" className="text-decoration-none">
                            { faker.hacker.phrase() }
                        </Link>
                    </Media>
                </Media>
                <p className="mb-2">
                    { faker.lorem.sentence() }
                </p>
                <div className="mb-3">
                    <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                </div>
                <div>
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
                                color={ randomArray(avatarStatus) }
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
                                color="success"
                                key="avatar-icon-fg"
                            />
                        ]}
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

TasksCardGrid.propTypes = {
    id: PropTypes.node
};
TasksCardGrid.defaultProps = {
    id: "1"
};

export { TasksCardGrid };
