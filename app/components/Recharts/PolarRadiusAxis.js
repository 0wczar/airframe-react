import { PolarRadiusAxis as RCPolarRadiusAxis} from 'recharts';

import styleConfig from './config';

export class PolarRadiusAxis extends RCPolarRadiusAxis {
    static defaultProps = {
        ...RCPolarRadiusAxis.defaultProps,
        ...styleConfig.polarRadiusAxis
    }
}