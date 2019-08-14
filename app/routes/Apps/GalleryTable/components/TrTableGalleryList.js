import React from 'react';
import faker from 'faker/locale/en_US';
import PropTypes from 'prop-types';

import { 
    Badge,
    CustomInput,
    Avatar,
    HolderProvider,
    CardImg,
    Media,
    AvatarAddOn,
    Button,
    UncontrolledTooltip
} from './../../../../components';

import { randomArray, randomAvatar } from './../../../../utilities';

const status = [
    "secondary",
    "danger",
    "success",
    "warning"
];
const badges = [
    "secondary"
];

const TrTableGalleryList = (props) => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <CustomInput type="checkbox" id={`trTableGalleryList-${ props.id }` } label="" inline />
            </td>
            <td className="align-middle">
                <HolderProvider.Icon
                    iconChar=""
                    size={ 16 }
                    width={ 100 }
                    height={ 100 }
                >
                    <CardImg className="rounded" />
                </HolderProvider.Icon>
            </td>
            <td className="align-middle">
                <span>
                    <a className="text-inverse" href="#">
                        { faker.commerce.productName() }
                    </a>
                    <br />
                    <span href="#">
                        { faker.system.fileName() }
                    </span>
                    <br />
                    <Badge pill color={ randomArray(badges) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badges) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badges) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                </span>
            </td>
            <td className="align-middle">
                <Media>
                    <Media left className="align-self-center mr-3">
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
                                    color={ randomArray(status) }
                                    key="avatar-icon-fg"
                                />
                            ]}
                        /> 
                    </Media>
                    <Media body>
                        <a className="mt-0 text-decoration-none d-flex" href="#">
                            { faker.name.firstName() } { faker.name.lastName() }
                        </a>
                        <span>
                            { faker.address.state() }, { faker.address.stateAbbr() } 
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                22-Jul-2012
            </td>
            <td className="align-middle">
                Size: { faker.random.number() } Kb<br />
                Format: .png
            </td>
            <td className="align-middle text-right">
                <Button color="link" id={`trTableGalleryListTooltip-${ props.id }` }>
                    <i className="fa fa-fw fa-download"></i>
                </Button>
                <UncontrolledTooltip placement="left" target={`trTableGalleryListTooltip-${ props.id }` }>
                   Download
                </UncontrolledTooltip>
            </td>
        </tr>
    </React.Fragment>
)

TrTableGalleryList.propTypes = {
    id: PropTypes.node
};
TrTableGalleryList.defaultProps = {
    id: "1"
};

export { TrTableGalleryList };
