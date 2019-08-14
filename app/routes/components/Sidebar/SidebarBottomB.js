import React from 'react';
import faker from 'faker/locale/en_US';

import {
    Button,
    Sidebar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    UncontrolledPopover,
    PopoverBody,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';
import { randomAvatar } from './../../../utilities';

import { DropdownProfile } from '../Dropdowns/DropdownProfile';
import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';

const SidebarBottomB = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <UncontrolledButtonDropdown direction="up" className="mb-3">
                    <DropdownToggle color="link" className="btn-profile text-left pl-0 pb-0">
                            <Media>
                                <Media left middle className="mr-3">
                                    <Avatar.Image
                                        size="md"
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
                                    <span className="mt-0 d-flex h6 mb-1 text-truncate">
                                        { faker.name.firstName() } { faker.name.lastName() } <i className="fa fa-fw fa-angle-up ml-1"></i>
                                    </span>
                                    <p className="small text-truncate">
                                        { faker.name.jobTitle() }
                                    </p>
                                </Media>
                            </Media>
                    </DropdownToggle>
                    <DropdownProfile />
                </UncontrolledButtonDropdown>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <UncontrolledButtonDropdown direction="right" className="mb-3">
                        <DropdownToggle color="link" className="text-left pl-0 pb-0">
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
                        </DropdownToggle>
                        <DropdownProfile />
                    </UncontrolledButtonDropdown>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View  */ }
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <FooterAuth />
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <Button
                        color="link"
                        id="UncontrolledSidebarPopoverFooter"
                        className="sidebar__link p-0"
                    >
                        <i className="fa fa-fw fa-question-circle-o" />
                    </Button>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottomB };
