import { PolarGrid  } from 'recharts';

import styleConfig from './config';

class CustomPolarGrid extends PolarGrid {
    static defaultProps = {
        ...PolarGrid.defaultProps,
        ...styleConfig.polarGrid
    }
}

export { CustomPolarGrid as PolarGrid };
