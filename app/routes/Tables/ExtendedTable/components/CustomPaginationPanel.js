import React from 'react';
import PropTypes from 'prop-types';
import { map, isInteger } from 'lodash';
import { Pagination, PaginationItem, PaginationLink, Col } from './../../../../components';

const mapToFa = {
    '<': <i className="fa fa-angle-left" />,
    '<<': <i className="fa fa-angle-double-left" />,
    '>': <i className="fa fa-angle-right" />,
    '>>': <i className="fa fa-angle-double-right" />
}

export const CustomPaginationPanel = ({ onPageChange, pages, ...otherProps }) => (
    <Col md={ 6 } className="d-flex">
        <Pagination aria-label="Page navigation example" { ...otherProps } listClassName="my-0">
            {
                map(pages, page => (
                    <PaginationItem active={ page.active } disabled={ page.disabled }>
                        <PaginationLink onClick={() => onPageChange(page.page)}>
                            { isInteger(page.page) ? page.page : mapToFa[page.page] }
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
        </Pagination>
    </Col>
);
CustomPaginationPanel.propTypes = {
    pages: PropTypes.array,
    onPageChange: PropTypes.func
};
