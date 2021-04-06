import React, {Component} from 'react';
import NotesDisplay from './Display';

type AcceptedProps = {
    sessionToken: any
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
        await fetch(`http://localhost:3000/notes/`, {
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
                <NotesDisplay results={this.state.results}/>
            </div>
        )
    }
}