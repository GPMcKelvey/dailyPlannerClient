import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './navbar.css';

import {Button, withStyles, Theme, Box, AppBar, Typography} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

import HomePage from '../HomePage';
import ProfileDisplay from '../profile/ProfileDisplay';

const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[300]),
      backgroundColor: purple[300],
      '&:hover': {
        backgroundColor: purple[400],
      },
    },
  }))(Button);

type AcceptedProps = {
    updateToken: any,
    clearToken: any,
    sessionToken: string
}

const NavBar = (props: AcceptedProps) => {

        return (
            <div>
                <Router>
                    <AppBar >
                    <Box className='navbar' display='flex' >
                        <Box pt={5} pr={20} flexGrow= '3.5'>
                        <Typography>Daily Planner</Typography></Box>
                        <Box display='flex' flexGrow= '7'>
                        <Box m={2} p={2}>
                        <ColorButton>
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/HomePage" className="site-link">Home</Link>
                        </ColorButton>
                        </Box>
                        <Box m={2} p={2}>
                        <ColorButton>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/ProfileDisplay' className='site-link'>Profile</Link>
                        </ColorButton>
                        </Box>
                        <Box m={2} p={2}>
                        <ColorButton onClick={props.clearToken}>Log Out</ColorButton></Box>
                        </Box>
                    </Box>
                    </AppBar>
                    <div>
                        <Switch>
                            <Route exact path="/HomePage"><HomePage updateToken={props.updateToken} sessionToken={props.sessionToken}/></Route>
                            <Route exact path='/ProfileDisplay'><ProfileDisplay updateToken={props.updateToken} clearToken={props.clearToken} sessionToken={props.sessionToken}/></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    
}

export default NavBar;