import { Tooltip as RCTooltip } from 'recharts';

import styleConfig from './config';

export class Tooltip extends RCTooltip {
    static defaultProps = {
        ...RCTooltip.defaultProps,
        ...styleConfig.tooltip
    }
}