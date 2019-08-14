import React from 'react';
import _ from 'lodash';

import { CardColumns } from './../../../components';
import { ProjectsCardGrid } from "../../components/Projects/ProjectsCardGrid";
import { Paginations } from "../../components/Paginations";

const ProjectsGrid = () => (
    <React.Fragment>
        <CardColumns>
        {
            _.times(12, (index) => (
                <ProjectsCardGrid key={ index } />
            ))
        }
        </CardColumns>
        <div className="d-flex justify-content-center">
            <Paginations />
        </div>
    </React.Fragment>
);

export default ProjectsGrid;