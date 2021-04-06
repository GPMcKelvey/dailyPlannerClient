import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import HomePage from '../HomePage'
import Login from '../auth/Login';
import Signup from '../auth/Signup';

type AcceptedProps = {
    // updateToken: any,
    clearToken: any
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
                            {/* <li><Link to='/Login' className='site-link'>Login</Link></li>
                            <li><Link to='/Signup' className='site-link'>Sign Up</Link></li> */}
                            <li><button onClick={props.clearToken}>Log Out</button></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/HomePage"><HomePage /></Route>
                            {/* <Route exact path="/Login"><Login updateToken={props.updateToken} /></Route>
                            <Route exact path="/Signup"><Signup updateToken={props.updateToken} /></Route> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    
}

export default NavBar;