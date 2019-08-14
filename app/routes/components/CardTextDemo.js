import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from './../../components';

const CardTextDemo = (props) => (
    <CardText>
        <span className="mr-2">
            #{ props.cardNo }
        </span> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nisl elit, porta a sapien eget, fringilla sagittis ex.
    </CardText>
)
CardTextDemo.propTypes = {
    cardNo: PropTypes.node
};
CardTextDemo.defaultProps = {
    cardNo: "?.??"
};

export { CardTextDemo };
