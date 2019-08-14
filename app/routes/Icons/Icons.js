import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody
} from './../../components';
import { HeaderMain } from "../components/HeaderMain";
import {
    HeaderDemo
} from "../components/HeaderDemo";

const Icons = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Icons"
                className="mb-5 mt-4"
            />
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        30 New Icons in 4.6
                        <span className="small ml-1 text-muted">
                            #1.01
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-american-sign-language-interpreting" aria-hidden="true"></i> american-sign-language-interpreting</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-asl-interpreting" aria-hidden="true"></i> asl-interpreting <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-assistive-listening-systems" aria-hidden="true"></i> assistive-listening-systems</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-audio-description" aria-hidden="true"></i> audio-description</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-blind" aria-hidden="true"></i> blind</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-braille" aria-hidden="true"></i> braille</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deaf" aria-hidden="true"></i> deaf</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deafness" aria-hidden="true"></i> deafness <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-envira" aria-hidden="true"></i> envira</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fa" aria-hidden="true"></i> fa <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-first-order" aria-hidden="true"></i> first-order</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-font-awesome" aria-hidden="true"></i> font-awesome</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gitlab" aria-hidden="true"></i> gitlab</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-glide" aria-hidden="true"></i> glide</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-glide-g" aria-hidden="true"></i> glide-g</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-google-plus-circle" aria-hidden="true"></i> google-plus-circle <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-google-plus-official" aria-hidden="true"></i> google-plus-official</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hard-of-hearing" aria-hidden="true"></i> hard-of-hearing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-instagram" aria-hidden="true"></i> instagram</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-low-vision" aria-hidden="true"></i> low-vision</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-pied-piper" aria-hidden="true"></i> pied-piper</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-question-circle-o" aria-hidden="true"></i> question-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-language" aria-hidden="true"></i> sign-language</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-signing" aria-hidden="true"></i> signing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-snapchat" aria-hidden="true"></i> snapchat</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-snapchat-ghost" aria-hidden="true"></i> snapchat-ghost</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-snapchat-square" aria-hidden="true"></i> snapchat-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-themeisle" aria-hidden="true"></i> themeisle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-universal-access" aria-hidden="true"></i> universal-access</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-viadeo" aria-hidden="true"></i> viadeo</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-viadeo-square" aria-hidden="true"></i> viadeo-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-control-phone" aria-hidden="true"></i> volume-control-phone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair-alt" aria-hidden="true"></i> wheelchair-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wpbeginner" aria-hidden="true"></i> wpbeginner</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wpforms" aria-hidden="true"></i> wpforms</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-yoast" aria-hidden="true"></i> yoast</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Web Application Icons
                        <span className="small ml-1 text-muted">
                            #1.02
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fw fa-adjust" aria-hidden="true"></i> adjust</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fw fa-american-sign-language-interpreting" aria-hidden="true"></i> american-sign-language-interpreting</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fw fa-anchor" aria-hidden="true"></i> anchor</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-archive" aria-hidden="true"></i> archive</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-area-chart" aria-hidden="true"></i> area-chart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows" aria-hidden="true"></i> arrows</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-h" aria-hidden="true"></i> arrows-h</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-v" aria-hidden="true"></i> arrows-v</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-asl-interpreting" aria-hidden="true"></i> asl-interpreting <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-assistive-listening-systems" aria-hidden="true"></i> assistive-listening-systems</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-asterisk" aria-hidden="true"></i> asterisk</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-at" aria-hidden="true"></i> at</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-audio-description" aria-hidden="true"></i> audio-description</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-automobile" aria-hidden="true"></i> automobile <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-balance-scale" aria-hidden="true"></i> balance-scale</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ban" aria-hidden="true"></i> ban</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bank" aria-hidden="true"></i> bank <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart" aria-hidden="true"></i> bar-chart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart-o" aria-hidden="true"></i> bar-chart-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-barcode" aria-hidden="true"></i> barcode</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bars" aria-hidden="true"></i> bars</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-0" aria-hidden="true"></i> battery-0 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-1" aria-hidden="true"></i> battery-1 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-2" aria-hidden="true"></i> battery-2 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-3" aria-hidden="true"></i> battery-3 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-4" aria-hidden="true"></i> battery-4 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-empty" aria-hidden="true"></i> battery-empty</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-full" aria-hidden="true"></i> battery-full</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-half" aria-hidden="true"></i> battery-half</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-quarter" aria-hidden="true"></i> battery-quarter</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-three-quarters" aria-hidden="true"></i> battery-three-quarters</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bed" aria-hidden="true"></i> bed</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-beer" aria-hidden="true"></i> beer</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bell" aria-hidden="true"></i> bell</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-o" aria-hidden="true"></i> bell-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-slash" aria-hidden="true"></i> bell-slash</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-slash-o" aria-hidden="true"></i> bell-slash-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bicycle" aria-hidden="true"></i> bicycle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-binoculars" aria-hidden="true"></i> binoculars</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-birthday-cake" aria-hidden="true"></i> birthday-cake</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-blind" aria-hidden="true"></i> blind</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bluetooth" aria-hidden="true"></i> bluetooth</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bluetooth-b" aria-hidden="true"></i> bluetooth-b</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bolt" aria-hidden="true"></i> bolt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bomb" aria-hidden="true"></i> bomb</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-book" aria-hidden="true"></i> book</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bookmark" aria-hidden="true"></i> bookmark</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bookmark-o" aria-hidden="true"></i> bookmark-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-braille" aria-hidden="true"></i> braille</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-briefcase" aria-hidden="true"></i> briefcase</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bug" aria-hidden="true"></i> bug</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-building" aria-hidden="true"></i> building</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-building-o" aria-hidden="true"></i> building-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bullhorn" aria-hidden="true"></i> bullhorn</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bullseye" aria-hidden="true"></i> bullseye</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bus" aria-hidden="true"></i> bus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cab" aria-hidden="true"></i> cab <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calculator" aria-hidden="true"></i> calculator</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> calendar</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-check-o" aria-hidden="true"></i> calendar-check-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-minus-o" aria-hidden="true"></i> calendar-minus-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-o" aria-hidden="true"></i> calendar-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-plus-o" aria-hidden="true"></i> calendar-plus-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-times-o" aria-hidden="true"></i> calendar-times-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-camera" aria-hidden="true"></i> camera</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-camera-retro" aria-hidden="true"></i> camera-retro</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-car" aria-hidden="true"></i> car</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-down" aria-hidden="true"></i> caret-square-o-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-left" aria-hidden="true"></i> caret-square-o-left</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-right" aria-hidden="true"></i> caret-square-o-right</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-up" aria-hidden="true"></i> caret-square-o-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cart-arrow-down" aria-hidden="true"></i> cart-arrow-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cart-plus" aria-hidden="true"></i> cart-plus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cc" aria-hidden="true"></i> cc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-certificate" aria-hidden="true"></i> certificate</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-check" aria-hidden="true"></i> check</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-check-circle" aria-hidden="true"></i> check-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i> check-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square" aria-hidden="true"></i> check-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square-o" aria-hidden="true"></i> check-square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-child" aria-hidden="true"></i> child</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-circle" aria-hidden="true"></i> circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o" aria-hidden="true"></i> circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o-notch" aria-hidden="true"></i> circle-o-notch</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-thin" aria-hidden="true"></i> circle-thin</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-clock-o" aria-hidden="true"></i> clock-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-clone" aria-hidden="true"></i> clone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-close" aria-hidden="true"></i> close <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud" aria-hidden="true"></i> cloud</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud-download" aria-hidden="true"></i> cloud-download</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud-upload" aria-hidden="true"></i> cloud-upload</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-code" aria-hidden="true"></i> code</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-code-fork" aria-hidden="true"></i> code-fork</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-coffee" aria-hidden="true"></i> coffee</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cog" aria-hidden="true"></i> cog</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cogs" aria-hidden="true"></i> cogs</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-comment" aria-hidden="true"></i> comment</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-comment-o" aria-hidden="true"></i> comment-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting" aria-hidden="true"></i> commenting</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting-o" aria-hidden="true"></i> commenting-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-comments" aria-hidden="true"></i> comments</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-comments-o" aria-hidden="true"></i> comments-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-compass" aria-hidden="true"></i> compass</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-copyright" aria-hidden="true"></i> copyright</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-creative-commons" aria-hidden="true"></i> creative-commons</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-credit-card" aria-hidden="true"></i> credit-card</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-credit-card-alt" aria-hidden="true"></i> credit-card-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-crop" aria-hidden="true"></i> crop</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-crosshairs" aria-hidden="true"></i> crosshairs</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cube" aria-hidden="true"></i> cube</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cubes" aria-hidden="true"></i> cubes</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cutlery" aria-hidden="true"></i> cutlery</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-dashboard" aria-hidden="true"></i> dashboard <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-database" aria-hidden="true"></i> database</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deaf" aria-hidden="true"></i> deaf</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deafness" aria-hidden="true"></i> deafness <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-desktop" aria-hidden="true"></i> desktop</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-diamond" aria-hidden="true"></i> diamond</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-dot-circle-o" aria-hidden="true"></i> dot-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-download" aria-hidden="true"></i> download</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-edit" aria-hidden="true"></i> edit <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ellipsis-h" aria-hidden="true"></i> ellipsis-h</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ellipsis-v" aria-hidden="true"></i> ellipsis-v</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope" aria-hidden="true"></i> envelope</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope-o" aria-hidden="true"></i> envelope-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope-square" aria-hidden="true"></i> envelope-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-eraser" aria-hidden="true"></i> eraser</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-exchange" aria-hidden="true"></i> exchange</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation" aria-hidden="true"></i> exclamation</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation-circle" aria-hidden="true"></i> exclamation-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i> exclamation-triangle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-external-link" aria-hidden="true"></i> external-link</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-external-link-square" aria-hidden="true"></i> external-link-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-eye" aria-hidden="true"></i> eye</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-eye-slash" aria-hidden="true"></i> eye-slash</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-eyedropper" aria-hidden="true"></i> eyedropper</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fax" aria-hidden="true"></i> fax</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-feed" aria-hidden="true"></i> feed <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-female" aria-hidden="true"></i> female</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fighter-jet" aria-hidden="true"></i> fighter-jet</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-archive-o" aria-hidden="true"></i> file-archive-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-audio-o" aria-hidden="true"></i> file-audio-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-code-o" aria-hidden="true"></i> file-code-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-excel-o" aria-hidden="true"></i> file-excel-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-image-o" aria-hidden="true"></i> file-image-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-movie-o" aria-hidden="true"></i> file-movie-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-pdf-o" aria-hidden="true"></i> file-pdf-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-photo-o" aria-hidden="true"></i> file-photo-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-picture-o" aria-hidden="true"></i> file-picture-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-powerpoint-o" aria-hidden="true"></i> file-powerpoint-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-sound-o" aria-hidden="true"></i> file-sound-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-video-o" aria-hidden="true"></i> file-video-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-word-o" aria-hidden="true"></i> file-word-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-file-zip-o" aria-hidden="true"></i> file-zip-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-film" aria-hidden="true"></i> film</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-filter" aria-hidden="true"></i> filter</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fire" aria-hidden="true"></i> fire</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fire-extinguisher" aria-hidden="true"></i> fire-extinguisher</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-flag" aria-hidden="true"></i> flag</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-flag-checkered" aria-hidden="true"></i> flag-checkered</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-flag-o" aria-hidden="true"></i> flag-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-flash" aria-hidden="true"></i> flash <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-flask" aria-hidden="true"></i> flask</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-folder" aria-hidden="true"></i> folder</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-o" aria-hidden="true"></i> folder-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-open" aria-hidden="true"></i> folder-open</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-open-o" aria-hidden="true"></i> folder-open-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-frown-o" aria-hidden="true"></i> frown-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-futbol-o" aria-hidden="true"></i> futbol-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gamepad" aria-hidden="true"></i> gamepad</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gavel" aria-hidden="true"></i> gavel</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gear" aria-hidden="true"></i> gear <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gears" aria-hidden="true"></i> gears <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-gift" aria-hidden="true"></i> gift</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-glass" aria-hidden="true"></i> glass</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-globe" aria-hidden="true"></i> globe</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-graduation-cap" aria-hidden="true"></i> graduation-cap</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-group" aria-hidden="true"></i> group <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-grab-o" aria-hidden="true"></i> hand-grab-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-lizard-o" aria-hidden="true"></i> hand-lizard-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-paper-o" aria-hidden="true"></i> hand-paper-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-peace-o" aria-hidden="true"></i> hand-peace-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-pointer-o" aria-hidden="true"></i> hand-pointer-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-rock-o" aria-hidden="true"></i> hand-rock-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-scissors-o" aria-hidden="true"></i> hand-scissors-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-spock-o" aria-hidden="true"></i> hand-spock-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-stop-o" aria-hidden="true"></i> hand-stop-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hard-of-hearing" aria-hidden="true"></i> hard-of-hearing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hashtag" aria-hidden="true"></i> hashtag</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hdd-o" aria-hidden="true"></i> hdd-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-headphones" aria-hidden="true"></i> headphones</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-heart" aria-hidden="true"></i> heart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-heart-o" aria-hidden="true"></i> heart-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-heartbeat" aria-hidden="true"></i> heartbeat</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-history" aria-hidden="true"></i> history</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-home" aria-hidden="true"></i> home</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hotel" aria-hidden="true"></i> hotel <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass" aria-hidden="true"></i> hourglass</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-1" aria-hidden="true"></i> hourglass-1 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-2" aria-hidden="true"></i> hourglass-2 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-3" aria-hidden="true"></i> hourglass-3 <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-end" aria-hidden="true"></i> hourglass-end</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-half" aria-hidden="true"></i> hourglass-half</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-o" aria-hidden="true"></i> hourglass-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-start" aria-hidden="true"></i> hourglass-start</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-i-cursor" aria-hidden="true"></i> i-cursor</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-image" aria-hidden="true"></i> image <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-inbox" aria-hidden="true"></i> inbox</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-industry" aria-hidden="true"></i> industry</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-info" aria-hidden="true"></i> info</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-info-circle" aria-hidden="true"></i> info-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-institution" aria-hidden="true"></i> institution <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-key" aria-hidden="true"></i> key</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-keyboard-o" aria-hidden="true"></i> keyboard-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-language" aria-hidden="true"></i> language</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-laptop" aria-hidden="true"></i> laptop</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-leaf" aria-hidden="true"></i> leaf</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-legal" aria-hidden="true"></i> legal <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-lemon-o" aria-hidden="true"></i> lemon-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-level-down" aria-hidden="true"></i> level-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-level-up" aria-hidden="true"></i> level-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-life-bouy" aria-hidden="true"></i> life-bouy <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-life-buoy" aria-hidden="true"></i> life-buoy <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-life-ring" aria-hidden="true"></i> life-ring</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-life-saver" aria-hidden="true"></i> life-saver <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-lightbulb-o" aria-hidden="true"></i> lightbulb-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-line-chart" aria-hidden="true"></i> line-chart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-location-arrow" aria-hidden="true"></i> location-arrow</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-lock" aria-hidden="true"></i> lock</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-low-vision" aria-hidden="true"></i> low-vision</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-magic" aria-hidden="true"></i> magic</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-magnet" aria-hidden="true"></i> magnet</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-forward" aria-hidden="true"></i> mail-forward <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-reply" aria-hidden="true"></i> mail-reply <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-reply-all" aria-hidden="true"></i> mail-reply-all <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-male" aria-hidden="true"></i> male</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-map" aria-hidden="true"></i> map</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i> map-marker</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-map-o" aria-hidden="true"></i> map-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-map-pin" aria-hidden="true"></i> map-pin</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-map-signs" aria-hidden="true"></i> map-signs</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-meh-o" aria-hidden="true"></i> meh-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-microphone" aria-hidden="true"></i> microphone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-microphone-slash" aria-hidden="true"></i> microphone-slash</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-minus" aria-hidden="true"></i> minus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-circle" aria-hidden="true"></i> minus-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square" aria-hidden="true"></i> minus-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square-o" aria-hidden="true"></i> minus-square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mobile" aria-hidden="true"></i> mobile</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mobile-phone" aria-hidden="true"></i> mobile-phone <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-money" aria-hidden="true"></i> money</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-moon-o" aria-hidden="true"></i> moon-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mortar-board" aria-hidden="true"></i> mortar-board <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-motorcycle" aria-hidden="true"></i> motorcycle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mouse-pointer" aria-hidden="true"></i> mouse-pointer</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-music" aria-hidden="true"></i> music</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-navicon" aria-hidden="true"></i> navicon <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-newspaper-o" aria-hidden="true"></i> newspaper-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-object-group" aria-hidden="true"></i> object-group</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-object-ungroup" aria-hidden="true"></i> object-ungroup</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-paint-brush" aria-hidden="true"></i> paint-brush</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-paper-plane" aria-hidden="true"></i> paper-plane</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-paper-plane-o" aria-hidden="true"></i> paper-plane-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-paw" aria-hidden="true"></i> paw</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil" aria-hidden="true"></i> pencil</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil-square" aria-hidden="true"></i> pencil-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i> pencil-square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-percent" aria-hidden="true"></i> percent</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-phone" aria-hidden="true"></i> phone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-phone-square" aria-hidden="true"></i> phone-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-photo" aria-hidden="true"></i> photo <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-picture-o" aria-hidden="true"></i> picture-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-pie-chart" aria-hidden="true"></i> pie-chart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plane" aria-hidden="true"></i> plane</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plug" aria-hidden="true"></i> plug</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plus" aria-hidden="true"></i> plus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-circle" aria-hidden="true"></i> plus-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square" aria-hidden="true"></i> plus-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square-o" aria-hidden="true"></i> plus-square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-power-off" aria-hidden="true"></i> power-off</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-print" aria-hidden="true"></i> print</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-puzzle-piece" aria-hidden="true"></i> puzzle-piece</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-qrcode" aria-hidden="true"></i> qrcode</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-question" aria-hidden="true"></i> question</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-question-circle" aria-hidden="true"></i> question-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-question-circle-o" aria-hidden="true"></i> question-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-quote-left" aria-hidden="true"></i> quote-left</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-quote-right" aria-hidden="true"></i> quote-right</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-random" aria-hidden="true"></i> random</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-recycle" aria-hidden="true"></i> recycle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-refresh" aria-hidden="true"></i> refresh</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-registered" aria-hidden="true"></i> registered</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-remove" aria-hidden="true"></i> remove <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-reorder" aria-hidden="true"></i> reorder <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-reply" aria-hidden="true"></i> reply</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-reply-all" aria-hidden="true"></i> reply-all</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-retweet" aria-hidden="true"></i> retweet</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-road" aria-hidden="true"></i> road</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-rocket" aria-hidden="true"></i> rocket</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-rss" aria-hidden="true"></i> rss</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-rss-square" aria-hidden="true"></i> rss-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-search" aria-hidden="true"></i> search</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-search-minus" aria-hidden="true"></i> search-minus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-search-plus" aria-hidden="true"></i> search-plus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-send" aria-hidden="true"></i> send <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-send-o" aria-hidden="true"></i> send-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-server" aria-hidden="true"></i> server</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-share" aria-hidden="true"></i> share</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt" aria-hidden="true"></i> share-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt-square" aria-hidden="true"></i> share-alt-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-share-square" aria-hidden="true"></i> share-square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-share-square-o" aria-hidden="true"></i> share-square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-shield" aria-hidden="true"></i> shield</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ship" aria-hidden="true"></i> ship</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-shopping-bag" aria-hidden="true"></i> shopping-bag</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-shopping-basket" aria-hidden="true"></i> shopping-basket</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-shopping-cart" aria-hidden="true"></i> shopping-cart</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-in" aria-hidden="true"></i> sign-in</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-language" aria-hidden="true"></i> sign-language</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-out" aria-hidden="true"></i> sign-out</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-signal" aria-hidden="true"></i> signal</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-signing" aria-hidden="true"></i> signing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sitemap" aria-hidden="true"></i> sitemap</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sliders" aria-hidden="true"></i> sliders</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-smile-o" aria-hidden="true"></i> smile-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-soccer-ball-o" aria-hidden="true"></i> soccer-ball-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort" aria-hidden="true"></i> sort</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-alpha-asc" aria-hidden="true"></i> sort-alpha-asc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-alpha-desc" aria-hidden="true"></i> sort-alpha-desc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-amount-asc" aria-hidden="true"></i> sort-amount-asc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-amount-desc" aria-hidden="true"></i> sort-amount-desc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-asc" aria-hidden="true"></i> sort-asc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-desc" aria-hidden="true"></i> sort-desc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-down" aria-hidden="true"></i> sort-down <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-numeric-asc" aria-hidden="true"></i> sort-numeric-asc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-numeric-desc" aria-hidden="true"></i> sort-numeric-desc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-up" aria-hidden="true"></i> sort-up <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-space-shuttle" aria-hidden="true"></i> space-shuttle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-spinner" aria-hidden="true"></i> spinner</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-spoon" aria-hidden="true"></i> spoon</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-square" aria-hidden="true"></i> square</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-square-o" aria-hidden="true"></i> square-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star" aria-hidden="true"></i> star</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half" aria-hidden="true"></i> star-half</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-empty" aria-hidden="true"></i> star-half-empty <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-full" aria-hidden="true"></i> star-half-full <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-o" aria-hidden="true"></i> star-half-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-star-o" aria-hidden="true"></i> star-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note" aria-hidden="true"></i> sticky-note</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note-o" aria-hidden="true"></i> sticky-note-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-street-view" aria-hidden="true"></i> street-view</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-suitcase" aria-hidden="true"></i> suitcase</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sun-o" aria-hidden="true"></i> sun-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-support" aria-hidden="true"></i> support <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tablet" aria-hidden="true"></i> tablet</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tachometer" aria-hidden="true"></i> tachometer</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tag" aria-hidden="true"></i> tag</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tags" aria-hidden="true"></i> tags</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tasks" aria-hidden="true"></i> tasks</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-taxi" aria-hidden="true"></i> taxi</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-television" aria-hidden="true"></i> television</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-terminal" aria-hidden="true"></i> terminal</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumb-tack" aria-hidden="true"></i> thumb-tack</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-down" aria-hidden="true"></i> thumbs-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-down" aria-hidden="true"></i> thumbs-o-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-up" aria-hidden="true"></i> thumbs-o-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-up" aria-hidden="true"></i> thumbs-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ticket" aria-hidden="true"></i> ticket</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-times" aria-hidden="true"></i> times</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-times-circle" aria-hidden="true"></i> times-circle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i> times-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tint" aria-hidden="true"></i> tint</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-down" aria-hidden="true"></i> toggle-down <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-left" aria-hidden="true"></i> toggle-left <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-off" aria-hidden="true"></i> toggle-off</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-on" aria-hidden="true"></i> toggle-on</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-right" aria-hidden="true"></i> toggle-right <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-up" aria-hidden="true"></i> toggle-up <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-trademark" aria-hidden="true"></i> trademark</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-trash" aria-hidden="true"></i> trash</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-trash-o" aria-hidden="true"></i> trash-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tree" aria-hidden="true"></i> tree</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-trophy" aria-hidden="true"></i> trophy</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-truck" aria-hidden="true"></i> truck</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tty" aria-hidden="true"></i> tty</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tv" aria-hidden="true"></i> tv <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-umbrella" aria-hidden="true"></i> umbrella</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-universal-access" aria-hidden="true"></i> universal-access</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-university" aria-hidden="true"></i> university</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-unlock" aria-hidden="true"></i> unlock</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-unlock-alt" aria-hidden="true"></i> unlock-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-unsorted" aria-hidden="true"></i> unsorted <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-upload" aria-hidden="true"></i> upload</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-user" aria-hidden="true"></i> user</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-user-plus" aria-hidden="true"></i> user-plus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-user-secret" aria-hidden="true"></i> user-secret</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-user-times" aria-hidden="true"></i> user-times</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-users" aria-hidden="true"></i> users</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-video-camera" aria-hidden="true"></i> video-camera</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-control-phone" aria-hidden="true"></i> volume-control-phone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-down" aria-hidden="true"></i> volume-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-off" aria-hidden="true"></i> volume-off</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-up" aria-hidden="true"></i> volume-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-warning" aria-hidden="true"></i> warning <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair" aria-hidden="true"></i> wheelchair</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair-alt" aria-hidden="true"></i> wheelchair-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wifi" aria-hidden="true"></i> wifi</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wrench" aria-hidden="true"></i> wrench</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Accessibility Icons
                        <span className="small ml-1 text-muted">
                            #1.03
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-american-sign-language-interpreting" aria-hidden="true"></i> american-sign-language-interpreting</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-asl-interpreting" aria-hidden="true"></i> asl-interpreting <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-assistive-listening-systems" aria-hidden="true"></i> assistive-listening-systems</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-audio-description" aria-hidden="true"></i> audio-description</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-blind" aria-hidden="true"></i> blind</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-braille" aria-hidden="true"></i> braille</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cc" aria-hidden="true"></i> cc</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deaf" aria-hidden="true"></i> deaf</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-deafness" aria-hidden="true"></i> deafness <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hard-of-hearing" aria-hidden="true"></i> hard-of-hearing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-low-vision" aria-hidden="true"></i> low-vision</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-question-circle-o" aria-hidden="true"></i> question-circle-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-language" aria-hidden="true"></i> sign-language</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-signing" aria-hidden="true"></i> signing <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-tty" aria-hidden="true"></i> tty</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-universal-access" aria-hidden="true"></i> universal-access</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-control-phone" aria-hidden="true"></i> volume-control-phone</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair" aria-hidden="true"></i> wheelchair</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair-alt" aria-hidden="true"></i> wheelchair-alt</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Hand Icons
                        <span className="small ml-1 text-muted">
                            #1.04
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-grab-o" aria-hidden="true"></i> hand-grab-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-lizard-o" aria-hidden="true"></i> hand-lizard-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-down" aria-hidden="true"></i> hand-o-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-left" aria-hidden="true"></i> hand-o-left</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-right" aria-hidden="true"></i> hand-o-right</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-up" aria-hidden="true"></i> hand-o-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-paper-o" aria-hidden="true"></i> hand-paper-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-peace-o" aria-hidden="true"></i> hand-peace-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-pointer-o" aria-hidden="true"></i> hand-pointer-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-rock-o" aria-hidden="true"></i> hand-rock-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-scissors-o" aria-hidden="true"></i> hand-scissors-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-spock-o" aria-hidden="true"></i> hand-spock-o</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-stop-o" aria-hidden="true"></i> hand-stop-o <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-down" aria-hidden="true"></i> thumbs-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-down" aria-hidden="true"></i> thumbs-o-down</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-up" aria-hidden="true"></i> thumbs-o-up</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-up" aria-hidden="true"></i> thumbs-up</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Transportation Icons
                        <span className="small ml-1 text-muted">
                            #1.05
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ambulance" aria-hidden="true"></i> ambulance</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-automobile" aria-hidden="true"></i> automobile <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bicycle" aria-hidden="true"></i> bicycle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-bus" aria-hidden="true"></i> bus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-cab" aria-hidden="true"></i> cab <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-car" aria-hidden="true"></i> car</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-fighter-jet" aria-hidden="true"></i> fighter-jet</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-motorcycle" aria-hidden="true"></i> motorcycle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-plane" aria-hidden="true"></i> plane</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-rocket" aria-hidden="true"></i> rocket</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-ship" aria-hidden="true"></i> ship</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-space-shuttle" aria-hidden="true"></i> space-shuttle</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-subway" aria-hidden="true"></i> subway</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-taxi" aria-hidden="true"></i> taxi</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-train" aria-hidden="true"></i> train</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-truck" aria-hidden="true"></i> truck</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair" aria-hidden="true"></i> wheelchair</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair-alt" aria-hidden="true"></i> wheelchair-alt</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Gender Icons
                        <span className="small ml-1 text-muted">
                            #1.06
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-genderless" aria-hidden="true"></i> genderless</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-intersex" aria-hidden="true"></i> intersex <span className="text-muted">(alias)</span></div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mars" aria-hidden="true"></i> mars</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-double" aria-hidden="true"></i> mars-double</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke" aria-hidden="true"></i> mars-stroke</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke-h" aria-hidden="true"></i> mars-stroke-h</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke-v" aria-hidden="true"></i> mars-stroke-v</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-mercury" aria-hidden="true"></i> mercury</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-neuter" aria-hidden="true"></i> neuter</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-transgender" aria-hidden="true"></i> transgender</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-transgender-alt" aria-hidden="true"></i> transgender-alt</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-venus" aria-hidden="true"></i> venus</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-venus-double" aria-hidden="true"></i> venus-double</div>
                        <div className="fa-hover col-md-3 col-sm-4"><i className="fa fa-fw fa-venus-mars" aria-hidden="true"></i> venus-mars</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        File Type Icons
                        <span className="small ml-1 text-muted">
                            #1.07
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file" aria-hidden="true"></i> file</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-archive-o" aria-hidden="true"></i> file-archive-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-audio-o" aria-hidden="true"></i> file-audio-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-code-o" aria-hidden="true"></i> file-code-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-excel-o" aria-hidden="true"></i> file-excel-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-image-o" aria-hidden="true"></i> file-image-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-movie-o" aria-hidden="true"></i> file-movie-o <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-o" aria-hidden="true"></i> file-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-pdf-o" aria-hidden="true"></i> file-pdf-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-photo-o" aria-hidden="true"></i> file-photo-o <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-picture-o" aria-hidden="true"></i> file-picture-o <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-powerpoint-o" aria-hidden="true"></i> file-powerpoint-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-sound-o" aria-hidden="true"></i> file-sound-o <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text" aria-hidden="true"></i> file-text</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text-o" aria-hidden="true"></i> file-text-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-video-o" aria-hidden="true"></i> file-video-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-word-o" aria-hidden="true"></i> file-word-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-zip-o" aria-hidden="true"></i> file-zip-o <span class="text-muted">(alias)</span></div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}  
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Spinner Icons
                        <span className="small ml-1 text-muted">
                            #1.08
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o-notch" aria-hidden="true"></i> circle-o-notch</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cog" aria-hidden="true"></i> cog</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gear" aria-hidden="true"></i> gear <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-refresh" aria-hidden="true"></i> refresh</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-spinner" aria-hidden="true"></i> spinner</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Form Control Icons
                        <span className="small ml-1 text-muted">
                            #1.09
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square" aria-hidden="true"></i> check-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square-o" aria-hidden="true"></i> check-square-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-circle" aria-hidden="true"></i> circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o" aria-hidden="true"></i> circle-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dot-circle-o" aria-hidden="true"></i> dot-circle-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square" aria-hidden="true"></i> minus-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square-o" aria-hidden="true"></i> minus-square-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square" aria-hidden="true"></i> plus-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square-o" aria-hidden="true"></i> plus-square-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-square" aria-hidden="true"></i> square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-square-o" aria-hidden="true"></i> square-o</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Payment Icons
                        <span className="small ml-1 text-muted">
                            #1.10
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-amex" aria-hidden="true"></i> cc-amex</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-diners-club" aria-hidden="true"></i> cc-diners-club</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-discover" aria-hidden="true"></i> cc-discover</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-jcb" aria-hidden="true"></i> cc-jcb</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-mastercard" aria-hidden="true"></i> cc-mastercard</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-paypal" aria-hidden="true"></i> cc-paypal</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-stripe" aria-hidden="true"></i> cc-stripe</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-visa" aria-hidden="true"></i> cc-visa</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-credit-card" aria-hidden="true"></i> credit-card</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-credit-card-alt" aria-hidden="true"></i> credit-card-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-wallet" aria-hidden="true"></i> google-wallet</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-paypal" aria-hidden="true"></i> paypal</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Chart Icons
                        <span className="small ml-1 text-muted">
                            #1.11
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-area-chart" aria-hidden="true"></i> area-chart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart" aria-hidden="true"></i> bar-chart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart-o" aria-hidden="true"></i> bar-chart-o <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-line-chart" aria-hidden="true"></i> line-chart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pie-chart" aria-hidden="true"></i> pie-chart</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Currency Icons
                        <span className="small ml-1 text-muted">
                            #1.12
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bitcoin" aria-hidden="true"></i> bitcoin <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-btc" aria-hidden="true"></i> btc</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cny" aria-hidden="true"></i> cny <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dollar" aria-hidden="true"></i> dollar <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-eur" aria-hidden="true"></i> eur</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-euro" aria-hidden="true"></i> euro <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gbp" aria-hidden="true"></i> gbp</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gg" aria-hidden="true"></i> gg</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gg-circle" aria-hidden="true"></i> gg-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-ils" aria-hidden="true"></i> ils</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-inr" aria-hidden="true"></i> inr</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-jpy" aria-hidden="true"></i> jpy</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-krw" aria-hidden="true"></i> krw</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-money" aria-hidden="true"></i> money</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rmb" aria-hidden="true"></i> rmb <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rouble" aria-hidden="true"></i> rouble <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rub" aria-hidden="true"></i> rub</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-ruble" aria-hidden="true"></i> ruble <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rupee" aria-hidden="true"></i> rupee <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-shekel" aria-hidden="true"></i> shekel <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-sheqel" aria-hidden="true"></i> sheqel <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-try" aria-hidden="true"></i> try</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-turkish-lira" aria-hidden="true"></i> turkish-lira <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-usd" aria-hidden="true"></i> usd</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-won" aria-hidden="true"></i> won <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yen" aria-hidden="true"></i> yen <span class="text-muted">(alias)</span></div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Text Editor Icons
                        <span className="small ml-1 text-muted">
                            #1.13
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-align-center" aria-hidden="true"></i> align-center</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-align-justify" aria-hidden="true"></i> align-justify</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-align-left" aria-hidden="true"></i> align-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-align-right" aria-hidden="true"></i> align-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bold" aria-hidden="true"></i> bold</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chain" aria-hidden="true"></i> chain <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chain-broken" aria-hidden="true"></i> chain-broken</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-clipboard" aria-hidden="true"></i> clipboard</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-columns" aria-hidden="true"></i> columns</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-copy" aria-hidden="true"></i> copy <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cut" aria-hidden="true"></i> cut <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dedent" aria-hidden="true"></i> dedent <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-eraser" aria-hidden="true"></i> eraser</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file" aria-hidden="true"></i> file</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-o" aria-hidden="true"></i> file-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text" aria-hidden="true"></i> file-text</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text-o" aria-hidden="true"></i> file-text-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-files-o" aria-hidden="true"></i> files-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-floppy-o" aria-hidden="true"></i> floppy-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-font" aria-hidden="true"></i> font</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-header" aria-hidden="true"></i> header</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-indent" aria-hidden="true"></i> indent</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-italic" aria-hidden="true"></i> italic</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-link" aria-hidden="true"></i> link</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-list" aria-hidden="true"></i> list</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-list-alt" aria-hidden="true"></i> list-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-list-ol" aria-hidden="true"></i> list-ol</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-list-ul" aria-hidden="true"></i> list-ul</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-outdent" aria-hidden="true"></i> outdent</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-paperclip" aria-hidden="true"></i> paperclip</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-paragraph" aria-hidden="true"></i> paragraph</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-paste" aria-hidden="true"></i> paste <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-repeat" aria-hidden="true"></i> repeat</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rotate-left" aria-hidden="true"></i> rotate-left <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rotate-right" aria-hidden="true"></i> rotate-right <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-save" aria-hidden="true"></i> save <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-scissors" aria-hidden="true"></i> scissors</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-strikethrough" aria-hidden="true"></i> strikethrough</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-subscript" aria-hidden="true"></i> subscript</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-superscript" aria-hidden="true"></i> superscript</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-table" aria-hidden="true"></i> table</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-text-height" aria-hidden="true"></i> text-height</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-text-width" aria-hidden="true"></i> text-width</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-th" aria-hidden="true"></i> th</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-th-large" aria-hidden="true"></i> th-large</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-th-list" aria-hidden="true"></i> th-list</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-underline" aria-hidden="true"></i> underline</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-undo" aria-hidden="true"></i> undo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-unlink" aria-hidden="true"></i> unlink <span class="text-muted">(alias)</span></div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Directional Icons
                        <span className="small ml-1 text-muted">
                            #1.14
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-down" aria-hidden="true"></i> angle-double-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-left" aria-hidden="true"></i> angle-double-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-right" aria-hidden="true"></i> angle-double-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-up" aria-hidden="true"></i> angle-double-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-down" aria-hidden="true"></i> angle-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-left" aria-hidden="true"></i> angle-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-right" aria-hidden="true"></i> angle-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-up" aria-hidden="true"></i> angle-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-down" aria-hidden="true"></i> arrow-circle-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-left" aria-hidden="true"></i> arrow-circle-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-down" aria-hidden="true"></i> arrow-circle-o-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-left" aria-hidden="true"></i> arrow-circle-o-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-right" aria-hidden="true"></i> arrow-circle-o-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-up" aria-hidden="true"></i> arrow-circle-o-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-right" aria-hidden="true"></i> arrow-circle-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-up" aria-hidden="true"></i> arrow-circle-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-down" aria-hidden="true"></i> arrow-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-left" aria-hidden="true"></i> arrow-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-right" aria-hidden="true"></i> arrow-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-up" aria-hidden="true"></i> arrow-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows" aria-hidden="true"></i> arrows</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-alt" aria-hidden="true"></i> arrows-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-h" aria-hidden="true"></i> arrows-h</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-v" aria-hidden="true"></i> arrows-v</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-down" aria-hidden="true"></i> caret-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-left" aria-hidden="true"></i> caret-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-right" aria-hidden="true"></i> caret-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-down" aria-hidden="true"></i> caret-square-o-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-left" aria-hidden="true"></i> caret-square-o-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-right" aria-hidden="true"></i> caret-square-o-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-up" aria-hidden="true"></i> caret-square-o-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-up" aria-hidden="true"></i> caret-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-down" aria-hidden="true"></i> chevron-circle-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-left" aria-hidden="true"></i> chevron-circle-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-right" aria-hidden="true"></i> chevron-circle-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-up" aria-hidden="true"></i> chevron-circle-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i> chevron-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-left" aria-hidden="true"></i> chevron-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i> chevron-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-up" aria-hidden="true"></i> chevron-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-exchange" aria-hidden="true"></i> exchange</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-down" aria-hidden="true"></i> hand-o-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-left" aria-hidden="true"></i> hand-o-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-right" aria-hidden="true"></i> hand-o-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-up" aria-hidden="true"></i> hand-o-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-down" aria-hidden="true"></i> long-arrow-down</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-left" aria-hidden="true"></i> long-arrow-left</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-right" aria-hidden="true"></i> long-arrow-right</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-up" aria-hidden="true"></i> long-arrow-up</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-down" aria-hidden="true"></i> toggle-down <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-left" aria-hidden="true"></i> toggle-left <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-right" aria-hidden="true"></i> toggle-right <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-up" aria-hidden="true"></i> toggle-up <span class="text-muted">(alias)</span></div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Video Player Icons
                        <span className="small ml-1 text-muted">
                            #1.15
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-alt" aria-hidden="true"></i> arrows-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-backward" aria-hidden="true"></i> backward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-compress" aria-hidden="true"></i> compress</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-eject" aria-hidden="true"></i> eject</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-expand" aria-hidden="true"></i> expand</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-fast-backward" aria-hidden="true"></i> fast-backward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-fast-forward" aria-hidden="true"></i> fast-forward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-forward" aria-hidden="true"></i> forward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pause" aria-hidden="true"></i> pause</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pause-circle" aria-hidden="true"></i> pause-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pause-circle-o" aria-hidden="true"></i> pause-circle-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-play" aria-hidden="true"></i> play</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-play-circle" aria-hidden="true"></i> play-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-play-circle-o" aria-hidden="true"></i> play-circle-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-random" aria-hidden="true"></i> random</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-step-backward" aria-hidden="true"></i> step-backward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-step-forward" aria-hidden="true"></i> step-forward</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stop" aria-hidden="true"></i> stop</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stop-circle" aria-hidden="true"></i> stop-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stop-circle-o" aria-hidden="true"></i> stop-circle-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-play" aria-hidden="true"></i> youtube-play</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Brand Icons
                        <span className="small ml-1 text-muted">
                            #1.16
                        </span>
                    </CardTitle>
                    <Row class="fontawesome-icon-list margin-bottom-lg">
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-500px" aria-hidden="true"></i> 500px</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-adn" aria-hidden="true"></i> adn</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-amazon" aria-hidden="true"></i> amazon</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-android" aria-hidden="true"></i> android</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-angellist" aria-hidden="true"></i> angellist</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-apple" aria-hidden="true"></i> apple</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-behance" aria-hidden="true"></i> behance</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-behance-square" aria-hidden="true"></i> behance-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bitbucket" aria-hidden="true"></i> bitbucket</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bitbucket-square" aria-hidden="true"></i> bitbucket-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bitcoin" aria-hidden="true"></i> bitcoin <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-black-tie" aria-hidden="true"></i> black-tie</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bluetooth" aria-hidden="true"></i> bluetooth</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-bluetooth-b" aria-hidden="true"></i> bluetooth-b</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-btc" aria-hidden="true"></i> btc</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-buysellads" aria-hidden="true"></i> buysellads</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-amex" aria-hidden="true"></i> cc-amex</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-diners-club" aria-hidden="true"></i> cc-diners-club</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-discover" aria-hidden="true"></i> cc-discover</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-jcb" aria-hidden="true"></i> cc-jcb</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-mastercard" aria-hidden="true"></i> cc-mastercard</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-paypal" aria-hidden="true"></i> cc-paypal</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-stripe" aria-hidden="true"></i> cc-stripe</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-visa" aria-hidden="true"></i> cc-visa</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-chrome" aria-hidden="true"></i> chrome</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-codepen" aria-hidden="true"></i> codepen</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-codiepie" aria-hidden="true"></i> codiepie</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-connectdevelop" aria-hidden="true"></i> connectdevelop</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-contao" aria-hidden="true"></i> contao</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-css3" aria-hidden="true"></i> css3</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dashcube" aria-hidden="true"></i> dashcube</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-delicious" aria-hidden="true"></i> delicious</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-deviantart" aria-hidden="true"></i> deviantart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-digg" aria-hidden="true"></i> digg</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dribbble" aria-hidden="true"></i> dribbble</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-dropbox" aria-hidden="true"></i> dropbox</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-drupal" aria-hidden="true"></i> drupal</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-edge" aria-hidden="true"></i> edge</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-empire" aria-hidden="true"></i> empire</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-envira" aria-hidden="true"></i> envira</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-expeditedssl" aria-hidden="true"></i> expeditedssl</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-fa" aria-hidden="true"></i> fa <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook" aria-hidden="true"></i> facebook</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-f" aria-hidden="true"></i> facebook-f <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-official" aria-hidden="true"></i> facebook-official</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-square" aria-hidden="true"></i> facebook-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-firefox" aria-hidden="true"></i> firefox</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-first-order" aria-hidden="true"></i> first-order</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-flickr" aria-hidden="true"></i> flickr</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-font-awesome" aria-hidden="true"></i> font-awesome</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-fonticons" aria-hidden="true"></i> fonticons</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-fort-awesome" aria-hidden="true"></i> fort-awesome</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-forumbee" aria-hidden="true"></i> forumbee</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-foursquare" aria-hidden="true"></i> foursquare</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-ge" aria-hidden="true"></i> ge <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-get-pocket" aria-hidden="true"></i> get-pocket</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gg" aria-hidden="true"></i> gg</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gg-circle" aria-hidden="true"></i> gg-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-git" aria-hidden="true"></i> git</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-git-square" aria-hidden="true"></i> git-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-github" aria-hidden="true"></i> github</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-github-alt" aria-hidden="true"></i> github-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-github-square" aria-hidden="true"></i> github-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gitlab" aria-hidden="true"></i> gitlab</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gittip" aria-hidden="true"></i> gittip <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-glide" aria-hidden="true"></i> glide</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-glide-g" aria-hidden="true"></i> glide-g</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google" aria-hidden="true"></i> google</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus" aria-hidden="true"></i> google-plus</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus-circle" aria-hidden="true"></i> google-plus-circle <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus-official" aria-hidden="true"></i> google-plus-official</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus-square" aria-hidden="true"></i> google-plus-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-google-wallet" aria-hidden="true"></i> google-wallet</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-gratipay" aria-hidden="true"></i> gratipay</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hacker-news" aria-hidden="true"></i> hacker-news</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-houzz" aria-hidden="true"></i> houzz</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-html5" aria-hidden="true"></i> html5</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-instagram" aria-hidden="true"></i> instagram</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-internet-explorer" aria-hidden="true"></i> internet-explorer</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-ioxhost" aria-hidden="true"></i> ioxhost</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-joomla" aria-hidden="true"></i> joomla</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-jsfiddle" aria-hidden="true"></i> jsfiddle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-lastfm" aria-hidden="true"></i> lastfm</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-lastfm-square" aria-hidden="true"></i> lastfm-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-leanpub" aria-hidden="true"></i> leanpub</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-linkedin" aria-hidden="true"></i> linkedin</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-linkedin-square" aria-hidden="true"></i> linkedin-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-linux" aria-hidden="true"></i> linux</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-maxcdn" aria-hidden="true"></i> maxcdn</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-meanpath" aria-hidden="true"></i> meanpath</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-medium" aria-hidden="true"></i> medium</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-mixcloud" aria-hidden="true"></i> mixcloud</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-modx" aria-hidden="true"></i> modx</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki" aria-hidden="true"></i> odnoklassniki</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki-square" aria-hidden="true"></i> odnoklassniki-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-opencart" aria-hidden="true"></i> opencart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-openid" aria-hidden="true"></i> openid</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-opera" aria-hidden="true"></i> opera</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-optin-monster" aria-hidden="true"></i> optin-monster</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pagelines" aria-hidden="true"></i> pagelines</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-paypal" aria-hidden="true"></i> paypal</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pied-piper" aria-hidden="true"></i> pied-piper</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pied-piper-alt" aria-hidden="true"></i> pied-piper-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pied-piper-pp" aria-hidden="true"></i> pied-piper-pp</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest" aria-hidden="true"></i> pinterest</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest-p" aria-hidden="true"></i> pinterest-p</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest-square" aria-hidden="true"></i> pinterest-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-product-hunt" aria-hidden="true"></i> product-hunt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-qq" aria-hidden="true"></i> qq</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-ra" aria-hidden="true"></i> ra <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-rebel" aria-hidden="true"></i> rebel</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-reddit" aria-hidden="true"></i> reddit</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-reddit-alien" aria-hidden="true"></i> reddit-alien</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-reddit-square" aria-hidden="true"></i> reddit-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-renren" aria-hidden="true"></i> renren</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-resistance" aria-hidden="true"></i> resistance <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-safari" aria-hidden="true"></i> safari</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-scribd" aria-hidden="true"></i> scribd</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-sellsy" aria-hidden="true"></i> sellsy</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt" aria-hidden="true"></i> share-alt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt-square" aria-hidden="true"></i> share-alt-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-shirtsinbulk" aria-hidden="true"></i> shirtsinbulk</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-simplybuilt" aria-hidden="true"></i> simplybuilt</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-skyatlas" aria-hidden="true"></i> skyatlas</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-skype" aria-hidden="true"></i> skype</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-slack" aria-hidden="true"></i> slack</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-slideshare" aria-hidden="true"></i> slideshare</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-snapchat" aria-hidden="true"></i> snapchat</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-snapchat-ghost" aria-hidden="true"></i> snapchat-ghost</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-snapchat-square" aria-hidden="true"></i> snapchat-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-soundcloud" aria-hidden="true"></i> soundcloud</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-spotify" aria-hidden="true"></i> spotify</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stack-exchange" aria-hidden="true"></i> stack-exchange</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stack-overflow" aria-hidden="true"></i> stack-overflow</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-steam" aria-hidden="true"></i> steam</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-steam-square" aria-hidden="true"></i> steam-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stumbleupon" aria-hidden="true"></i> stumbleupon</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stumbleupon-circle" aria-hidden="true"></i> stumbleupon-circle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-tencent-weibo" aria-hidden="true"></i> tencent-weibo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-themeisle" aria-hidden="true"></i> themeisle</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-trello" aria-hidden="true"></i> trello</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-tripadvisor" aria-hidden="true"></i> tripadvisor</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-tumblr" aria-hidden="true"></i> tumblr</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-tumblr-square" aria-hidden="true"></i> tumblr-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-twitch" aria-hidden="true"></i> twitch</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-twitter" aria-hidden="true"></i> twitter</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-twitter-square" aria-hidden="true"></i> twitter-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-usb" aria-hidden="true"></i> usb</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-viacoin" aria-hidden="true"></i> viacoin</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-viadeo" aria-hidden="true"></i> viadeo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-viadeo-square" aria-hidden="true"></i> viadeo-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-vimeo" aria-hidden="true"></i> vimeo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-vimeo-square" aria-hidden="true"></i> vimeo-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-vine" aria-hidden="true"></i> vine</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-vk" aria-hidden="true"></i> vk</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wechat" aria-hidden="true"></i> wechat <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-weibo" aria-hidden="true"></i> weibo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-weixin" aria-hidden="true"></i> weixin</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-whatsapp" aria-hidden="true"></i> whatsapp</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wikipedia-w" aria-hidden="true"></i> wikipedia-w</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-windows" aria-hidden="true"></i> windows</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wordpress" aria-hidden="true"></i> wordpress</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wpbeginner" aria-hidden="true"></i> wpbeginner</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wpforms" aria-hidden="true"></i> wpforms</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-xing" aria-hidden="true"></i> xing</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-xing-square" aria-hidden="true"></i> xing-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-y-combinator" aria-hidden="true"></i> y-combinator</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-y-combinator-square" aria-hidden="true"></i> y-combinator-square <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yahoo" aria-hidden="true"></i> yahoo</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yc" aria-hidden="true"></i> yc <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yc-square" aria-hidden="true"></i> yc-square <span class="text-muted">(alias)</span></div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yelp" aria-hidden="true"></i> yelp</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-yoast" aria-hidden="true"></i> yoast</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube" aria-hidden="true"></i> youtube</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-play" aria-hidden="true"></i> youtube-play</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-square" aria-hidden="true"></i> youtube-square</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
            { /* START Card */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-4">
                        Medical Icons
                        <span className="small ml-1 text-muted">
                            #1.17
                        </span>
                    </CardTitle>
                    <Row className="fontawesome-icon-list">
                        <div class="fa-hover col-md-3 col-sm-4">Example of ambulance</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-h-square" aria-hidden="true"></i> h-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-heart" aria-hidden="true"></i> heart</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-heart-o" aria-hidden="true"></i> heart-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-heartbeat" aria-hidden="true"></i> heartbeat</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-hospital-o" aria-hidden="true"></i> hospital-o</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-medkit" aria-hidden="true"></i> medkit</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square" aria-hidden="true"></i> plus-square</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-stethoscope" aria-hidden="true"></i> stethoscope</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-user-md" aria-hidden="true"></i> user-md</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wheelchair" aria-hidden="true"></i> wheelchair</div>
                        <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fw fa-wheelchair-alt" aria-hidden="true"></i> wheelchair-alt</div>
                    </Row>
                </CardBody>
            </Card>
            { /* END Card */}
        </Container>
    </React.Fragment>
);

export default Icons;