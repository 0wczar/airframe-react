import { Col } from './Col';
import { Row } from './Row';
import { Grid } from './Grid';
import { Ready } from './Ready';

Grid.Col = Col;
Grid.Row = Row;
Grid.Ready = Ready;

export const applyColumn = (columnId, layouts) => ({
    ...layouts[columnId],
    i: columnId,
    key: columnId
});

export default Grid;
