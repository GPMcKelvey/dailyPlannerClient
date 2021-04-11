import React, {Component} from 'react';
import APIURL from '../../helpers/environment';


import NotesCreate from './Create';
import NotesDisplay from './Display';

type AcceptedProps = {
    sessionToken: string
}

type NotesState = {
    results: []
}

export default class NotesFetch extends Component<AcceptedProps, NotesState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    notesFetch = async () => {
        await fetch(`${APIURL}/notes/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':
                'application/json',
                'Authorization': this.props.sessionToken
            })
        })
         .then(res => res.json())
         .then((json) => (
            console.log(json), 
            this.setState({
                 results: json.note
             })
             
         ))
         console.log(this.state.results)
     }
 
     componentDidMount(){
         this.notesFetch();
     }

    render() {
        return (
            <div>
                <NotesCreate sessionToken={this.props.sessionToken} notesFetch={this.notesFetch} />
                <NotesDisplay results={this.state.results} sessionToken={this.props.sessionToken} notesFetch={this.notesFetch}/>
            </div>
        )
    }
}