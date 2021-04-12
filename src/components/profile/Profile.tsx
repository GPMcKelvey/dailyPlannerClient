import React from 'react';

import NavBar from '../navbar/Navbar';


type AcceptedProps = {
    sessionToken: string,
    clearToken: any,
    updateToken: any
}
const Profile = (props: AcceptedProps) => {
    

        return (
            <div>
                
                <NavBar clearToken={props.clearToken} updateToken={props.updateToken} sessionToken={props.sessionToken}/>
                
            </div>
        )

}

export default Profile;