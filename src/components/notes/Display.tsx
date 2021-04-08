import React from 'react';
import NotesUpdate from './Update';

type AcceptedProps = {
    title: string,
    content: string,
    id: string
}

const NotesDisplay = (props: {results: Array<AcceptedProps>, sessionToken: string, notesFetch: any}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.title}</h2>
                   <p>{result.content}</p>
                   <NotesUpdate sessionToken={props.sessionToken} notesFetch={props.notesFetch} title={result.title} content={result.content} id={result.id} />
               </div>
               )
            })}
        </div>
    )
}

export default NotesDisplay;