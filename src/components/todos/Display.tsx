import React from 'react';
import TodosUpdate from './Update';

type AcceptedProps = {
    task: string,
    complete: boolean,
    id: string
}

const TodosDisplay = (props: {results: Array<AcceptedProps>, sessionToken: string, todosFetch: any}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.task}</h2>
                   <TodosUpdate sessionToken={props.sessionToken} id={result.id} todosFetch={props.todosFetch}/>
               </div>
               )
            })}
        </div>
    )
}

export default TodosDisplay;