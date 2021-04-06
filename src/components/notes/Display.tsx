import React from 'react';

type AcceptedProps = {
    title: string,
    content: string
}

const EventsDisplay = (props: {results: Array<AcceptedProps>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.title}</h2>
                   <p>{result.content}</p>
               </div>
               )
            })}
        </div>
    )
}

export default EventsDisplay;