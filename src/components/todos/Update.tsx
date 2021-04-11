import React, {Component} from 'react';

import {Dialog, Button, withStyles, Theme, Box} from '@material-ui/core';
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
                <ColorButton onClick={this.deleteFetch}>Completed</ColorButton>
            </div>
        )
    }
}