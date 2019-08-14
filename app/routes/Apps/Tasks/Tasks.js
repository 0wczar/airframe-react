import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import TasksList from './TasksList';
import TasksGrid from './TasksGrid';
import { ProjectsLeftNav } from "../../components/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";

const Tasks = (props) => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tasks"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader
                        subTitle="Projects"
                            subTitleLink="/apps/projects/list"
                        title={props.match.params.type === "list"?"Tasks List":"Tasks Grid"} 
                        linkList="/apps/tasks/list"
                        linkGrid="/apps/tasks/grid"
                        btnShowKanban
                    />

                    { 
                        props.match.params.type === "list" ?
                            <TasksList /> :
                            <TasksGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Tasks.propTypes = {
    match: PropTypes.object.isRequired
};

export default Tasks;