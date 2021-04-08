import { Dialog } from '@material-ui/core';
import React, {Component} from 'react';

type AcceptedProps = {
    sessionToken: string,
    notesFetch: any,
    title: string,
    content: string,
    id: string
}

type updateState = {
    title: string,
    content: string,
    modal: boolean
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

    updateFetch = () => {
        fetch(`http://localhost:3000/notes/update/${this.props.id}`, {
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

    deleteFetch = () => {
        fetch(`http://localhost:3000/notes/delete/${this.props.id}`, {
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
                <button onClick={this.modalHandler}>Update</button>
                <button onClick={this.deleteFetch}>Delete</button>
                <Dialog open={this.state.modal}>
                    <div>
                        <h1>Update Note</h1>
                        <form>
                            <label>Note Title</label>
                            <input id='title' name='title' type='text' onChange={this.inputHandler} value={this.state.title}></input>
                            <label>Note Content</label>
                            <input id='content' name='content' type='text' onChange={this.inputHandler} value={this.state.content}></input>
                        </form>
                        <button onClick={this.updateFetch}>Update</button>
                        <button onClick={this.exitHandler}>Exit</button>
                    </div>
                </Dialog>

            </div>
        )
    }
}