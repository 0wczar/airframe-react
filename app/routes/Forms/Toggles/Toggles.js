import React from 'react';

import {
    Row,
    Col,
    Table,
    Container,
    CustomInput
} from './../../../components';
import Toggle from 'react-toggle';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import classes from './Toggles.scss';

export class Toggles extends React.Component {
    state = {
        baconIsReady: true,
        cheeseIsReady: false,
        biscuitIsReady: false,
        eggsAreReady: false,
        milkIsReady: false,
        toastIsReady: false,
        soupIsReady: true,
        tofuIsReady: false
    }

    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Toggles"
                    className="mb-5 mt-4"
                />
                <p className="mb-4">An elegant, accessible toggle component for React. Also a glorified checkbox.</p>
                <Row>
                    <Col lg={ 6 }>
                        <Table>
                            <thead>
                                <tr>
                                    <th>
                                        Switch Name
                                    </th>
                                    <th className="text-right">
                                        Switch Example
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <CustomInput
                                            type="checkbox"
                                            id="controlled-component-check"
                                            checked={ this.state.milkIsReady }
                                            onChange={ () => { this.setState({ milkIsReady: !this.state.milkIsReady }) } }
                                            label="Controlled Component"
                                        />
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            checked={ this.state.milkIsReady }
                                            name='milkIsReady'
                                            value='yes'
                                            onChange={ () => { this.setState({ milkIsReady: !this.state.milkIsReady }) } }/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CustomInput
                                            type="checkbox"
                                            id="controlled-component-check-no-onchange"
                                            checked={ this.state.toastIsReady }
                                            onChange={ () => { this.setState({ toastIsReady: !this.state.toastIsReady }) } }
                                            label="Controlled Component without onChange"
                                        />
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            checked={ this.state.toastIsReady }
                                            name='toastIsReady'
                                            value='yes' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-inverse">
                                        Diabled, Unchecked
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            defaultChecked={false}
                                            disabled={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-inverse">
                                        Disabled, Checked
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            defaultChecked={true}
                                            disabled={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-inverse">
                                        Custom className
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            defaultChecked={this.state.aubergineIsReady}
                                            className={ classes.switchCustomClass }
                                            onChange={this.handleAubergineChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-inverse">
                                        Custom Icons
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            defaultChecked={this.state.soupIsReady}
                                            icons={{
                                                checked: <i className="fa fa-heart text-white" />,
                                                unchecked: null,
                                            }}
                                            onChange={ () => { this.setState({ soupIsReady: !this.state.soupIsReady }) } } />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-inverse">
                                        No Icons
                                    </td>
                                    <td className="text-right">
                                        <Toggle
                                            defaultChecked={this.state.tofuIsReady}
                                            icons={false}
                                            onChange={() => { this.setState({ tofuIsReady: !this.state.tofuIsReady }) }} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col lg={ 6 }>
                        <Table className={ classes.singleTable }>
                            <thead>
                                <tr>
                                    <th>
                                        Switch Example
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className="d-flex align-items-middle mb-0">
                                            <Toggle
                                                defaultChecked={this.state.baconIsReady}
                                                onChange={() => { this.setState({baconIsReady: !this.state.baconIsReady}) }} />
                                            <span className="ml-2 text-inverse">Wrapper label tag</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-flex align-items-middle">
                                        <Toggle
                                            id='cheese-status'
                                            defaultChecked={this.state.cheeseIsReady}
                                            onChange={ () => { this.setState({cheeseIsReady: !this.state.cheeseIsReady}) } } />
                                        <label htmlFor='cheese-status' className="ml-2 mb-0 text-inverse">Adjacent label tag</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-flex align-items-middle">
                                        <Toggle
                                            id='biscuit-status'
                                            defaultChecked={this.state.biscuitIsReady}
                                            aria-labelledby='biscuit-label'
                                            onChange={ () => { this.setState({biscuitIsReady: !this.state.biscuitIsReady}) } } />
                                        <span id='biscuit-label' className="ml-2 text-inverse">Adjacent label, but not standard tag</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-flex align-items-middle">
                                        <Toggle
                                            defaultChecked={this.state.eggsAreReady}
                                            aria-label='No label tag'
                                            onChange={ () => { this.setState({eggsAreReady: !this.state.eggsAreReady}) } } />
                                        <span className="ml-2 text-inverse">No label tag</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
