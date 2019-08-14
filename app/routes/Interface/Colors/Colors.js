import React from 'react';

import {
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import { HeaderDemo } from "../../components/HeaderDemo";
import { CardRgbaColor } from "../../components/Colors/CardRgbaColor";
import { CardColor } from "../../components/Colors/CardColor";

const Colors = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Colors"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Colors" 
                        subTitle="Use any of these color variables as they are or reassign them to more meaningful variables for your project."
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="primary"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="info"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="success"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="warning"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="danger"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="secondary"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="dark"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="light"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="white"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="All Colors" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                All colors available in Bootstrap 4, available as Sass variables and a Sass map in our <code>scss/_variables.scss</code> file.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="blue"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="indigo"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="purple"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="pink"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="red"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="orange"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="yellow"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="green"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="teal"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="cyan"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="RGBA Colors" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Main Colors with Opacity from 0.1 to 0.9 for example <code>.text-primary-100</code>, cod.bg-primary-200 or .b-primary-300
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="primary"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="info"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="success"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="warning"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="danger"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="yellow"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="purple"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="secondary"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="dark"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        cardClass="bg-dark b-0"
                        color="light"
                    />
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="All Colors" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                All colors available in Bootstrap 4, available as Sass variables and a Sass map in our <code>scss/_variables.scss</code> file.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="facebook"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="twitter"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="lastfm"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="pinterest"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="linkedin"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="medium"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="skype"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="foursquare"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="android"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="spotify"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="youtube"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="windows"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="amazon"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Gray & White RGBA" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Very helpful colors useful in the design of 
                                elements on bright backgrounds.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor 
                        color="black"
                    />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    <CardRgbaColor
                        cardClass="bg-dark b-0"
                        color="white"
                    />
                </Col>
            </Row>
            { /* END Section 5 */}
        </Container>
    </React.Fragment>
);

export default Colors;