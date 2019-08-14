import React from 'react';
import PropTypes from 'prop-types';
import { 
    Card,
    CardBody,
    Button,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    CardFooter,
    CustomInput,
    ButtonGroup,
    DropdownItem
} from './../../../components';

import {
    Profile
} from "./../Profile";

const UsersCardGrid = (props) => (
    <React.Fragment>
        { /* START Card */}
        <Card>
            <CardBody>
                <div className="d-flex">
                    <CustomInput className="pt-0 mt-0" type="checkbox" id={`usersCardGrid-${ props.id }` } label="" />
                    <ButtonGroup size="sm" className="ml-auto">
                        <Button color="link" size="sm" id={`usersCardGridTooltip-${ props.id }` } className="pt-0">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target={`usersCardGridTooltip-${ props.id }` }>
                            Add To Favorites
                        </UncontrolledTooltip>
                        <UncontrolledButtonDropdown className="ml-auto">
                            <DropdownToggle color="link" size="sm" className="pt-0">
                                <i className="fa fa-fw fa-bars pr-0" />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-phone mr-2"></i>
                                    Call
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-comment mr-2"></i>
                                    Chat
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-video-camera mr-2"></i>
                                    Video
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-user mr-2"></i>
                                    Profile
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-pencil mr-2"></i>
                                    Edit
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <i className="fa fa-fw fa-trash mr-2"></i>
                                    Delete
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </ButtonGroup>
                </div>
                <Profile />
            </CardBody>
            <CardFooter className="bt-0 text-center">
                <span>
                    <span className="mr-3">
                        <i className="fa fa-user-o mr-1"></i> <span className="text-inverse">233</span> 
                    </span>
                    <span>
                        <i className="fa fa-star-o mr-1"></i> <span className="text-inverse">98</span>
                    </span>
                </span>
            </CardFooter>
        </Card>
        { /* END Card */}
    </React.Fragment>
)
UsersCardGrid.propTypes = {
    id: PropTypes.node
};
UsersCardGrid.defaultProps = {
    id: "1"
};

export { UsersCardGrid };
