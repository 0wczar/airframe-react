import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    CardColumns,
    Badge,
    UncontrolledTooltip
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { TasksCardGrid } from "../../components/Tasks/TasksCardGrid";

const TasksKanban = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tasks Kanban"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <ProjectsSmHeader 
                        btnShowKanban
                        linkList="/apps/tasks/list"
                        linkGrid="/apps/tasks/grid"
                        title="Tasks Kanban"
                        subTitle="Projects"
                            subTitleLink="/apps/projects/list"
                    />
                    <CardColumns>
                        { /* START Card */}
                        <Card>
                            <CardBody>
                                { /* START Card Header */}
                                <div className="mb-4">
                                    <CardTitle tag="h6">
                                        To-Do
                                        <Badge pill color="secondary" className="ml-2">
                                            3
                                        </Badge>
                                    </CardTitle>
                                    <span className="small d-flex">
                                        16 Jun 2016 - 23 Aug 2016
                                        <span className="ml-auto">
                                            <a href="#" className="mr-2" id="TooltipSettings">
                                                <i className="fa fa-gear"></i>
                                            </a>
                                            <a href="#" className="mr-2" id="TooltipCollapse">
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            <a href="#" id="TooltipAddNew">
                                                <i className="fa fa-plus"></i>
                                            </a>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Settings
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Collapse
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipAddNew">
                                                Add New
                                            </UncontrolledTooltip>
                                        </span>
                                    </span>
                                </div>
                                { /* END CardHeader */}
                                <TasksCardGrid />
                                <TasksCardGrid 
                                    id="2"
                                />
                                <TasksCardGrid 
                                    id="3"
                                />
                            </CardBody>
                            { /* START Card Footer */}
                            <CardFooter className="text-center">
                                <a href="#">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add Task
                                </a>
                            </CardFooter>
                            { /* END Card Footer */}
                        </Card>
                        { /* END Card */}
                        { /* START Card */}
                        <Card>
                            <CardBody>
                                { /* START Card Header */}
                                <div className="mb-4">
                                    <CardTitle tag="h6">
                                        Doing
                                        <Badge pill color="secondary" className="ml-2">
                                            2
                                        </Badge>
                                    </CardTitle>
                                    <span className="small d-flex">
                                        16 Jun 2016 - 23 Aug 2016
                                        <span className="ml-auto">
                                            <a href="#" className="mr-2" id="TooltipSettings">
                                                <i className="fa fa-gear"></i>
                                            </a>
                                            <a href="#" className="mr-2" id="TooltipCollapse">
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            <a href="#" id="TooltipAddNew">
                                                <i className="fa fa-plus"></i>
                                            </a>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Settings
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Collapse
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipAddNew">
                                                Add New
                                            </UncontrolledTooltip>
                                        </span>
                                    </span>
                                </div>
                                { /* END CardHeader */}
                                <TasksCardGrid 
                                    id="4"
                                />
                                <TasksCardGrid 
                                    id="5"
                                />
                            </CardBody>
                            { /* START Card Footer */}
                            <CardFooter className="text-center">
                                <a href="#">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add Task
                                </a>
                            </CardFooter>
                            { /* END Card Footer */}
                        </Card>
                        { /* END Card */}
                        { /* START Card */}
                        <Card>
                            <CardBody>
                                { /* START Card Header */}
                                <div className="mb-4">
                                    <CardTitle tag="h6">
                                        Done
                                        <Badge pill color="secondary" className="ml-2">
                                            1
                                        </Badge>
                                    </CardTitle>
                                    <span className="small d-flex">
                                        16 Jun 2016 - 23 Aug 2016
                                        <span className="ml-auto">
                                            <a href="#" className="mr-2" id="TooltipSettings">
                                                <i className="fa fa-gear"></i>
                                            </a>
                                            <a href="#" className="mr-2" id="TooltipCollapse">
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            <a href="#" id="TooltipAddNew">
                                                <i className="fa fa-plus"></i>
                                            </a>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Settings
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Collapse
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipAddNew">
                                                Add New
                                            </UncontrolledTooltip>
                                        </span>
                                    </span>
                                </div>
                                { /* END CardHeader */}
                                <TasksCardGrid 
                                    id="6"
                                />
                            </CardBody>
                            { /* START Card Footer */}
                            <CardFooter className="text-center">
                                <a href="#">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add Task
                                </a>
                            </CardFooter>
                            { /* END Card Footer */}
                        </Card>
                        { /* END Card */}
                        { /* START Card */}
                        <Card type="border-dash">
                            <CardBody className="d-flex align-items-center justify-content-center">
                                <a href="#" className="py-5">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add New Column
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */}
                    </CardColumns>
                </Col>
            </Row>
            { /* END Header 1 */}

        </Container>
    </React.Fragment>
);

export default TasksKanban;