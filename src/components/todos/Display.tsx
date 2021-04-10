import React from 'react';

import TodosUpdate from './Update';

import { Box } from '@material-ui/core';

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
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Box m={1} pb={.5}>
                   <h2>{result.task}</h2>
                   </Box>
                   <Box m={1}>
                   <TodosUpdate sessionToken={props.sessionToken} id={result.id} todosFetch={props.todosFetch}/>
                   </Box>
               </Box>
               )
            })}
        </div>
    )
}

export default TodosDisplay;