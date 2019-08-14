// ReCharts styling configuration
import colors from './../../colors';

export default {
    grid: {
        stroke: colors['400'],
        strokeWidth: 1,
        strokeDasharray: '1px'
    },
    polarGrid: {
        stroke: colors['400'],
    },
    axis: {
        stroke: colors['500'],
        strokeWidth: 1,
        style: {
            fontSize: '12px'
        },
        tick: {
            // Axis Labels color:
            fill: colors['900']
        }
    },
    polarRadiusAxis: {
        stroke: colors['400'],
        tick: {
            fill: colors['900']
        }
    },
    polarAngleAxis: {
        tick: {
            fill: colors['900']
        },
        style: {
            fontSize: '12px'
        }
    },
    label: {
        fontSize: 11,
        fill: colors['900']
    },
    legend: {
        wrapperStyle: {
            color: colors['900']
        }
    },
    pieLabel: {
        fontSize: 12,
        fill: colors[100]
    },
    tooltip: {
        cursor: {
            fill: colors['primary-01']
        },
        contentStyle: {
            background: colors['900'],
            border: `1px solid ${colors['900']}`,
            color: colors['white']
        }
    }
};