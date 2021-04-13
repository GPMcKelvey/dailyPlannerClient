import React from 'react';
import {IUser} from '../Interfaces';

import NavBar from '../navbar/Navbar';


type AcceptedProps = {
    sessionToken: string;
    clearToken: () => void;
    updateToken: (data: IUser) => void;
}
const Profile = (props: AcceptedProps) => {
    

        return (
            <div>
                <NavBar clearToken={props.clearToken} updateToken={props.updateToken} sessionToken={props.sessionToken} />
            </div>
        )

}

export default Profile;