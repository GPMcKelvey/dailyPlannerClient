import React from 'react';
import './ProfileStyle.css';

import AdminFetch from '../rbac/AdminFetch'
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