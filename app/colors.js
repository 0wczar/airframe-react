import _ from 'lodash';

import colors from './colors.scss';

const colorKeys = _
    .chain(colors)
    .keys()
    .filter((colorKey) => (
        colorKey.indexOf('bg-') === -1 &&
        colorKey.indexOf('fg-') === -1
    ))
    .value();

export default _.pick(colors, colorKeys);