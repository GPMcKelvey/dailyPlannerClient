import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {IAdmin} from '../Interfaces';
import './AdminStyle.css';

import AdminDisplay from './AdminDisplay';

type AcceptedProps = {
    sessionToken: string;
}

type AdminState = {
    results: IAdmin[];
}

export default class AdminFetch extends Component<AcceptedProps, AdminState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    adminFetch = async (): Promise<void> => {
        await fetch(`${APIURL}/users/userinfo`, {
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
                 results: json.users
             })
             
         ))
         console.log(this.state.results)
     }
 
     componentDidMount(){
         this.adminFetch();
     }

    render() {
        return (
            <div>
                <AdminDisplay results={this.state.results} sessionToken={this.props.sessionToken} adminFetch={this.adminFetch} />
            </div>
        )
    }
}