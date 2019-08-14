import React from 'react';

import { 
    Container,
    Row,
    Table,
    CardFooter,
    Card,
    Col
} from './../../../components';


import { HeaderMain } from "../../components/HeaderMain";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { Paginations } from "../../components/Paginations";

import { TrTableGalleryList } from "./components/TrTableGalleryList";

const GalleryTable = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Gallery Table"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                    <ProjectsSmHeader 
                        subTitle="Gallery Table"
                        linkList="/apps/gallery-table"
                        linkGrid="/apps/gallery-grid"
                    />
                    <Card>
                        { /* START Table */}
                        <Table className="mb-0" hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Thumb</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Date</th>
                                    <th>Info</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableGalleryList />
                                <TrTableGalleryList 
                                    id="2"
                                />
                                <TrTableGalleryList 
                                    id="3"
                                />
                                <TrTableGalleryList 
                                    id="4"
                                />
                                <TrTableGalleryList 
                                    id="5"
                                />
                                <TrTableGalleryList 
                                    id="6"
                                />
                                <TrTableGalleryList 
                                    id="7"
                                />
                                <TrTableGalleryList 
                                    id="8"
                                />
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center pb-0">
                            <Paginations />    
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default GalleryTable;