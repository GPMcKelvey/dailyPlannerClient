import React, {Component} from 'react';
import APIURL from '../../helpers/environment';


import TodosCreate from './Create';
import TodosDisplay from './Display';
import { ITodos } from '../Interfaces';

type AcceptedProps = {
    sessionToken: string;
}

type TodosState = {
    results: ITodos[];
    
}

export default class TodosFetch extends Component<AcceptedProps, TodosState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    todosFetch = async (): Promise<any> => {
        await fetch(`${APIURL}/todos/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
         .then(res => res.json())
         .then((json) => (
            console.log(json), 
            this.setState({
                 results: json.task
             })
             
         ))
         console.log(this.state.results)
     }
 
     componentDidMount(){
         this.todosFetch();
     }

    render() {
        return (
            <div>
                <TodosCreate sessionToken={this.props.sessionToken} todosFetch={this.todosFetch} />
                <TodosDisplay sessionToken={this.props.sessionToken} results={this.state.results} todosFetch={this.todosFetch}/>
            </div>
        )
    }
}