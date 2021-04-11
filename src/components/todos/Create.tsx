import React, {Component, ChangeEvent} from 'react';
import './TodoStyle.css';
import APIURL from '../../helpers/environment';


import {Button, withStyles, Theme, Box, Input} from '@material-ui/core';
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
    todosFetch: any
}

type CreateState = {
    task: string
}

export default class TodosCreate extends Component<AcceptedProps, CreateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            task: ''
        }
    }

    createFetch = () => {
        fetch(`${APIURL}/todos/create`, {
            method: 'POST',
            body: JSON.stringify({
                todos: {
                    task: this.state.task
                }
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                task: ''
            });
            this.props.todosFetch();
        })
    }

    inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }

    render() {
        return(
            <div className='createTodo'>
                <form onSubmit={this.createFetch}>
                <Box display='flex' justifyContent='center' id='createTodoDiv'>
                    <Box m={1}>
                    <label>New Task: </label>
                    <Input id='task' name='task' type='text' onChange={this.inputHandler} value={this.state.task}></Input></Box>
                <Box m={1}>
                    <ColorButton type='submit'>Add Task</ColorButton></Box>
                    </Box>
                </form>
            </div>
        )
    }

}