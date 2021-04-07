import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import HomePage from '../HomePage';
import Profile from '../profile/Profile';

type AcceptedProps = {
    updateToken: any,
    clearToken: any,
    sessionToken: any
}

const NavBar = (props: AcceptedProps) => {

        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <button>
                                <Link to="/HomePage" className="site-link">Home</Link>
                                </button>
                                </li>
                                <li>
                                    <button>
                                        <Link to='/Profile' className='site-link'>Profile</Link>
                                    </button>
                                </li>
                            <li><button onClick={props.clearToken}>Log Out</button></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/HomePage"><HomePage updateToken={props.updateToken}/></Route>
                            <Route exact path='/Profile'><Profile updateToken={props.updateToken} clearToken={props.clearToken} sessionToken={props.sessionToken}/></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    
}

export default NavBar;