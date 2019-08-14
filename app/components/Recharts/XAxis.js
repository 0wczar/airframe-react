import { XAxis as RCXAxis } from 'recharts';

import styleConfig from './config';

export class XAxis extends RCXAxis {
    static defaultProps = {
        ...RCXAxis.defaultProps,
        ...styleConfig.axis
    }
}