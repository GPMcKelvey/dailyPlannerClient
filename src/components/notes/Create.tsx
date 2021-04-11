import React, {Component, ChangeEvent} from 'react';
import './NoteStyle.css';
import APIURL from '../../helpers/environment';


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
    notesFetch: any
}

type CreateState = {
    title: string,
    content: string,
    modal: boolean
}

export default class NotesCreate extends Component<AcceptedProps, CreateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            title: '',
            content: '',
            modal: false
        }
    }

    createFetch = () => {
        fetch(`${APIURL}/notes/create`, {
            method: 'POST',
            body: JSON.stringify({
                notes: {
                    title: this.state.title,
                    content: this.state.content
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
                title: '',
                content: '',
                modal: false
            });
            this.props.notesFetch();
        })
    }

    inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }

    modalHandler = () => {
        this.setState({
            modal: true
        })
    }
    exitHandler = (e: any) => {
        this.setState({
            modal: false
        })
    }

    render() {
        return(
            <div>
                <Box id='btpB' display='flex' justifyContent='center'>
                <ColorButton onClick={this.modalHandler}>Create New Note</ColorButton></Box>
                <Dialog open={this.state.modal} className='create'>
                    <div id='createDiv'>
                        <h1>New Note</h1>
                        <form>
                        <Box display='flex' m={2} p={1}>
                            <Box m={1}>
                            <label>Title: </label>
                            <br/>
                            <input id='title' name='title' type='text' onChange={this.inputHandler} value={this.state.title}></input></Box>
                            <Box m={1}>
                            <label>Content: </label>
                            <br/>
                            <input id='content' name='content' type='text' onChange={this.inputHandler} value={this.state.content}></input></Box>
                        </Box>
                        </form>
                        <Box display='flex' justifyContent='center' m={2} p={2}>
                        <Box m={1}>
                        <ColorButton onClick={this.createFetch}>Create</ColorButton></Box>
                        <Box m={1}>
                        <ColorButton onClick={this.exitHandler}>Exit</ColorButton></Box>
                        </Box>
                    </div>
                </Dialog>

            </div>
        )
    }
}