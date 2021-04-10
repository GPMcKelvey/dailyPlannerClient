import React from 'react';
import './AdminStyle.css';

import { Box } from '@material-ui/core';

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
            <h1>Users List</h1>
        {props.results !== undefined ?
            result.map((result: AcceptedProps) => {
                return(    
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Box mr={1}>
                   <h2>{result.username}</h2>
                   </Box>
                   <AdminUpdate sessionToken={props.sessionToken} adminFetch={props.adminFetch} id={result.id} />
               </Box>
               )
            })
            : null}
        </div>
    )
}

export default AdminDisplay;