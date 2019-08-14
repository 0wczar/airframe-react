import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';
import uid from 'uuid/v4';
import faker from 'faker/locale/en_US';
import classNames from 'classnames';
import {
    Card,
    CardHeader,
    CardTitle,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../../components';
import { randomAvatar, randomArray } from './../../../../utilities';
import { reorder, move } from './utilities';
import classes from './common.scss';

//  Utility Functions
//=========================================================
const generateItem = () => ({
    id: uid(),
    type: 'single',
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobType(),
    avatarUrl: randomAvatar(),
    status: randomArray(['success', 'warning', 'danger'])
});

const getListClass = (isDraggedOver) =>
    classNames(classes['list'], {
        [classes['list--drag-over']]: isDraggedOver
    });

const getItemClass = (isDragging) =>
    classNames(classes['list-group-item'], {
        [classes['list-group-item--dragging']]: isDragging
    });

//  Draggable List Component
//=========================================================
const VerticalList = React.memo((props) => {
    return (
        <Droppable droppableId={ props.listId }>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    className={`list-group list-group-flush flex-grow-1 ${getListClass(snapshot.isDraggingOver)}`}
                >                    
                    {props.items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, draggableSnapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`list-group-item ${getItemClass(draggableSnapshot.isDragging)}`}
                                >
                                    <Media>
                                        <Media left className="align-self-center pr-3">
                                            <i className="fa fa-ellipsis-v text-muted" />
                                        </Media>
                                        <Media left middle className="mr-4 align-self-center">
                                            <Avatar.Image
                                                size="md"
                                                className="d-block"
                                                src={ item.avatarUrl }
                                                addOns={[
                                                    <AvatarAddOn.Icon 
                                                        className="fa fa-circle"
                                                        color="white"
                                                        key="avatar-icon-bg"
                                                    />,
                                                    <AvatarAddOn.Icon 
                                                        className="fa fa-circle"
                                                        color={ item.status }
                                                        key="avatar-icon-fg"
                                                    />
                                                ]}
                                            /> 
                                        </Media>
                                        <Media body>
                                            <span className="mt-0 h6 mb-1">
                                                { item.name }
                                            </span>
                                            <p className="mb-0 text-muted text-truncate">
                                                { item.title }
                                            </p>
                                        </Media>
                                    </Media>
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
            )}
        </Droppable>
    );
});
VerticalList.propTypes = {
    items: PropTypes.array,
    listId: PropTypes.string,
    title: PropTypes.string
}

//  Draggable Column Component
//=========================================================
class Column extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        id: PropTypes.string,
        index: PropTypes.number,
        title: PropTypes.string
    }

    render() {
        const { children, id, index, title } = this.props;

        return (
            <Draggable
                draggableId={id}
                index={index}
            >
                {(provided) => (
                    <div
                        className="col-md-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <Card className="h-100">
                            <CardHeader {...provided.dragHandleProps} className="b-0 bg-none">
                                <CardTitle className="h6 mb-0">
                                    <i className="fa fa-ellipsis-v mr-3 text-muted" />
                                    { title }
                                </CardTitle>
                            </CardHeader>
                            { children }
                        </Card>
                    </div>
                )}
            </Draggable>
        )
    }
}

//  Demo Component
//=========================================================
const initialState = {
    listAItems: _.times(_.random(2, 4), generateItem),
    listBItems: _.times(_.random(3, 8), generateItem),
    listCItems: _.times(_.random(3, 8), generateItem),
    lists: [
        { id: 'listA', title: 'All Candidates' },
        { id: 'listB', title: 'Candidates Interview' },
        { id: 'listC', title: 'Candidates Testing' }
    ]
};
export class MultipleVerticalLists extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    state = _.clone(initialState);

    constructor (props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        const { source, destination } = result;

        // Swap column positions
        if (source.droppableId === 'board') {
            if (destination.droppableId !== 'board') {
                return;
            }
            const lists = reorder(
                this.state.lists,
                source.index,
                destination.index
            );

            this.setState({ lists });
            return;
        }

        // dropped outside the list
        if (!destination) {
            return;
        }

        // Handle List Items
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.state[`${source.droppableId}Items`],
                source.index,
                destination.index
            );

            this.setState({
                [`${source.droppableId}Items`]: items
            });
        } else {
            const result = move(
                this.state[`${source.droppableId}Items`],
                this.state[`${destination.droppableId}Items`],
                source,
                destination
            );

            this.setState(_.mapKeys(result, (val, key) => `${key}Items`));
        }
    }

    recoverInitialState() {
        this.setState(initialState);
    }

    render() {
        const { className } = this.props;
        const { lists } = this.state;

        return (
            <div className={ className }>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable
                        droppableId="board"
                        type="COLUMN"
                        direction="horizontal"
                    >
                        {(provided) => (
                            <div
                                className="row"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {_.map(lists, (list, index) => (
                                    <Column
                                        id={list.id}
                                        index={ index }
                                        title={list.title}
                                        key={ list.id }
                                    >
                                        <VerticalList
                                            listId={list.id}
                                            items={this.state[`${list.id}Items`]}
                                        />
                                    </Column>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}