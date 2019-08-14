import React from 'react';
import PropTypes from 'prop-types';

const DlRowContacts = (props) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Phone</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>340-702-6720</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Mobile</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>363-999-9380</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Fax</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>727-613-5840</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Email</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>
                <a href="#">t.herald@gmail.com</a>
            </dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Skype</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }><a href="#">t.herald</a></dd>
        </dl>
    </React.Fragment>
)
DlRowContacts.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowContacts.defaultProps = {
    leftSideClassName: "text-right",
    rightSideClassName: "text-left"
};

export { DlRowContacts };
