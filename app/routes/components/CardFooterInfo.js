import React from 'react';
import PropTypes from 'prop-types';

const CardFooterInfo = (props) => (
    <React.Fragment>
        <div className="small">
            <i className={ `fa fa-fw fa-${ props.icon } ${ props.iconClassName } mr-2` }></i>
            { props.text }
        </div>
    </React.Fragment>

)
CardFooterInfo.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    text: PropTypes.node,
};
CardFooterInfo.defaultProps = {
    icon: "question-circle",
    iconClassName: "text-muted",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam beatae, nesciunt incidunt laudantium. Eveniet ratione quis accusantium dolorum velit maiores illo mollitia."
};

export { CardFooterInfo };
