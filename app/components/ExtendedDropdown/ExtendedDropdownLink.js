import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownContext } from 'reactstrap/es/DropdownContext';

const ExtendedDropdownLink = (props) => {
    const { children, ...otherProps } = props;

    return (
        <DropdownContext.Consumer>
        {
            ({ toggle }) => (
                <Link { ...otherProps } onClick={ () => { toggle(); } }>
                    { children }
                </Link>
            )
        }
        </DropdownContext.Consumer>        
    );
};
ExtendedDropdownLink.propTypes = { ...Link.propTypes };
ExtendedDropdownLink.defaultProps = { ...Link.defaultProps };

export { ExtendedDropdownLink };
