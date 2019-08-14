import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import { Consumer } from './context';

class NestedDropdownSubmenu extends React.Component {
    componentDidMount() {
        this.id = uuid();
    }

    render() {
        const {
            tag: Tag,
            subMenuTag: SubMenuTag,
            title,
            children,
            className,
            openId,
            onOpen
        } = this.props;
        const itemClass = classNames(className, 'nested-dropdown__submenu-item', {
            'nested-dropdown__submenu-item--open': openId === this.id
        });
        const linkClass = classNames('nested-dropdown__submenu-item__link', 'dropdown-item');
        
        return (
            <Tag className={ itemClass }>
                <a
                    href="javascript:;"
                    className={ linkClass }
                    onClick={ () => { onOpen(this.id) } }
                >
                    { title }
                </a>
                <div className="nested-dropdown__submenu-item__menu-wrap">
                    <SubMenuTag className="nested-dropdown__submenu-item__menu dropdown-menu">
                        { children }
                    </SubMenuTag>
                </div>
            </Tag>
        );
    }
}
NestedDropdownSubmenu.propTypes = {
    children: PropTypes.node,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    subMenuTag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string,
    // Context Provided:
    openId: PropTypes.string,
    onOpen: PropTypes.func.isRequired
};
NestedDropdownSubmenu.defaultProps = {
    tag: "div",
    subMenuTag: "div"
};

const ContextNestedDropdownSubmenu = (props) => (
    <Consumer>
    {
        (contextProps) => (
            <NestedDropdownSubmenu { ...contextProps } { ...props } />
        )   
    }
    </Consumer>
);

export {
    ContextNestedDropdownSubmenu as NestedDropdownSubmenu
};
