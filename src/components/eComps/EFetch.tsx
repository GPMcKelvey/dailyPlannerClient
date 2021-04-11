import React, {Component} from 'react';

import {Box} from '@material-ui/core';

import ECreate from './ECreate';
import EventsDisplay from './EDisplay';
import './EStyle.css';

type AcceptedProps = {
    sessionToken: string
}

type EState = {
    results: []
}

export default class EventsFetch extends Component<AcceptedProps, EState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    personalEventFetch = async () => {
        await fetch(`http://localhost:3000/events/personal`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':
                'application/json',
                'Authorization': this.props.sessionToken
            })
        })
         .then(res => res.json())
         .then((json) => (
            console.log(json), 
            this.setState({
                 results: json.event
             })
             
         ))
         console.log(this.state.results)
     }
 
     componentDidMount(){
         this.personalEventFetch();
     }

    render() {
        return (
            <div>
                <Box pb={2}>
                <ECreate sessionToken={this.props.sessionToken} personalEventFetch={this.personalEventFetch}/>
                </Box>
                <EventsDisplay results={this.state.results} sessionToken={this.props.sessionToken} personalEventFetch={this.personalEventFetch}/>
            </div>
        )
    }
}