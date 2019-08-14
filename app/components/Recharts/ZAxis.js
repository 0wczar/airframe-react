import { ZAxis as RCZAxis } from 'recharts';

import styleConfig from './config';

export class ZAxis extends RCZAxis {
    static defaultProps = {
        ...RCZAxis.defaultProps,
        ...styleConfig.axis
    }
}
