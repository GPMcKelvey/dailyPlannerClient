import React, {Component} from 'react';
import AdminDisplay from '../admin/AdminDisplay';

type AcceptedProps = {
    sessionToken: any
}

type NotesState = {
    results: []
}

export default class AdminFetch extends Component<AcceptedProps, NotesState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    adminFetch = async () => {
        await fetch(`http://localhost:3000/users/userinfo`, {
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