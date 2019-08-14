import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactCrop from 'react-image-crop'

import {
    Row,
    Col,
    Button
} from './../../../../components';

const _document = typeof document !== 'undefined' ? document : null;
const _window = typeof window !== 'undefined' ? window : null;

const initialPosition = {
    x: 10,
    y: 10,
    width: 80,
    height: 80,
}

function getCroppedImg(image, pixelCrop, scale, fileName) {
    const canvas = _document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
        image,
        pixelCrop.x * scale.x,
        pixelCrop.y * scale.y,
        pixelCrop.width * scale.x,
        pixelCrop.height * scale.y,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    return new Promise((resolve) => {
        canvas.toBlob(file => {
            file.name = fileName;
            resolve(file);
        }, 'image/jpeg');
    });
  }

export class ExampleProvider extends React.Component {
    static propTypes = {
        cropProps: PropTypes.object,
        src: PropTypes.node.isRequired,
        initialPosition: PropTypes.object
    }

    static defaultProps = {
        cropProps: { }
    }

    state = {
        position: _.clone(this.props.initialPosition || initialPosition),
        croppedPosition: _.clone(this.props.initialPosition || initialPosition),
        croppedBlob: null
    }

    cropRef = React.createRef();

    render() {
        const { croppedBlob, position } = this.state;
        const { cropProps, src } = this.props;
        const imageUrl = croppedBlob ? _window.URL.createObjectURL(croppedBlob) : null;

        return (
            <Row>
                <Col lg={ 6 }>
                    <ReactCrop
                        className="d-block"
                        crop={ position }
                        src={ src }
                        onChange={ (position) => { this.setState({ position }) }}
                        onComplete={ (croppedPosition) => { this.setState({ croppedPosition }) } }
                        ref={ this.cropRef }
                        { ...cropProps }
                    />
                </Col>
                <Col lg={ 6 } >
                {
                    (!imageUrl) && (
                        <div className="d-flex align-items-center justify-content-center b-2 b-dashed h-100 p-4">
                            <span className="d-block text-muted text-center">
                                <i className="fa fa-fw fa-info-circle mb-2 fa-2x"></i>
                                <br />
                                Select the part of the image on the left and click &quot;Crop&quot;
                            </span>
                        </div>
                    )
                }
                {
                    imageUrl && (
                        <img
                            src={ imageUrl }
                            alt="Result Image"
                            style={{ maxWidth: '100%' }}
                        />
                    )
                }
                </Col>
                <Col lg={ 12 } className="mt-2">
                    <Button color="primary" onClick={ this._crop }>
                        Crop
                    </Button>
                    <Button color="link" onClick={ this._reset } className="ml-2">
                        Reset
                    </Button>
                </Col>
            </Row>
        )
    }

    _crop = () => {
        const { croppedPosition } = this.state;
        this.setState({ croppedBlob: null });

        if (_document) {
            const imageElement = _document.createElement('img');
            const holderElement = this.cropRef.current.componentRef;
            imageElement.onload = () => {
                const holderSize = holderElement.getBoundingClientRect();
                const scale = {
                    x: imageElement.naturalWidth / (holderSize.right - holderSize.left),
                    y: imageElement.naturalHeight / (holderSize.bottom - holderSize.top),
                };
                getCroppedImg(imageElement, croppedPosition, scale, 'result.jpg')
                    .then((croppedBlob) => {
                        this.setState({croppedBlob});
                    });
            }
            imageElement.src = this.props.src;
        }
    }

    _reset = () => {
        this.setState({
            position: _.clone(this.props.initialPosition || initialPosition),
            croppedPosition: _.clone(this.props.initialPosition || initialPosition),
            croppedBlob: null
        })
    }
}