import React from 'react';
import EventsFetch from '../eComps/EFetch';
import NotesFetch from '../notes/Fetch';
import TodosFetch from '../todos/Fetch';

type AcceptedProps = {
    sessionToken: any
}
const Profile = (props: AcceptedProps) => {
    

        return (
            <div>
                profile test
                <EventsFetch sessionToken={props.sessionToken} />
                <NotesFetch sessionToken={props.sessionToken} />
                <TodosFetch sessionToken={props.sessionToken} />
            </div>
        )

}

export default Profile;