import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';

import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    UncontrolledTooltip
} from './../../../../components';
import classes from './common.scss';
import {
    getFileIcon
} from './../utilities';

export const FilesGrid = ({ files, onFileRemove }) => (
    <Row className="mt-4">
    {
        _.map(files, (file, index) => (
            <Col lg={ 4 } md={ 6 } key={index}>
                <Card className="mb-3">
                    <div className={ classNames("card-img-top", classes['ph--large']) }>
                        <i className={`fa fa-fw fa-3x ${getFileIcon(file)}`} />
                    </div>
                    <CardBody className="pt-2">
                        <div className="d-flex align-items-center mb-0 mt-0">
                            <h6 className="text-truncate mb-0">
                                { file.name }
                            </h6>
                            <Button
                                color="link"
                                onClick={() => {onFileRemove(file)}}
                                size="sm"
                                id={`delete-file-${index}`}
                            >
                                <i className="fa fa-times fa-fw text-danger"></i>
                            </Button>
                            <UncontrolledTooltip placement="left" target={`delete-file-${index}`}>
                                Delete File
                            </UncontrolledTooltip>
                        </div>
                        <div className="mb-0">
                            by You &middot; <span className='text-uppercase'>{`${numeral(file.size).format('0.00a')}B`}</span>
                        </div>
                        <div className='mb-0'>
                            { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        ))
    }
    </Row>
);

FilesGrid.propTypes = {
    files: PropTypes.array,
    onFileRemove: PropTypes.func
}