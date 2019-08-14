import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    WidthProvider,
    Responsive
} from 'react-grid-layout';
import { Row as BSRow } from 'reactstrap';

import { FloatGridContext } from './floatGridContext';

const ResponsiveGrid = WidthProvider(Responsive);
const responsiveBreakpoints = {
    xl: 1139, lg: 959, md: 719, sm: 539, xs: 0
    //xl: Number.MAX_VALUE, lg: 1199, md: 991, sm: 767, xs: 576
};
const breakPointSteps = _.keys(responsiveBreakpoints);
const TOTAL_ROW = 12;

const simplifyChildrenArray = (reactChildren) => _.map(reactChildren, child => (
    { ...child, key: child.key.replace(/\.\$/g, '') }
));

export class Row extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        columns: PropTypes.object,
        onLayoutChange: PropTypes.func,
        rowHeight: PropTypes.number,
        gridSize: PropTypes.object
    };

    static contextType = FloatGridContext;

    _lastLayouts = { };
    state = {
        trueColSizes: { },
        activeLayout: 'xl'
    }
    initialDebounceTimeout = false;

    componentDidUpdate(nextProps) {
        if (!_.isEqual(nextProps.gridSize, this.props.gridSize)) {
            if (!_.isEmpty(this._lastLayouts)) {
                this._updateTrueColSizes(this._lastLayouts[this.state.activeLayout]);
            }
        }
    }

    render() {
        const { children, rowHeight, onLayoutChange, ...otherProps } = this.props;
        const { trueColSizes } = this.state;

        if (this.context.active) {
            const layouts = this._lastLayouts = this._calculateLayouts(children);
            const adjustedChildren = simplifyChildrenArray(
                React.Children.map(children, (child) =>
                    React.cloneElement(child, { trueSize: trueColSizes[child.props.i] })));

            return (
                <ResponsiveGrid
                    cols={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
                    breakpoints={ responsiveBreakpoints }
                    layouts={ layouts }
                    padding={ [ 0, 0 ] }
                    margin={ [ 0, 0 ] }
                    rowHeight={ rowHeight }
                    onLayoutChange={(currentLayout, allLayouts) => {
                        // Notify the parent
                        onLayoutChange(this._transformForChangeHandler(allLayouts));
                        // Recalculate true sizes
                        this._updateTrueColSizes(currentLayout);

                        clearTimeout(this.initialDebounceTimeout);
                        this.initialDebounceTimeout = setTimeout(() => {
                            this.context.setGridReady();
                        }, 0);
                    }}
                    onBreakpointChange={(activeLayout) => {
                        this.setState({ activeLayout });
                    }}
                    onResize={
                        (layout, oldItem, newItem) => {
                            this.setState({
                                trueColSizes: {
                                    ...trueColSizes,
                                    [newItem.i]: this.context.gridUnitsToPx(newItem.w, newItem.h)
                                }
                            });
                        }
                    }
                    { ...otherProps }
                >
                    { adjustedChildren }
                </ResponsiveGrid>
            );
        } else {
            const adjustedChildren = React.Children.map(children, (child) =>
                React.cloneElement(child, { active: false }));
            
            return (
                <BSRow>
                    { adjustedChildren }
                </BSRow>
            );
        }
    }

    _updateTrueColSizes = (layout) => {
        const { trueColSizes } = this.state;
        for (let child of layout) {
            trueColSizes[child.i] = this.context.gridUnitsToPx(child.w, child.h);
        }
        this.setState({ trueColSizes });
    }

    /**
     * Finds the nearest breakpoint relative to the one provided in the
     * first param. For example - when the `definition` param contains
     * such bps - { md: 6, xs: 8 }, for `breakpoint` - xl/md will return 6
     */
    _findClosestBreakpoint = (breakpoint, definition) => {
        let found = 12;
        for (let bp of _.drop(breakPointSteps, _.indexOf(breakPointSteps, breakpoint))) {
            if (!_.isUndefined(definition[bp])) {
                found = definition[bp];
            }
        }
        return found;
    }

    _calculateLayouts = (children) => {
        let output = { };
        const childrenArray = React.Children.toArray(children);
        for (let breakPoint of breakPointSteps) {
            let rowChildren = [];
            let rowCounter = 0;
            let y = 0;
            for (let child of childrenArray) {
                let bpData = { };
                // Save the props for current child and breakpoint
                const config = _.pick(child.props, [
                    'i',
                    'h', 'minH', 'maxH',
                    'minW', 'maxW',
                    breakPoint, `${breakPoint}MinW`, `${breakPoint}MaxW`,
                    'moved', 'static', 'isResizable', 'isDraggable'
                ]);
                // Calculate the needed definition
                bpData = Object.assign(bpData, {
                    ...config,
                    // Add default heights when none provided
                    ...{
                        // Set the x to the calculated value or take from the 
                        // props if defined for controlled type
                        x: _.isUndefined(child.props[`${breakPoint}X`]) ?
                            rowCounter : child.props[`${breakPoint}X`],
                        h: child.props[`${breakPoint}H`] || config.h || 1,
                        minH: config.minH || (config.h || 1),
                        maxH: config.maxH || (config.h || 1),
                    },
                    w: config[breakPoint] ||
                        this._findClosestBreakpoint(breakPoint, child.props),
                    // Set the y to the calculated value or take from the 
                    // props if defined for controlled type
                    y: _.isUndefined(child.props[`${breakPoint}Y`]) ?
                        y : child.props[`${breakPoint}Y`]
                });
                rowChildren = [...rowChildren, bpData];
                rowCounter += bpData.w;
                if (rowCounter + bpData.x > TOTAL_ROW) {
                    // Increase by the largest found height
                    y += _.max(_.map(rowChildren, 'h'));
                    rowCounter = 0;
                    rowChildren = [];
                }
                output = {
                    ...output,
                    [breakPoint]: [...(output[breakPoint] || []), bpData]
                }
            }
        }
        return output;
    }

    /**
     * Transform the calculated layout to a structure
     * which is provided by `layouts` props
     */
    _transformForChangeHandler = (layouts) => {
        let output = { };
        for (let breakPoint of breakPointSteps) {
            const bpLayout = layouts[breakPoint];
            for (let element of bpLayout) {
                output[element.i] = {
                    ...(output[element.i]),
                    ...(element),
                    [breakPoint]: element.w,
                    [`${breakPoint}X`]: element.x,
                    [`${breakPoint}Y`]: element.y,
                    [`${breakPoint}H`]: element.h
                }
            }
        }
        return output;
    }
}
