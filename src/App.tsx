import React, {useState, useEffect} from 'react';
import './App.css';
import { IUser } from './components/Interfaces';

import HomePage from '../src/components/HomePage';
import Profile from './components/profile/Profile';
// import ProfileDisplay from './components/profile/ProfileDisplay';

// let sessionToken: string;

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(String(localStorage.getItem('token')));
    }
  }, [])

  const updateToken = (data: IUser): void => {
    console.log(data);
    if (data.message === "Incorrect username or password") {
      alert(data.message);
    } else if (data.message === "Error logging in!") {
      alert(data.message);
    } else if (data.message === "Username already in use.") {
      alert(data.message);
    } else {
    localStorage.setItem('token', data.sessionToken);
    setSessionToken(data.sessionToken);}
  }
  console.log(sessionToken);

  const authorizedViews = () => {
    return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') !== undefined ? <Profile updateToken={updateToken} sessionToken={sessionToken} clearToken={clearToken} /> : <HomePage updateToken={updateToken} sessionToken={sessionToken} />)
  }
  return (
    <div className="App">
      {authorizedViews()}
    </div>
  );
}

export default App;
