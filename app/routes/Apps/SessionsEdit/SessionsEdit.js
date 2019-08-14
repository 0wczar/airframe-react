import React from 'react';

import { 
    Container,
    Row,
    Col,
    Table,
    Card,
    CardBody,
    CardTitle
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { ProfileLeftNav } from "../../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { TrTableResponsive } from "./../../Tables/Tables/components/TrTableResponsive";

const BillingEdit = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Sessions Edit"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                   <ProfileHeader />
                </Col>
                <Col lg={ 3 }>
                    <ProfileLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                           <CardTitle tag="h6" className="mb-0">
                                Billing History
                           </CardTitle>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">#</th>
                                    <th className="bt-0">Browser & OS</th>
                                    <th className="bt-0">IP</th>
                                    <th className="bt-0">Location</th>
                                    <th className="bt-0">Signed In</th>
                                    <th className="text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableResponsive />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default BillingEdit;
