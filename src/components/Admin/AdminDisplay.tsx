import React from 'react';

type AcceptedProps = {
    username: string,
}

const AdminDisplay = (props: {results: Array<AcceptedProps>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
        {props.results !== undefined ?
            result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.username}</h2>
               </div>
               )
            })
            : null}
        </div>
    )
}

export default AdminDisplay;