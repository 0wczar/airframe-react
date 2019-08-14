import { PolarAngleAxis as RCPolarAngleAxis} from 'recharts';

import styleConfig from './config';

export class PolarAngleAxis extends RCPolarAngleAxis {
    static defaultProps = {
        ...RCPolarAngleAxis.defaultProps,
        ...styleConfig.polarAngleAxis
    }
}