import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

import {
  Sidebar,
  UncontrolledButtonDropdown,
  Avatar,
  AvatarAddOn,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";

const avatarImg = randomAvatar();

const SidebarTopA = () => (
  <React.Fragment>
    {/* START: Sidebar Default */}
    <Sidebar.HideSlim>
      <Sidebar.Section className="pt-0">
        <Link to="/" className="d-block">
          <Sidebar.HideSlim>
            <Avatar.Image
              size="lg"
              src={avatarImg}
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
                />,
              ]}
            />
          </Sidebar.HideSlim>
        </Link>

        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="link"
            className="pl-0 pb-0 btn-profile sidebar__link"
          >
            {faker.person.firstName()} {faker.person.lastName()}
            <i className="fa fa-angle-down ml-2"></i>
          </DropdownToggle>
          <DropdownMenu persist>
            <DropdownItem header>
              {faker.person.firstName()} {faker.person.lastName()}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/apps/profile-details">
              My Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="/apps/settings-edit">
              Settings
            </DropdownItem>
            <DropdownItem tag={Link} to="/apps/billing-edit">
              Billings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/pages/login">
              <i className="fa fa-fw fa-sign-out mr-2"></i>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <div className="small sidebar__link--muted">
          {faker.person.jobTitle()}
        </div>
      </Sidebar.Section>
    </Sidebar.HideSlim>
    {/* END: Sidebar Default */}

    {/* START: Sidebar Slim */}
    <Sidebar.ShowSlim>
      <Sidebar.Section>
        <Avatar.Image
          size="sm"
          src={avatarImg}
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
            />,
          ]}
        />
      </Sidebar.Section>
    </Sidebar.ShowSlim>
    {/* END: Sidebar Slim */}
  </React.Fragment>
);

export { SidebarTopA };
