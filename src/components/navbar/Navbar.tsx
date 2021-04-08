import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import HomePage from '../HomePage';
import ProfileDisplay from '../profile/ProfileDisplay';

type AcceptedProps = {
    updateToken: any,
    clearToken: any,
    sessionToken: string
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
                                        <Link to='/ProfileDisplay' className='site-link'>Profile</Link>
                                    </button>
                                </li>
                            <li><button onClick={props.clearToken}>Log Out</button></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/HomePage"><HomePage updateToken={props.updateToken}/></Route>
                            <Route exact path='/ProfileDisplay'><ProfileDisplay updateToken={props.updateToken} clearToken={props.clearToken} sessionToken={props.sessionToken}/></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    
}

export default NavBar;