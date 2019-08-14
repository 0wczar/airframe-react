import { CartesianGrid  } from 'recharts';

import styleConfig from './config';

class CustomCartesianGrid extends CartesianGrid {
    static defaultProps = {
        ...CartesianGrid.defaultProps,
        ...styleConfig.grid,
    }
}

export { CustomCartesianGrid as CartesianGrid };
