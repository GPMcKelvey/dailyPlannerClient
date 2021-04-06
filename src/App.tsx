import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from '../src/components/HomePage';
import Profile from '../src/components/Profile';
import Authenticate from './components/auth/Auth';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Auth from './components/auth/Auth';

// let sessionToken: string;

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

  const updateToken = (newToken: any) => {
    console.log(newToken);
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }
  console.log(sessionToken);

  const authorizedViews = () => {
    return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') != undefined ? <Profile /> : <HomePage />)
  }
  return (
    <div className="App">
      
        <NavBar clearToken={clearToken} />
        <Auth updateToken={updateToken}/>
      <header className="App-header">
        <p>Daily Planner</p>
        {/* <HomePage /> */}
        {/* <Authenticate updateToken={updateToken}/> */}
        {authorizedViews()}
      </header>
    </div>
  );
}

export default App;
