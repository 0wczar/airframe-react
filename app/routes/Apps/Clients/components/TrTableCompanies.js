import React from 'react';
import faker from 'faker/locale/en_US';
import PropTypes from 'prop-types';

import { 
    Avatar,
    CustomInput,
    UncontrolledTooltip,
    AvatarAddOn,
    Media
} from './../../../../components';
import { randomArray } from './../../../../utilities';

const status = [
    "success",
    "danger",
    "warning",
    "secondary"
];

const brand = [
    <Media key="facebook">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-facebook"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse mt-0 d-flex">
                Facebook
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="twitter">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-twitter"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Twitter
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="linkedin">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-linkedin"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Linkedin
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="foursquare">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-foursquare"></i>
                <i className="fa fa-foursquare fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Foursquare
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="lastfm">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-lastfm"></i>
                <i className="fa fa-lastfm fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                LastFM
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="paypal">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-paypal"></i>
                <i className="fa fa-paypal fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                PayPal
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="amazon">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-amazon"></i>
                <i className="fa fa-amazon fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Amazon
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="skype">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-skype"></i>
                <i className="fa fa-skype fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Skype
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="spotify">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-spotify"></i>
                <i className="fa fa-spotify fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Spotify
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="pinterest">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-pinterest"></i>
                <i className="fa fa-pinterest fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Pinterest
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="windows">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-windows"></i>
                <i className="fa fa-windows fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Windows
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="android">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-android"></i>
                <i className="fa fa-android fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Android
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
    <Media key="medium">
        <Media left className="align-self-center mr-3">
            <span className="fa-stack fa-lg">
                <i className="fa fa-stop fa-stack-2x text-medium"></i>
                <i className="fa fa-medium fa-stack-1x fa-inverse"></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse  mt-0 d-flex">
                Medium
            </div>
            <span>
                { faker.address.country() }
            </span>
        </Media>
    </Media>,
];

const TrTableCompanies = (props) => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <CustomInput type="checkbox" id={`trTableCompanies-${ props.id }` } label="" inline />
            </td>
            <td className="align-middle">
                <a href="#" id={`trTableCompaniesTooltip-${ props.id }` }>
                    <i className="fa fa-fw fa-star-o"></i>
                </a>
                <UncontrolledTooltip placement="top" target={`trTableCompaniesTooltip-${ props.id }` }>
                    Add To Favorites
                </UncontrolledTooltip>
            </td>
            <td className="align-middle">
                { randomArray(brand) }
            </td>
            <td className="align-middle">
                <Avatar.Image
                    size="sm"
                    src="http://bs4.webkom.co/img/avatars/2.jpg"
                    className="mr-2"
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color={ randomArray(status) }
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </td>
            <td className="align-middle text-right">
                { faker.phone.phoneNumberFormat() }<br />
                { faker.internet.email() } 
            </td>
            <td className="align-middle text-right">
                { faker.address.streetAddress() }<br />
                { faker.address.city() } 
            </td>
        </tr>
    </React.Fragment>
)

TrTableCompanies.propTypes = {
    id: PropTypes.node
};
TrTableCompanies.defaultProps = {
    id: "1"
};

export { TrTableCompanies };
