import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const Avatar = (props) => {
    const avatarClass = classNames(
        'avatar',
        `avatar--${ props.size }`,
        props.className
    );
    const addOnsdArr = React.Children.toArray(props.addOns);
    const badge = _.find(addOnsdArr, (avatarAddOn) =>
        avatarAddOn.type.addOnId === "avatar--badge");
    const icons = _.filter(addOnsdArr, (avatarAddOn) =>
        avatarAddOn.type.addOnId === "avatar--icon");
    const isNested = _.reduce(addOnsdArr, (acc, avatarAddOn) =>
        acc || !!avatarAddOn.props.small, false);

    return (
        <div className={ avatarClass } style={ props.style }>
            {
                badge && (
                    <div className="avatar__badge">
                        { badge }
                    </div>
                )
            }
            {
                !_.isEmpty(icons) && (() => {
                    switch(icons.length) {
                        case 1:
                            return (
                                <div className="avatar__icon">
                                    { _.first(icons) }
                                </div>
                            )
                        default:
                            return (
                                <div
                                    className={
                                        classNames({
                                            'avatar__icon--nested': isNested,
                                        }, 'avatar__icon', 'avatar__icon--stack')
                                    }
                                >
                                    { icons }
                                </div>
                            )
                    }
                })() 
            }
            <div className='avatar__content'>
                { props.children }
            </div>
        </div>
    );
};
Avatar.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    addOns: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};
Avatar.defaultProps = {
    size: "md",
    style: {}
};

export { Avatar };