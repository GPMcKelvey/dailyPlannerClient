import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';

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
        fetch(`http://localhost:3000/notes/create`, {
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

    inputHandler = (e: any) => {
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
                <button onClick={this.modalHandler}>Create New Note</button>
                <Modal open={this.state.modal}>
                    <div>
                        <h1>Create Note</h1>
                        <form>
                            <label>Note Title</label>
                            <input id='title' name='title' type='text' onChange={this.inputHandler} value={this.state.title}></input>
                            <label>Note Content</label>
                            <input id='content' name='content' type='text' onChange={this.inputHandler} value={this.state.content}></input>
                        </form>
                        <button onClick={this.createFetch}>Create</button>
                        <button onClick={this.exitHandler}>Exit</button>
                    </div>
                </Modal>

            </div>
        )
    }
}