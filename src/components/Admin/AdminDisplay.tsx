import React from 'react';
import AdminUpdate from './AdminDelete';

type AcceptedProps = {
    username: string,
    id: string
}

const AdminDisplay = (props: {results: Array<AcceptedProps>, sessionToken: string, adminFetch: any}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
        {props.results !== undefined ?
            result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.username}</h2>
                   <AdminUpdate sessionToken={props.sessionToken} adminFetch={props.adminFetch} id={result.id} />
               </div>
               )
            })
            : null}
        </div>
    )
}

export default AdminDisplay;