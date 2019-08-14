import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container } from 'reactstrap';
import { FloatGridContext } from './floatGridContext';
import './../../styles/components/float-grid.scss';

export class Grid extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.node,
        fluid: PropTypes.bool,
        rowHeight: PropTypes.number,
        className: PropTypes.string
    }

    static defaultProps = {
        active: true,
        fluid: false,
        rowHeight: 100
    }

    state = {
        gridSize: { w: 0, h: 0 },
        gridReady: false,
    }
    _gridRef = React.createRef();
    _resizeDebounceTimeout = 0;

    componentDidMount() {
        this.setState({
            gridSize: {
                w: this._gridRef.current.clientWidth,
                h: this._gridRef.current.clientHeight
            }
        });

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this._resizeHandler);
        }
    }

    componentDidUpdate(nextProps) {
        // HACK
        if (
            typeof window !== 'undefined' &&
            nextProps.fluid !== this.props.fluid
        ) {
            window.dispatchEvent(new Event('resize'));
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }

    render() {
        const { active, children, fluid, className, rowHeight, ...otherProps } = this.props;
        const { gridSize } = this.state;
        const modifiedChildren = React.Children.map(children, child => (
            React.cloneElement(child, {
                ...otherProps,
                active,
                gridSize
            })
        ));

        const floatWrapClasses = classNames({
            ['float-grid-parent__static']: !fluid
        }, className, 'float-grid-parent');

        return(
            <FloatGridContext.Provider
                value={{
                    gridUnitsToPx: (w, h) => {
                        return {
                            wPx: w / 12 * gridSize.w,
                            hPx: h * rowHeight
                        }
                    },
                    active,
                    gridReady: this.state.gridReady,
                    setGridReady: () => { this.setState({ gridReady: true }) }
                }}
            >
                {
                    active ? (
                        <div
                            className={ floatWrapClasses }
                            ref={ this._gridRef }
                        >
                            { modifiedChildren }
                        </div>
                    ) : (
                        <div ref={ this._gridRef }>
                            <Container fluid={ fluid } className={ className } { ...otherProps }>
                                { modifiedChildren }
                            </Container>
                        </div>
                    )
                }
                
            </FloatGridContext.Provider>
        );
    }

    _resizeHandler = () => {
        clearInterval(this._resizeDebounceTimeout);

        this._resizeDebounceTimeout = setTimeout(() => {
            this.setState({
                gridSize: {
                    w: this._gridRef.current.clientWidth,
                    h: this._gridRef.current.clientHeight
                }
            });
        }, 1000 / 60 * 10); //Every 10 frames debounce
    }
}
