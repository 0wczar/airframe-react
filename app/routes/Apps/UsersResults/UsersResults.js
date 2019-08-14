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
import { UsersResultsCard } from "../../components/SearchResults/UsersResultsCard";
import { Paginations } from "../../components/Paginations";

const UsersResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Users Results"
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
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
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

export default UsersResults;