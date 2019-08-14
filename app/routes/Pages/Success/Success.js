import React from 'react';
import { Link } from 'react-router-dom';

import {
    EmptyLayout
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Success = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Successful Activated"
                icon="check"
                iconClassName="text-success"
                text={(
                    <React.Fragment>
                        To activate your account, please click the link in the activation email which has been sent to you. If you do not see the activation email in your inbox, you may need to check your spam/junk email folders.
                    </React.Fragment>
                )}
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <Link to="/" className="text-decoration-none">
                    <i className="fa fa-angle-left mr-2"></i>Back to Home
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Success;
