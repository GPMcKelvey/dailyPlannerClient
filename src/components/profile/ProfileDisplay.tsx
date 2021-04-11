import React from 'react';
import './ProfileStyle.css';

import {Box} from '@material-ui/core';

import AdminFetch from '../admin/AdminFetch';
import EventsFetch from '../eComps/EFetch';
import NotesFetch from '../notes/Fetch';
import TodosFetch from '../todos/Fetch';

type AcceptedProps = {
    sessionToken: string,
    clearToken: any,
    updateToken: any
}
const ProfileDisplay = (props: AcceptedProps) => {
    

        return (
            <div style={{paddingTop: '7%'}}>
                {/* <h1 style={{textAlign: 'center'}}>Welcome to your Daily Planner</h1> */}
                <div id='flexdiv'>
                <div className='notes' id='flex1'>
                <NotesFetch sessionToken={props.sessionToken} />
                </div>
                <div id='flex2'>
                <EventsFetch sessionToken={props.sessionToken} />
                </div>
                <div className='notes' id='flex3'>
                <TodosFetch sessionToken={props.sessionToken} />
                </div>
                </div>
                <AdminFetch sessionToken={props.sessionToken} />  
            </div>
        )

}

export default ProfileDisplay;

{/* <div>
                <h1>Welcome to your Daily Planner</h1>
                <Box display='flex' justifyContent='space-between'>
                <Box m={2} >
                <div id='notes'>
                <NotesFetch sessionToken={props.sessionToken} />
                </div></Box>
                <Box m={3} pl={2} pr={2}>
                <EventsFetch sessionToken={props.sessionToken} />
                </Box>
                <div id='notes'>
                <Box m={3}>
                <TodosFetch sessionToken={props.sessionToken} />
                </Box></div>
                <Box m={2}>
                <AdminFetch sessionToken={props.sessionToken} />
                </Box>
                </Box>
            </div> */}

        //     <div>
        //     <h1>Welcome to your Daily Planner</h1>
        //     <div id='flexdiv'>
        //     <div className='notes' id='flex1'>
        //     <NotesFetch sessionToken={props.sessionToken} />
        //     </div>
        //     <div id='flex2'>
        //     <EventsFetch sessionToken={props.sessionToken} />
        //     </div>
        //     <div className='notes' id='flex3'>
        //     <TodosFetch sessionToken={props.sessionToken} />
        //     </div>
        //     </div>
        //     <AdminFetch sessionToken={props.sessionToken} />
            
        // </div>