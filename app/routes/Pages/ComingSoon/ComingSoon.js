import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    InputGroupAddon,
    InputGroup,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const ComingSoon = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Coming Soon"
                icon="clock-o"
                text="Our website is under construction. Still, the app is not ready, but we're working hard on it and will be available for around:"
            />
            { /* END Header */}
            <ul className="list-inline my-5 text-center">
                <li className="list-inline-item text-center mr-2">
                    <h2 className="mb-0">16</h2>
                    <div>Days</div>
                </li>
                <li className="list-inline-item text-center mr-2">
                    <h2 className="mb-0">34</h2>
                    <div>Hours</div>
                </li>
                <li className="list-inline-item text-center mr-2">
                    <h2 className="mb-0">10</h2>
                    <div>Min</div>
                </li>
                <li className="list-inline-item text-center">
                    <h2 className="mb-0">3</h2>
                    <div>Sec</div>
                </li>
            </ul>
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="email">
                        Enter email
                    </Label>
                    <InputGroup>
                        <Input type="email" name="email" id="email" placeholder="Enter here..." />
                        <InputGroupAddon addonType="append">
                            <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={ color } tag={ Link } to="/">
                                        Subscribe
                                    </Button>
                                )
                            }
                            </ThemeConsumer>
                        </InputGroupAddon>
                    </InputGroup>
                    <FormText className="muted">
                        If you want to be informed about the start, please subscribe to the newsletter
                    </FormText>
                </FormGroup>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/" className="text-decoration-none">
                    <i className="fa fa-angle-left mr-2" /> Back to Home
                </Link>
                <Link to="/" className="ml-auto text-decoration-none">
                    Contact
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default ComingSoon;
