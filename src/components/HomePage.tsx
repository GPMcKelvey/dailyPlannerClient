import React, {Component} from 'react';
import APIURL from '../helpers/environment';
import {IEvents, IUser} from './Interfaces';

import HomeDisplay from './HomeDisplay';
import Auth from './auth/Auth';


type AcceptedProps = {
    updateToken: (data: IUser) => void;
    sessionToken: string;
}

type SearchState = {
    results: IEvents[];
    auth: boolean;
}

export default class HomePage extends Component<AcceptedProps, SearchState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: [],
            auth: true
        }
    }

    publicEventFetch = async (): Promise<any> => {
       await fetch(`${APIURL}/events/public`)
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
            <div style={{paddingTop: '10%'}}>
                {this.props.sessionToken !== localStorage.getItem('token') ?
                <Auth updateToken={this.props.updateToken} /> : null}
                {this.props.sessionToken !== localStorage.getItem('token') ?
                <h1>Welcome to Daily Planner</h1> : <h1>Public Events</h1>}
                <HomeDisplay results={this.state.results}/>
                
            </div>
        )
    }
}