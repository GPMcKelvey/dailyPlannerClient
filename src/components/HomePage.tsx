import React, {Component} from 'react';

import HomeDisplay from './HomeDisplay';
import Auth from './auth/Auth';


type AcceptedProps = {
    updateToken: any,
    sessionToken: string
}

type SearchState = {
    results: [],
    auth: boolean
}

export default class HomePage extends Component<AcceptedProps, SearchState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: [],
            auth: true
        }
    }

    publicEventFetch = async () => {
       await fetch(`http://localhost:3000/events/public`)
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
        this.publicEventFetch();
    }


    render() {
        return(
            <div>
                {this.props.sessionToken !== localStorage.getItem('token') ?
                <Auth updateToken={this.props.updateToken} /> : null}
                {this.props.sessionToken !== localStorage.getItem('token') ?
                <h1>Welcome to Daily Planner</h1> : <h1>Public Events</h1>}
                <HomeDisplay results={this.state.results}/>
                
            </div>
        )
    }
}