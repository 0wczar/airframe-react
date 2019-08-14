import React from 'react';

import { CardColumns } from './../../../components';
import { Paginations } from "../../components/Paginations";
import { TasksCardGrid } from "../../components/Tasks/TasksCardGrid";

const TasksGrid = () => (
    <React.Fragment>
        <CardColumns>
            <TasksCardGrid />
            <TasksCardGrid 
                id="2"
            />
            <TasksCardGrid 
                id="3"
            />
            <TasksCardGrid 
                id="4"
            />
            <TasksCardGrid 
                id="5"
            />
            <TasksCardGrid 
                id="6"
            />
            <TasksCardGrid 
                id="7"
            />
            <TasksCardGrid 
                id="8"
            />
            <TasksCardGrid 
                id="9"
            />
        </CardColumns>
        <div className="d-flex justify-content-center">
            <Paginations />
        </div>
    </React.Fragment>
);

export default TasksGrid;