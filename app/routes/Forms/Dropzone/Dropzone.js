import React from 'react';
import classNames from 'classnames';
import FileDrop from 'react-dropzone';
import _ from 'lodash';

import {
    Container,
    Divider,
    Badge,
    Button,
    ButtonGroup
} from './../../../components';
import {
    FilesGrid,
    FilesList
} from './components';

import { HeaderMain } from "../../components/HeaderMain";

export class Dropzone extends React.Component {
    state = {
        isOver: false,
        files: [],
        listStyle: 'grid'
    }

    render() {
        const { isOver, files, listStyle } = this.state;
        const dropzoneClass = classNames({
            'dropzone--active': isOver
        }, 'dropzone');

        return (
            <Container>
                <HeaderMain 
                    title="Dropzone"
                    className="mb-5 mt-4"
                />
                { /*    DropZone    */ }
                <div className="mb-4">
                    <p className="mb-3">
                        Simple HTML5-compliant drag&apos;n&apos;drop zone for files built with React.js.
                    </p>
                    <FileDrop
                        multiple
                        onDragEnter={() => { this.setState({isOver: true}) }}
                        onDragLeave={() => { this.setState({isOver: false}) }}
                        onDrop={this._filesDropped}
                    >
                        {
                            ({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className={dropzoneClass}>
                                    <i className="fa fa-cloud-upload fa-fw fa-3x mb-3"></i>
                                    <h5 className='mt-0'>
                                        Upload Your files
                                    </h5>
                                    <p>
                                        Drag a file here or <span className='text-primary'>browse</span> for a file to upload.
                                    </p>
                                    <p className="small">
                                        JPG, GIF, PNG, MOV, and AVI. Please choose files under 2GB for upload. File sizes are 400x300px.
                                    </p>
                                    <input { ...getInputProps() } />
                                </div>
                            )
                        }
                        
                    </FileDrop>
                </div>
                { /*    Files List    */}
                {
                    files.length > 0 && (
                        <div className="mt-2">
                            <div className="d-flex">
                                <Divider
                                    position="left"
                                    className="flex-shrink-1 flex-grow-1"
                                >
                                    <div className="px-2">
                                        Attachments

                                        <Badge
                                            className="ml-1 text-white"
                                            pill
                                            color="secondary"
                                        >
                                            { files.length }
                                        </Badge>
                                    </div>
                                </Divider>
                                <ButtonGroup className="flex-grow-0 flex-shrink-0 pl-2">
                                    <Button
                                        active={ listStyle === 'list' }
                                        onClick={() => {this.setState({listStyle: 'list'})}}
                                        size="sm"
                                        outline
                                    >
                                        <i className='fa fa-bars fa-fw'></i>
                                    </Button>
                                    <Button
                                        active={ listStyle === 'grid' }
                                        onClick={() => {this.setState({listStyle: 'grid'})}}
                                        size="sm"
                                        outline
                                    >
                                        <i className='fa fa-th-large fa-fw'></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            {
                                listStyle === 'grid' ?
                                    <FilesGrid files={ files } onFileRemove={this._removeFile} /> :
                                    <FilesList files={ files } onFileRemove={this._removeFile} />
                            }
                        </div>
                    )
                }
            </Container>
        );
    }

    _filesDropped = (files) => {
        this.setState({
            files: [...this.state.files, ...files],
            isOver: false
        })
    }

    _removeFile = (file) => {
        this.setState({
            files: _.reject(this.state.files, file)
        })
    }
}