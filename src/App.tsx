import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from '../src/components/HomePage';
import Profile from './components/profile/Profile';
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
    return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') != undefined ? <Profile sessionToken={sessionToken}/> : <HomePage />)
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar clearToken={clearToken} />
        <Auth updateToken={updateToken}/>
        <p>Daily Planner</p>
        {/* <HomePage /> */}
        {/* <Authenticate updateToken={updateToken}/> */}
      </header>
        {authorizedViews()}
    </div>
  );
}

export default App;
