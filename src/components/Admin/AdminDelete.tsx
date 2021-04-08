import { Button } from '@material-ui/core';
import React, {Component} from 'react';

type AcceptedProps = {
    sessionToken: string,
    adminFetch: any,
    id: string
}

type adminState = {

}

export default class AdminUpdate extends Component<AcceptedProps, adminState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {

        }
    }

    deleteFetch = () => {
        fetch(`http://localhost:3000/users/delete/${this.props.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(() => this.props.adminFetch())
    }

    render() {
        return(
            <div>
                <Button onClick={this.deleteFetch}>Delete User</Button>
            </div>
        )
    }
}