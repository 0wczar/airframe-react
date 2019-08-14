import { Legend as RCLegend } from 'recharts';

import styleConfig from './config';

export class Legend extends RCLegend {
    static defaultProps = {
        ...RCLegend.defaultProps,
        ...styleConfig.legend
    }
}