import React from 'react';
import PropTypes from 'prop-types';

import { 
    CardTitle,
    Badge
} from './../../../components';

const ProfileOverviewCard = (props) => (
    <React.Fragment>
        <div className="d-flex">
            <CardTitle tag="h6">
                { props.title }
            </CardTitle>
            <Badge pill color={ `${ props.badgeColor }` } className="align-self-start ml-auto">
                { props.badgeTitle }
            </Badge>
        </div>
        <div className="text-center my-4">
            <h2>{ props.value }</h2>
            <span>
                { props.valueTitle }
            </span>
        </div>
        <div className="d-flex">
            <span>
                { props.footerTitle }
            </span>
            <span className={ `ml-auto ${ props.footerTitleClassName }` }>
                <i className={ `fa mr-1 fa-${ props.footerIcon }` }></i>
                { props.footerValue }
            </span>
        </div>
    </React.Fragment>
)
ProfileOverviewCard.propTypes = {
    title: PropTypes.node,
    badgeColor: PropTypes.node,
    badgeTitle: PropTypes.node,
    value: PropTypes.node,
    valueTitle: PropTypes.node,
    footerTitle: PropTypes.node,
    footerTitleClassName: PropTypes.node,
    footerIcon: PropTypes.node,
    footerValue: PropTypes.node
};
ProfileOverviewCard.defaultProps = {
    title: "Waiting",
    badgeColor: "secondary",
    badgeTitle: "Waiting",
    value: "0.000",
    valueTitle: "Waiting",
    footerTitle: "Waiting",
    footerTitleClassName: "text-muted",
    footerIcon: "caret-down",
    footerValue: "0.00%"
};

export { ProfileOverviewCard };
