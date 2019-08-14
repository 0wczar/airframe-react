import React from 'react';

import { CardColumns } from './../../../components';
import { FilesCardGrid } from "../../components/Files/FilesCardGrid";
import { Paginations } from "../../components/Paginations";

const FilesGrid = () => (
    <React.Fragment>
        <CardColumns>
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
            <FilesCardGrid />
        </CardColumns>
        <div className="d-flex justify-content-center">
        	<Paginations />
        </div>
    </React.Fragment>
);

export default FilesGrid;