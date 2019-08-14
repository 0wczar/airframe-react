import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import { 
    Button,
    Breadcrumb,
    ButtonToolbar,
    UncontrolledTooltip,
    BreadcrumbItem,
    ButtonGroup,
} from './../../../components';

const ProjectsSmHeader = (props ) => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
            <Breadcrumb className="mr-auto d-flex align-items-center">
                { /* START 1st */}
                <BreadcrumbItem active>
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </BreadcrumbItem>
                { /* END 1st */}

                { /* START 2nd */}
                { 
                    props.title ? (
                        <BreadcrumbItem>
                            <Link to={ props.subTitleLink }>
                                {props.subTitle}
                            </Link>
                        </BreadcrumbItem>
                    ): (
                        <BreadcrumbItem active>
                            {props.subTitle}
                        </BreadcrumbItem>
                    )
                }
                { /* END 2nd */}

                { /* START 3rd */}
                {
                    props.title && (
                        <BreadcrumbItem active>
                            {props.title}
                        </BreadcrumbItem>  
                    )
                }
                { /* END 3rd */}
            </Breadcrumb>
            <ButtonToolbar>
                <ButtonGroup className="mr-auto mr-md-2">
                    <Button tag={ NavLink } to={ `${ props.linkList }` } color="secondary" outline className="align-self-center" id="tooltipShowList">
                        <i className="fa-fw fa fa-bars"></i>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowList">
                        Show List
                    </UncontrolledTooltip>
                    <Button tag={ NavLink } to={ `${ props.linkGrid }` } color="secondary" outline className="align-self-center" id="tooltipShowGrid">
                        <i className="fa-fw fa fa-th-large"></i>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowGrid">
                        Show Grid
                    </UncontrolledTooltip>
                        {
                            props.btnShowKanban && (
                                <React.Fragment>
                                    <Button tag={ NavLink } to={ `${ props.linkKanban }` } color="secondary" outline className="align-self-center" id="tooltipShowKanban">
                                        <i className="fa-fw fa fa-trello"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipShowKanban">
                                        Show Kanban
                                    </UncontrolledTooltip>
                                 </React.Fragment>
                                )
                        }
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="primary" className="align-self-center" id="tooltipAddNew">
                        <i className="fa-fw fa fa-plus"></i>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                        Add New
                    </UncontrolledTooltip>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node,
    subTitleLink: PropTypes.string,
    linkList: PropTypes.node,
    linkGrid: PropTypes.node,
    btnShowKanban: PropTypes.bool,
        linkKanban: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    linkList: "#",
    linkGrid: "#",
    btnShowKanban: false,
        linkKanban: "/apps/tasks-kanban"
};

export { ProjectsSmHeader };
