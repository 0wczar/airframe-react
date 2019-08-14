import React from 'react';

import { 
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const Paginations = () => (

    <Pagination aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink previous href="#">
                <i className="fa fa-fw fa-angle-left"></i>
            </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
            <PaginationLink href="#">
                1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
                2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
                3
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink next href="#">
                <i className="fa fa-fw fa-angle-right"></i>
            </PaginationLink>
        </PaginationItem>
    </Pagination>
)

export { Paginations };
