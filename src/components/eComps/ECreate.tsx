import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';

type AcceptedProps = {
    sessionToken: string,
    personalEventFetch: any
}

type CreateState = {
    eventDate: Date,
    eventDescription?: string,
    eventEndTime?: number,
    eventStartTime?: number,
    eventTitle: string,
    eventPrivacy: boolean,
    modal: boolean
}

export default class ECreate extends Component<AcceptedProps, CreateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            eventDate: new Date(),
            eventDescription: '',
            eventEndTime: 0,
            eventStartTime: 0,
            eventTitle: '',
            eventPrivacy: true,
            modal: false

        }
    }

    createFetch = () => {
        fetch(`http://localhost:3000/events/create`, {
            method: 'POST',
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
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                eventDate: new Date(),
                eventDescription: '',
                eventEndTime: 0,
                eventStartTime: 0,
                eventTitle: '',
                eventPrivacy: true,
                modal: false
            });
            this.props.personalEventFetch();
        })

    }

    inputHandler = (e: any) => {
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
    exitHandler = (e: any) => {
        this.setState({
            modal: false
        })
    }


    render() {
        return(
            <div>
                <button onClick={this.modalHandler}>Create New Event</button>
                <Modal open={this.state.modal}>
                    <div>
                        <h1>Create Event</h1>
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
                    <button onClick={this.createFetch}>Create</button>
                    <button onClick={this.exitHandler}>Exit</button>
                    </div>
                </Modal>

            </div>
        )
    }
}