import React from 'react';

type AcceptedProps = {
    task: string,
    content: boolean
}

const TodosDisplay = (props: {results: Array<AcceptedProps>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.task}</h2>
               </div>
               )
            })}
        </div>
    )
}

export default TodosDisplay;