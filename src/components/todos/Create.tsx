import React, {Component, ChangeEvent} from 'react';

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
        fetch(`http://localhost:3000/todos/create`, {
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
            <div>
                <form>
                    <label>New Task: </label>
                    <input id='task' name='task' type='text' onChange={this.inputHandler} value={this.state.task}></input>
                </form>
                    <button onClick={this.createFetch}>Add Task</button>
            </div>
        )
    }

}