import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';
import uid from 'uuid/v4';
import {
    Card,
    CardHeader,
    CardTitle,
    Avatar,
    AvatarAddOn
} from './../../../../components';
import { randomAvatar, randomArray } from './../../../../utilities';
import { reorder, move } from './utilities';
import classes from './common.scss';

const generateItem = () => ({
    id: uid(),
    avatarUrl: randomAvatar(),
    status: randomArray(['success', 'warning', 'danger'])
});

const getListClass = (isDraggedOver) =>
    classNames(classes['list'], {
        [classes['list--drag-over']]: isDraggedOver
    });

const RowList = (props) => (
    <Card className={props.className}>
        <CardHeader className="bg-none">
            <CardTitle className="h6 mb-0">
                { props.title }
            </CardTitle>
        </CardHeader>
        <Droppable
            droppableId={ props.listId }
            direction="horizontal"
        >
            {(provided, snapshot) => (
                <div
                    className={`card-body d-flex ${getListClass(snapshot.isDraggingOver)}`}
                    style={{ overflowX: 'auto' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {_.map(props.items, (item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    className="px-3"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <Avatar.Image
                                        key={`avatar-${item.id}`}
                                        size="lg"
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
                                </div>
                            )}
                        </Draggable>
                    ))}
                    { provided.placeholder }
                </div>
            )}
        </Droppable>
    </Card>
)
RowList.propTypes = {
    listId: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.stirng
}
const initialState = {
    listAItems: _.times(_.random(3, 8), generateItem),
    listBItems: _.times(_.random(3, 8), generateItem),
    listCItems: _.times(_.random(3, 8), generateItem)
};
export class HorizontalLists extends React.Component {
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

        return (
            <div className={ className }>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <RowList
                        listId="listA"
                        items={ this.state.listAItems }
                        title="All Candidates"
                    />
                    <RowList
                        listId="listB"
                        items={ this.state.listBItems }
                        title="Candidates Interview"
                        className="mt-4"
                    />
                    <RowList
                        listId="listC"
                        items={ this.state.listCItems }
                        title="Candidates Testing"
                        className="mt-4"
                    />
                </DragDropContext>
            </div>
        )
    }
}