import React, {Component} from 'react';

import {Button} from '@material-ui/core';

type AcceptedProps = {
    sessionToken: string,
    todosFetch: any,
    id: string
}

type updateState = {
    task: string
}

export default class TodosUpdate extends Component<AcceptedProps, updateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            task: ''
        }
    }

    deleteFetch = () => {
        fetch(`http://localhost:3000/todos/delete/${this.props.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(() => this.props.todosFetch())
    }






    render() {
        return(
            <div>
                <Button onClick={this.deleteFetch}>Completed</Button>
            </div>
        )
    }
}