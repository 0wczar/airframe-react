import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";
import { NavbarExample } from '../../components/Navbars/NavbarExample';

const ExampleWrap = ({ name, children }) => (
    <React.Fragment>
        <div className="small pt-4 pb-2">{ name }</div>
        { children }
    </React.Fragment>
);
ExampleWrap.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
};

const Navbars = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Navbars"
                className="display-4 mb-3 mt-2"
            />

            <p className="mt-4">
                Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
            </p>

            { /* START Light */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Navbars Light" 
                    >
                        Theming the navbar has never been easier thanks to Theme Providers. Wrap the <code>Navbar</code> with a <code>NavbarThemeProvider</code> component and set <code>style=&quot;light&quot;</code> and <code>color=&quot;&lt;desired color&gt;&quot;</code>.
                    </HeaderDemo>

                    <ExampleWrap name="Navbar Default #1.01">
                        <NavbarExample themeStyle="light" themeColor="primary" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Pills #1.02">
                        <NavbarExample themeStyle="light" themeColor="success" navStyle="pills" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Accent #1.03">
                        <NavbarExample themeStyle="light" themeColor="info" navStyle="accent" />
                    </ExampleWrap>
                </Col>
            </Row>
            { /* END Light */}

            { /* START Dark */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Navbars Dark"
                        className="mt-5"
                    >
                        Theming the navbar has never been easier thanks to Theme Providers. Wrap the <code>Navbar</code> with a <code>NavbarThemeProvider</code> component and set <code>style=&quot;dark&quot;</code> and <code>color=&quot;&lt;desired color&gt;&quot;</code>.
                    </HeaderDemo>

                    <ExampleWrap name="Navbar Default #2.01">
                        <NavbarExample themeStyle="dark" themeColor="primary" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Pills #2.02">
                        <NavbarExample themeStyle="dark" themeColor="success" navStyle="pills" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Accent #2.03">
                        <NavbarExample themeStyle="dark" themeColor="info" navStyle="accent" />
                    </ExampleWrap>
                </Col>
            </Row>
            { /* END Dark */}

            { /* START Color */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Navbars Color"
                        className="mt-5"
                    >
                        Theming the navbar has never been easier thanks to Theme Providers. Wrap the <code>Navbar</code> with a <code>NavbarThemeProvider</code> component and set <code>style=&quot;color&quot;</code> and <code>color=&quot;&lt;desired color&gt;&quot;</code>.
                    </HeaderDemo>

                    <ExampleWrap name="Navbar Default #3.01">
                        <NavbarExample themeStyle="color" themeColor="primary" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Pills #3.02">
                        <NavbarExample themeStyle="color" themeColor="success" navStyle="pills" />
                    </ExampleWrap>

                    <ExampleWrap name="Navbar Accent #3.03">
                        <NavbarExample themeStyle="color" themeColor="info" navStyle="accent" />
                    </ExampleWrap>
                </Col>
            </Row>
            { /* END Color */}
        </Container>
    </React.Fragment>
);

export default Navbars;