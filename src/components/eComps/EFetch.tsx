import React, {Component} from 'react';
import EventsDisplay from './EDisplay';

type AcceptedProps = {
    sessionToken: any
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
                <EventsDisplay results={this.state.results}/>
            </div>
        )
    }
}