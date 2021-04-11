import React, {Component} from 'react';
import './EStyle.css';

import {Dialog, Button, withStyles, Theme, Box, Switch} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[300]),
      backgroundColor: purple[300],
      '&:hover': {
        backgroundColor: purple[400],
      },
    },
  }))(Button);

const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[400],
      },
      '$checked': {
        backgroundColor: purple[400],
      },
    },
  })(Switch);

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

    switchHandler = () => {
        if (this.state.eventPrivacy === true) {
        this.setState({
            eventPrivacy: false,
        })
    } else {
        this.setState({
            eventPrivacy: true,
        })
    }
    }

    render() {
        return(
            <div>
                <Box display='flex' justifyContent="center">
                    <Box m={1} p={1}>
                <ColorButton onClick={this.modalHandler}>Update</ColorButton></Box>
                <Box m={1} p={1}>
                <ColorButton onClick={this.deleteFetch}>Delete</ColorButton></Box>
                </Box>
                <Dialog open={this.state.modal} className='update'>
                    <div id='updateDiv'>
                        <h1>Update Event</h1>
                    <form>
                    <Box display='flex' m={2} p={1}>
                            <Box m={1}>
                        <label>Event Title: </label>
                        <input id='eventTitle' name='eventTitle' type='text' onChange={this.inputHandler} value={this.state.eventTitle}></input></Box>
                        <Box m={1}>
                        <label>Event Description: </label>
                        <input id='eventDescription' name='eventDescription' type='text' onChange={this.inputHandler} value={this.state.eventDescription}></input></Box>
                        </Box>
                        <Box display='flex' m={2}>
                            <Box m={1}>
                        <label>Date: </label>
                        <input id='eventDate' name='eventDate' type='date' onChange={this.inputHandler}
                        // value={this.state.eventDate}
                        ></input>
                        </Box>
                        <Box m={1}>
                        <label>Start Time: </label>
                        <input id='eventStartTime' name='eventStartTime' type='time' onChange={this.inputHandler} value={this.state.eventStartTime}></input></Box>
                        <Box m={1}>
                        <label>End Time: </label>
                        <input id='eventEndTime' name='eventEndTime' type='time' onChange={this.inputHandler} value={this.state.eventStartTime}></input></Box>
                        </Box>
                        <label>Private: </label>
                        <PurpleSwitch checked={this.state.eventPrivacy} onChange={this.switchHandler}></PurpleSwitch>
                    </form>
                    <Box display='flex' justifyContent='center' m={2} p={2}>
                        <Box m={1}>
                    <ColorButton onClick={this.updateFetch}>Update</ColorButton></Box>
                    <Box m={1}>
                    <ColorButton onClick={this.exitHandler}>Exit</ColorButton></Box>
                    </Box>
                    </div>
                </Dialog>
            </div>
        )
    }
}