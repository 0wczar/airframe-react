import React from 'react';
import PropTypes from 'prop-types';

const LayoutContent = (props) => (
    <div className="layout__content">
        { props.children }
    </div>
);

LayoutContent.propTypes = {
    children: PropTypes.node
};
LayoutContent.layoutPartName = "content";

export {
    LayoutContent
};
