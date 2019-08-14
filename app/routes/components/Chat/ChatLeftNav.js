import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Nav,
    NavItem,
    Media,
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    Avatar,
    AvatarAddOn,
    NavLink
} from './../../../components';
import { randomAvatar } from './../../../utilities';

const ChatLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                Search
            </div>
            <InputGroup>
                <Input placeholder="Search for..." />
                <InputGroupAddon addonType="append">
                    <Button outline color="secondary">
                        <i className="fa fa-search"></i>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="mt-4 mb-2">
                <span className="small">
                    Contacts
                </span>
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="/chat" active>
                        <Media>
                            <Media left className="align-self-start mr-3">
                                <Avatar.Image
                                    size="sm"
                                    src={ randomAvatar() }
                                    addOns={[
                                        <AvatarAddOn.Icon 
                                            className="fa fa-circle"
                                            color="primary"
                                            key="avatar-icon-bg"
                                        />,
                                        <AvatarAddOn.Icon 
                                            className="fa fa-circle"
                                            color="danger"
                                            key="avatar-icon-fg"
                                        />
                                    ]}
                                /> 
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.country() }
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-3">
                                <Avatar.Image
                                    size="sm"
                                    src={ randomAvatar() }
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
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.country() }
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-3">
                                <Avatar.Image
                                    size="sm"
                                    src={ randomAvatar() }
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
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.country() }
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        Show All <span className="small mr-2">(345)</span>
                        <i className="fa fa-angle-down"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="mt-4 mb-2">
                <span className="small">
                    Updates
                </span>
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-1">
                                <span className="fa-stack fa-lg fa-fw d-flex align-self-center mr-3">
                                    <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
                                    <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
                                </span> 
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.hacker.phrase() }
                                </div>
                                <span className="small">
                                    24-Aug-2012, 12:12
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-1">
                                <span className="fa-stack fa-lg fa-fw d-flex align-self-center mr-3">
                                    <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
                                    <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
                                </span> 
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.hacker.phrase() }
                                </div>
                                <span className="small">
                                    24-Aug-2012, 12:12
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-1">
                                <span className="fa-stack fa-lg fa-fw d-flex align-self-center mr-3">
                                    <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
                                    <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
                                </span> 
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.hacker.phrase() }
                                </div>
                                <span className="small">
                                    24-Aug-2012, 12:12
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        <Media>
                            <Media left className="align-self-start mr-1">
                                <span className="fa-stack fa-lg fa-fw d-flex align-self-center mr-3">
                                    <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
                                    <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
                                </span> 
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.hacker.phrase() }
                                </div>
                                <span className="small">
                                    24-Aug-2012, 12:12
                                </span>
                            </Media>
                        </Media>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">
                        Show All <span className="small mr-2">(12)</span>
                        <i className="fa fa-angle-down"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ChatLeftNav };
