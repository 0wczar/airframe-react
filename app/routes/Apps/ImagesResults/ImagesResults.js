import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { SearchResultsLeftNav } from "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../components/SearchResults/SearchResultsHeader";
import { ImagesResultsCard } from "../../components/SearchResults/ImagesResultsCard";
import { Paginations } from "../../components/Paginations";

const ImagesResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Images Results"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <CardColumns>
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                    </CardColumns>
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default ImagesResults;