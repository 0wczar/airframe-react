import React from 'react';
import PropTypes from 'prop-types';
import { 
    Card, 
    CardTitle, 
    CardBody, 
    CardHeader
} from './../../../components';

import { InfoPopover } from './InfoPopover';

const CardColor = (props) => (
    <Card className={ `mb-3 ${ props.cardClass }` }>
        <CardHeader className={ `bg-${ props.color }` } style={{ height: '120px' }} />
        <CardBody>
            <CardTitle tag="h6">
                { props.color }
            </CardTitle>
            <dl className="row mb-0">
                <dt className="col-sm-4">Hex</dt>
                <dd className="col-sm-8 text-inverse samp">
                    {props.hex}
                </dd>
                <dt className="col-sm-4">Rgba</dt>
                <dd className="col-sm-8 text-inverse">
                    {props.rgba}
                </dd>
                <dt className="col-sm-4">Cmyk</dt>
                <dd className="col-sm-8 text-inverse">
                    {props.cmyk}
                </dd>
                <dt className="col-sm-4">Scss</dt>
                <dd className="col-sm-8 text-inverse">
                    ${ props.color }
                </dd>
                <dt className="col-sm-4">More</dt>
                <dd className="col-sm-8 text-inverse">
                    <InfoPopover colorId={ props.color } href="javascript:;">
                        Details 
                        <i className="fa fa-angle-up ml-1"></i>
                    </InfoPopover>
                </dd>
            </dl>
        </CardBody>
    </Card>

)
CardColor.propTypes = {
    cardClass: PropTypes.node,
    color: PropTypes.node,
    hex: PropTypes.node,
    rgba: PropTypes.node,
    cmyk: PropTypes.node,
    scss: PropTypes.node
};
CardColor.defaultProps = {
    cardClass: "",
    color: "Waiting for Data...",
    hex: "Waiting for Data...",
    rgba: "Waiting for Data...",
    cmyk: "Waiting for Data...",
    scss: "Waiting for Data...",
};

export { CardColor };
