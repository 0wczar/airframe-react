import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './ThemeContext';

export class ThemeProvider extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        initialStyle: PropTypes.string,
        initialColor: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            style: 'light',
            color: 'primary',
        };
    }

    componentDidMount() {
        const { initialStyle, initialColor } = this.props;

        if (initialStyle) {
            this.setState({ style: initialStyle });
        }
        if (initialColor) {
            this.setState({ color: initialColor });
        }
    }

    onChangeTheme(themeState) {
        this.setState(themeState);
    }
    
    render() {
        const { children } = this.props;
        
        return (
            <Provider
                value={{
                    ...this.state,
                    onChangeTheme: this.onChangeTheme.bind(this)
                }}
            >
                { children }
            </Provider>
        );
    }
}
