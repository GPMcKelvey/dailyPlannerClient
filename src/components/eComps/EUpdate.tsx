import React, {Component} from 'react';

import { Dialog } from '@material-ui/core';

type AcceptedProps = {
    sessionToken: string,
    personalEventFetch: any,
    eventDate: Date,
    eventDescription: string,
    eventEndTime: number,
    eventStartTime: number,
    eventTitle: string,
    eventPrivacy: boolean,
    id: string
}

type updateState = {
    eventDate: Date,
    eventDescription?: string,
    eventEndTime?: number,
    eventStartTime?: number,
    eventTitle: string,
    eventPrivacy: boolean,
    modal: boolean

}

export default class EventsUpdate extends Component<AcceptedProps, updateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            eventDate: this.props.eventDate,
            eventDescription: this.props.eventDescription,
            eventEndTime: this.props.eventEndTime,
            eventStartTime: this.props.eventStartTime,
            eventTitle: this.props.eventTitle,
            eventPrivacy: this.props.eventPrivacy,
            modal: false
        }
    }

    updateFetch = () => {
        fetch(`http://localhost:3000/events/update/${this.props.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                events: {
                    eventTitle: this.state.eventTitle,
                    eventDescription: this.state.eventDescription,
                    eventDate: this.state.eventDate,
                    eventStartTime: this.state.eventStartTime,
                    eventEndTime: this.state.eventEndTime,
                    eventPrivacy: this.state.eventPrivacy 
                }
            }),
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.props.personalEventFetch();
        })
        this.setState({
            modal: false
        })
    }

    componentDidUpdate(prevState: any) {
        if (prevState.eventTitle !== this.props.eventTitle){
            this.setState({
                eventTitle: this.props.eventTitle,
                    eventDescription: this.props.eventDescription,
                    eventDate: this.props.eventDate,
                    eventStartTime: this.props.eventStartTime,
                    eventEndTime: this.props.eventEndTime,
                    eventPrivacy: this.props.eventPrivacy 
            })
        }
    }

    deleteFetch = () => {
        fetch(`http://localhost:3000/events/delete/${this.props.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(() => this.props.personalEventFetch())
    }

    inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }

    modalHandler = () => {
        this.setState({
            modal: true
        })
    }

    exitHandler = () => {
        this.setState({
            modal: false
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.modalHandler}>Update</button>
                <button onClick={this.deleteFetch}>Delete</button>
                <Dialog open={this.state.modal}>
                    <div>
                        <h1>Update Event</h1>
                    <form>
                        <label>Event Title</label>
                        <input id='eventTitle' name='eventTitle' type='text' onChange={this.inputHandler} value={this.state.eventTitle}></input>
                        <label>Event Description</label>
                        <input id='eventDescription' name='eventDescription' type='text' onChange={this.inputHandler} value={this.state.eventDescription}></input>
                        <label>Date</label>
                        <input id='eventDate' name='eventDate' type='date' onChange={this.inputHandler}
                        // value={this.state.eventDate}
                        ></input>
                        <label>Start Time</label>
                        <input id='eventStartTime' name='eventStartTime' type='time' onChange={this.inputHandler} value={this.state.eventStartTime}></input>
                        <label>End Time</label>
                        <input id='eventEndTime' name='eventEndTime' type='time' onChange={this.inputHandler} value={this.state.eventStartTime}></input>
                        <label>Private</label>
                        <input id='eventPrivacy' name='eventPrivacy' type='radio' 
                        value= 'true' 
                        onChange={this.inputHandler}></input>
                        <label>Public</label>
                        <input id='eventPrivacy' name='eventPrivacy' type='radio' 
                        value= 'false' 
                        onChange={this.inputHandler}></input>
                    </form>
                    <button onClick={this.updateFetch}>Update</button>
                    <button onClick={this.exitHandler}>Exit</button>
                    </div>
                </Dialog>
            </div>
        )
    }
}