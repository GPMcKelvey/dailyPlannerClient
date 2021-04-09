import React from 'react';

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
            <div>
                <h1>Welcome to your Daily Planner</h1>
                <EventsFetch sessionToken={props.sessionToken} />
                <hr/>
                <NotesFetch sessionToken={props.sessionToken} />
                <hr/>
                <TodosFetch sessionToken={props.sessionToken} />
                <AdminFetch sessionToken={props.sessionToken} />
            </div>
        )

}

export default ProfileDisplay;