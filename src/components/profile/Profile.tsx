import React from 'react';
import AdminFetch from '../admin/AdminFetch';
import EventsFetch from '../eComps/EFetch';
import NavBar from '../navbar/Navbar';
import NotesFetch from '../notes/Fetch';
import TodosFetch from '../todos/Fetch';

type AcceptedProps = {
    sessionToken: any,
    clearToken: any,
    updateToken: any
}
const Profile = (props: AcceptedProps) => {
    

        return (
            <div>
                <div>
                    <NavBar clearToken={props.clearToken} updateToken={props.updateToken} sessionToken={props.sessionToken}/>
                </div>
                profile test
                <EventsFetch sessionToken={props.sessionToken} />
                <NotesFetch sessionToken={props.sessionToken} />
                <TodosFetch sessionToken={props.sessionToken} />
                <AdminFetch sessionToken={props.sessionToken} />
            </div>
        )

}

export default Profile;