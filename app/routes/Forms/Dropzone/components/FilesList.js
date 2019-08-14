import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import numeral from 'numeral';
import moment from 'moment';

import {
    Table,
    Button,
    UncontrolledTooltip
} from './../../../../components';
import classes from './common.scss';
import {
    getFileIcon
} from './../utilities';

export const FilesList = ({ files, onFileRemove }) => (
    <Table responsive hover className="mt-3">
        <thead>
            <tr>
                <th className="bt-0"></th>
                <th className="bt-0">File Name</th>
                <th className="bt-0">Size</th>
                <th className="bt-0">Owner</th>
                <th className="bt-0">Modified Date</th>
                <th className="bt-0 text-right">Actions</th>
            </tr>
        </thead>
        <tbody>
        {
            _.map(files, (file, index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <div className={ classes['ph--small'] }>
                            <i className={`fa fa-fw fa-2x ${getFileIcon(file)}`} />
                        </div>
                    </td>
                    <td className="align-middle">
                        { file.name }
                    </td>
                    <td className="align-middle text-uppercase">
                        { numeral(file.size).format('0.00a') }B
                    </td>
                    <td className="align-middle">
                        You
                    </td>
                    <td className="align-middle">
                        { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }
                    </td>
                    <td className="text-right align-middle">
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
                    </td>
                </tr>
            ))
        }
        </tbody>
    </Table>
);

FilesList.propTypes = {
    files: PropTypes.array,
    onFileRemove: PropTypes.func
}