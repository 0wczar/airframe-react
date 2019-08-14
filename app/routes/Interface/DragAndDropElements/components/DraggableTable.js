import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uuid/v4';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';
import classNames from 'classnames';

import {
    Table,
    Badge,
    Avatar,
    AvatarAddOn,
    Progress,
    Card,
    CardHeader,
    CardTitle
} from './../../../../components';
import { randomAvatar, randomArray } from './../../../../utilities';
import { reorder } from './utilities';
import classes from './common.scss';

const allSkills = ['JavaScript', 'Photoshop', 'Management', 'Bootstrap',
    'PHP', 'Sketch', 'MySQL', 'Mongo', 'Node.js', 'TypeScript'];

const generateUser = () => ({
    id: uid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobType(),
    avatarUrl: randomAvatar(),
    status: randomArray(['success', 'warning', 'danger']),
    skills: _.uniq(_.times(_.random(2, 5), () => randomArray(allSkills))),
    interviewProgress: _.random(40, 90),
    portfolio: (Math.round(Math.random())) ? {
        url: 'http://webkom.co',
        title: 'www.webkom.co'
    } : null
});

const getTableClass = (isDraggedOver) =>
    classNames(classes['table'], {
        [classes['table--drag-over']]: isDraggedOver
    });

const getRowClass = (isDragging) =>
    classNames(classes['row'], {
        [classes['row--dragging']]: isDragging
    });

// Custom Table Cell - keeps cell width when the row
// is detached from the table
// ========================================================
class TableCell extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        isDragOccurring: PropTypes.bool
    };

    ref = React.createRef();

    getSnapshotBeforeUpdate(prevProps) {
        if (!this.ref) {
            return null;
        }
        const ref = this.ref.current;

        const isDragStarting =
            this.props.isDragOccurring && !prevProps.isDragOccurring;
  
        if (!isDragStarting) {
            return null;
        }
  
        const { width, height } = ref.getBoundingClientRect();
  
        const snapshot = { width, height };
  
        return snapshot;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.ref) {
            return;
        }
        const ref = this.ref.current;
  
        if (snapshot) {
            if (ref.style.width === snapshot.width) {
                return;
            }
            ref.style.width = `${snapshot.width}px`;
            ref.style.height = `${snapshot.height}px`;
            return;
        }
  
        if (this.props.isDragOccurring) {
            return;
        }
  
        // inline styles not applied
        if (ref.style.width == null) {
            return;
        }
  
        // no snapshot and drag is finished - clear the inline styles
        ref.style.removeProperty('height');
        ref.style.removeProperty('width');
    }
  
    render() {
        // eslint-disable-next-line no-unused-vars
        const { children, isDragOccurring, ...otherProps } = this.props;
        return <td ref={this.ref} {...otherProps}>{children}</td>;
    }
}

// Draggable Table Row
// ========================================================
const DraggableRow = (props) => (
    <Draggable
        draggableId={props.id}
        index={props.index}
    >
    {(provided, snapshot) => (
        <tr
            ref={ provided.innerRef }
            { ...provided.draggableProps }
            className={getRowClass(snapshot.isDragging)}
        >
            <TableCell
                className="align-middle"
                isDragOccurring={snapshot.isDragging}
                { ...provided.dragHandleProps }
            >
                <i className="fa fa-fw fa-arrows-v fa-lg d-block mx-auto text-muted" />
            </TableCell>
            <TableCell
                className="align-middle"
                isDragOccurring={snapshot.isDragging}
            >
                <Avatar.Image
                    size="md"
                    className="d-block"
                    src={ props.avatarUrl }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color={ props.status }
                            key="avatar-icon-fg"
                        />
                    ]}
                /> 
            </TableCell>
            <TableCell
                className="align-middle"
                isDragOccurring={snapshot.isDragging}
            >
                <span className="mt-0 h6 mb-1">
                    { props.name }
                </span>
                <p className="mb-0 text-muted text-truncate">
                    { props.title }
                </p>
            </TableCell>
            <TableCell
                className="align-middle"
                isDragOccurring={snapshot.isDragging}
            >
                {_.map(props.skills, (skill, index) => (
                    <Badge
                        key={ index }
                        className={`px-2 ${index > 0 && 'ml-1'}`}
                    >
                        { skill }
                    </Badge>
                ))}
            </TableCell>
            <TableCell
                className="align-middle"
                isDragOccurring={snapshot.isDragging}
            >
                <Progress value={props.interviewProgress} slim />
                <span className="fw-500">{ props.interviewProgress }%</span>
            </TableCell>
            <TableCell
                className="text-right align-middle"
                isDragOccurring={snapshot.isDragging}
            >
                {
                    !_.isEmpty(props.portfolio) ? (
                        <a href={props.portfolio.url}>
                            { props.portfolio.title }
                        </a>
                    ) : (
                        <span>-</span>
                    )
                }
            </TableCell>
        </tr>
    )}
    </Draggable>
);
DraggableRow.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    interviewProgress: PropTypes.number.isRequired,
    portfolio: PropTypes.object,
    index: PropTypes.number.isRequired
}

// Demo Component
// ========================================================
const initialState = _.times(5, generateUser);

export class DraggableTable extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    state = {
        users: initialState
    }

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd({ source, destination }) {
        if (!destination) {
            return;
        }

        const users = reorder(this.state.users,
            source.index, destination.index);
        this.setState({ users });
    }

    recoverInitialState() {
        this.setState({
            users: initialState
        });
    }

    render() {
        return (
            <Card className={ this.props.className }>
                <CardHeader className="bg-none bb-0">
                    <CardTitle className="h6">
                        Queue of Candidates
                    </CardTitle>
                </CardHeader>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th className="bt-0"></th>
                                <th className="bt-0">Photo</th>
                                <th className="bt-0">Name</th>
                                <th className="bt-0">Skills</th>
                                <th className="bt-0">Interview Passed in</th>
                                <th className="bt-0 text-right">Portfolio</th>
                            </tr>
                        </thead>
                        <Droppable droppableId="table">
                        {(provided, snapshot) => (
                            <tbody
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={getTableClass(snapshot.isDraggingOver)}
                            >
                                {_.map(this.state.users, (user, index) => (
                                    <DraggableRow
                                        key={user.id}
                                        index={index}
                                        { ...user }
                                    />
                                ))}
                            </tbody>
                        )}
                        </Droppable>
                    </Table>
                </DragDropContext>
            </Card>
        );
    }
}
