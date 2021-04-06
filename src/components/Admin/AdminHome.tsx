import React, {useState, useEffect} from 'react';
import AdminLogin from './AdminLogin';

const AdminHome = () => {

    const [sessionToken, setSessionToken] = useState('');

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
    }

    const updateToken = (newToken: any) => {
        console.log(newToken);
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
      }
      console.log(sessionToken);


        return (
            <div>ADMIN
                {/* <AdminLogin updateToken={updateToken}/> */}
            </div>
        )
    
}

export default AdminHome;