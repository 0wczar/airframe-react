import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import faker from 'faker/locale/en_US';
import _ from 'lodash';

import {
    Container,
    Row,
    Button,
    CardBody,
    Col,
    CardHeader,
    Card,
    CardFooter,
    Media,
    FormGroup,
    CustomInput
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

const positions = [
    { label: 'top-left', value: 'top-left' },
    { label: 'top-right', value: 'top-right' },
    { label: 'top-center', value: 'top-center' },
    { label: 'bottom-left', value: 'bottom-left' },
    { label: 'bottom-right', value: 'bottom-right' },
    { label: 'bottom-center', value: 'bottom-center' },
];

const types = [
    { label: 'info', value: 'info' },
    { label: 'success', value: 'success' },
    { label: 'warning', value: 'warning' },
    { label: 'error', value: 'error' },
    { label: 'default', value: 'default' },
];

const initialState = {
    position: 'top-right',
    type: 'default'
}

// ========== Toast Contents: ============
// eslint-disable-next-line react/prop-types
const contentSuccess = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-check"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Success!
            </Media>
            <p>
                You successfully read this important alert message.
            </p>
            <div className="d-flex mt-2">
                <Button color="success" onClick={() => { closeToast }} >
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-success">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentError = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-close"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Danger!
            </Media>
            <p>
                Change a few things up and try submitting.
            </p>
            <div className="d-flex mt-2">
                <Button color="danger" onClick={() => { closeToast }}>
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-danger">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentInfo = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-info"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Information!
            </Media>
            <p>
                This alert needs your attention, but it's not important.
            </p>
            <div className="d-flex mt-2">
                <Button color="primary" onClick={() => { closeToast }} >
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-primary">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentWarning = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-exclamation"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Warning!
            </Media>
            <p>
                Better check yourself, you're not looking too good.
            </p>
            <div className="d-flex mt-2">
                <Button color="warning" onClick={() => { closeToast }} className="text-white">
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-warning">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentDefault = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-question"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Attention!
            </Media>
            <p>
                This alert needs your attention, but it's not important.
            </p>
            <div className="d-flex mt-2">
                <Button color="secondary" onClick={() => { closeToast }} className="text-white">
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-secondary">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);

// ========== Component: ============
export class Notifications extends React.Component {
    state = _.clone(initialState);

    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Notifications"
                    className="mb-4 mt-4"
                />
                <p>
                    <strong>React-Toastify</strong> allow you to add notification to your app with ease.<br/>
                    Specially written CSS are available in: <code>/app/styles/plugins/_react-toastify.scss</code>
                </p>
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-2">
                            <FormGroup>
                                <h6 className="mb-3">Position</h6>
                                {
                                    _.map(positions, (position) => (
                                        <CustomInput
                                            label={ position.label }
                                            checked={ position.value === this.state.position }
                                            onChange={ () => { this.setState({position: position.value}) } }
                                            type="radio"
                                            key={`pos-${position.value}`}
                                            id={`pos-${position.value}`}
                                        />
                                    ))
                                }
                            </FormGroup>
                            <FormGroup className="ml-5">
                                <h6 className="mb-3">Type</h6>
                                {
                                    _.map(types, (type) => (
                                        <CustomInput
                                            label={ type.label }
                                            checked={ type.value === this.state.type }
                                            onChange={ () => { this.setState({type: type.value}) } }
                                            type="radio"
                                            key={`pos-${type.value}`}
                                            id={`pos-${type.value}`}
                                        />
                                    ))
                                }
                            </FormGroup>
                        </div>
                        <div className="d-flex ">
                            <Button color="primary" onClick={ this._showHandler }>
                                Show Toast
                            </Button>
                            <Button color="link" onClick={ this._clearHandler } className="ml-2">
                                Clear All
                            </Button>
                            <Button color="link" onClick={ this._resetHandler } className="ml-2">
                                Reset
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                <ToastContainer 
                    position={this.state.position}
                    autoClose={50000}
                    draggable={false}
                    hideProgressBar={true}
                />
            </Container>
        );
    }

    _showHandler = () => {
        switch(this.state.type) {
            case 'info':
                toast.info(contentInfo);
            break;
            case 'success':
                toast.success(contentSuccess);
            break;
            case 'warning':
                toast.warning(contentWarning);
            break;
            case 'error':
                toast.error(contentError);
            break;
            default:
                toast(contentDefault);
            break;
        }
    }

    _clearHandler = () => {
        toast.dismiss();
    }

    _resetHandler = () => {
        this.setState(initialState);
    }
}
