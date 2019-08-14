import { YAxis as RCYAxis } from 'recharts';

import styleConfig from './config';

export class YAxis extends RCYAxis {
    static defaultProps = {
        ...RCYAxis.defaultProps,
        ...styleConfig.axis
    }
}