import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment';

import {
    Container
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import events from './events';

const DragAndDropCalendar = withDragAndDrop(BigCalendar)
const localizer = momentLocalizer(moment) 


export class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: events,
        }
    
        this.moveEvent = this.moveEvent.bind(this)
        this.newEvent = this.newEvent.bind(this)
    }
  
    moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
        const { events } = this.state
    
        const idx = events.indexOf(event)
        let allDay = event.allDay
    
        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }
    
        const updatedEvent = { ...event, start, end, allDay }
    
        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)
    
        this.setState({
            events: nextEvents,
        })
    }
  
    resizeEvent = ({ event, start, end }) => {
        const { events } = this.state
    
        const nextEvents = events.map(existingEvent => {
            return existingEvent.id == event.id
            ? { ...existingEvent, start, end }
            : existingEvent
        })
    
        this.setState({
            events: nextEvents,
        })
    }
  
    newEvent(event) {
        const title = window.prompt('New Event name');
        if (!title) {
            return;
        }

        let idList = this.state.events.map(a => a.id)
        let newId = Math.max(...idList) + 1
        let hour = {
            id: newId,
            title,
            allDay: event.slots.length == 1,
            start: event.start,
            end: event.end,
            }
        this.setState({
            events: this.state.events.concat([hour]),
        })
    }
  
    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Calendar"
                    className="mb-5 mt-4"
                />
                <p className="pb-4">
                    An events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach. 
                    See <a href="https://github.com/intljusticemission/react-big-calendar" target="_blank" rel="noopener noreferrer">Demo and Docs</a>
                </p>
                <DragAndDropCalendar
                    style={{
                        minHeight: '720px'
                    }}
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    onEventDrop={this.moveEvent}
                    resizable
                    onEventResize={this.resizeEvent}
                    onSelectSlot={this.newEvent}
                    defaultView={'month'}
                    defaultDate={new Date()}
                />
            </Container>
        );
    }
}
