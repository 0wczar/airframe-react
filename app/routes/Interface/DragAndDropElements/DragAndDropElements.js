import React from 'react';

import {
    Container,
    Button
} from './../../../components';
import {
    HeaderMain
} from './../../components/HeaderMain';
import {
    HeaderDemo
} from './../../components/HeaderDemo';

import {
    MultipleVerticalLists,
    DraggableTable,
    HorizontalLists
} from './components';

export class DragAndDropElements extends React.Component {
    multipleVerticalListsRef = React.createRef();
    draggableTableRef = React.createRef();
    horizontalLists = React.createRef();

    onResetState = () => {
        this.multipleVerticalListsRef.current.recoverInitialState();
        this.draggableTableRef.current.recoverInitialState();
        this.horizontalLists.current.recoverInitialState();
    }

    render() {
        return (
            <Container>
                <div className="d-flex">
                    <div>
                        <HeaderMain title="Drag &amp; Drop Elements" 
                            className="mb-5 mt-4"
                        />
                    </div>
                    <Button onClick={ this.onResetState } className="ml-auto align-self-center" color="primary" outline>
                        Reset Layout
                    </Button>
                </div>

                <div className="mb-5">
                    <HeaderDemo
                        no="1"
                        title="Mutliple Verical Lists"
                        subTitle="Both list are draggable horizontally and inner list elements can be swapped or reorderd"
                    />
                    <MultipleVerticalLists ref={ this.multipleVerticalListsRef }/>
                </div>

                <div className="mb-5">
                    <HeaderDemo
                        no="2"
                        title="Table"
                        subTitle="Allows reordering of the table rows"
                    />
                    <DraggableTable ref={ this.draggableTableRef }/>
                </div>
                <div>
                    <HeaderDemo
                        no="3"
                        title="Horizontal Lists"
                        subTitle="Items can be reaordered and moved between lists"
                    />
                    <HorizontalLists ref={ this.horizontalLists }/>
                </div>
            </Container>
        );
    }
}
