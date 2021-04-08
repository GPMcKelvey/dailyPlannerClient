import React, {useState} from 'react';
import './App.css';

import HomePage from '../src/components/HomePage';
import Profile from './components/profile/Profile';

// let sessionToken: string;

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const updateToken = (newToken: string) => {
    console.log(newToken);
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }
  console.log(sessionToken);

  const authorizedViews = () => {
    return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') !== undefined ? <Profile updateToken={updateToken} sessionToken={sessionToken} clearToken={clearToken} /> : <HomePage updateToken={updateToken} />)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Daily Planner</p>
      </header>
        {authorizedViews()}
    </div>
  );
}

export default App;
