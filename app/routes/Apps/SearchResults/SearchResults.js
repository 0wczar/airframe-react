import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { SearchResultsLeftNav } from
    "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from
    "../../components/SearchResults/SearchResultsHeader";
import { SearchResultsCard } from
    "../../components/SearchResults/SearchResultsCard";
import { Paginations } from "../../components/Paginations";

const SearchResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Search Results"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default SearchResults;
