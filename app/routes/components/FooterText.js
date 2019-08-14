import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. This is the &quot;{ props.name }&quot; built with { props.desc }. 
		Designed and implemented by{' '}
		<a
			href="http://www.webkom.co"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			www.webkom.co
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: "Admin Theme",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
