import React, {Component} from 'react';
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
    sessionToken: string;
    notesFetch: () => Promise<void>;
    title: string;
    content: string;
    id: string;
}

type updateState = {
    title: string;
    content: string;
    modal: boolean;
}

export default class NotesUpdate extends Component<AcceptedProps, updateState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            title: this.props.title,
            content: this.props.content,
            modal: false
        }
    }

    updateFetch = () : void => {
        fetch(`${APIURL}/notes/update/${this.props.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                notes: {
                    title: this.state.title,
                    content: this.state.content
                }
            }),
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.props.notesFetch();
        })
        this.setState({
            modal: false
        })
        console.log(this.state.title)
    }

    componentDidUpdate(prevState: any) {
        if (prevState.title !== this.props.title){
            this.setState({
                title: this.props.title,
                content: this.props.content
            })
        }
    }

    deleteFetch = () : void => {
        fetch(`${APIURL}/notes/delete/${this.props.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(() => this.props.notesFetch())
    }

    inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    exitHandler = () => {
        this.setState({
            modal: false
        })
    }



    render() {
        return(
            <div>
                <Box display='flex' justifyContent="center">
                    <Box m={1} p={1}>
                <ColorButton onClick={this.modalHandler}>Update</ColorButton></Box>
                <Box m={1} p={1}>
                <ColorButton onClick={this.deleteFetch}>Delete</ColorButton></Box>
                </Box>
                <Dialog open={this.state.modal} className='update'>
                    <div id='updateDiv'>
                        <h1>Update Note</h1>
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
                        <ColorButton onClick={this.updateFetch}>Update</ColorButton></Box>
                        <Box m={1}>
                        <ColorButton onClick={this.exitHandler}>Exit</ColorButton></Box>
                        </Box>
                    </div>
                </Dialog>

            </div>
        )
    }
}