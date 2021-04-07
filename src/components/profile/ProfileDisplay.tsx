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
                profile test
                <EventsFetch sessionToken={props.sessionToken} />
                <NotesFetch sessionToken={props.sessionToken} />
                <TodosFetch sessionToken={props.sessionToken} />
                <AdminFetch sessionToken={props.sessionToken} />
            </div>
        )

}

export default ProfileDisplay;