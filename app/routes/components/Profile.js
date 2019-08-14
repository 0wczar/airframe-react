import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Avatar,
    AvatarAddOn
} from './../../components';

import { randomArray, randomAvatar } from './../../utilities';

const Profile = () => { 

    const avatar = [
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="facebook"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-facebook"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="twitter"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-twitter"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="linkedin"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-linkedin"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="foursquare"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-foursquare"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="paypal"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-paypal"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
    ];
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center my-3">
                <Avatar.Image
                    size="lg"
                    src={ randomAvatar() }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-white-bg"
                        />,
                        ...randomArray(avatar)
                    ]}
                /> 
            </div>
            <div className="mb-4 text-center">
                <a className="h6 text-decoration-none" href="#">
                    { faker.name.firstName() } { faker.name.lastName() }
                </a>
                <div className="text-center mt-2">
                    { faker.name.jobTitle() }
                </div>
                <div className="text-center">
                    <i className="fa fa-map-marker mr-1"></i>
                    { faker.address.city() }
                </div>
            </div>
        </React.Fragment>
    )
}

export { Profile };
