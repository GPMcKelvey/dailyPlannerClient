import React, {Component} from 'react';

import {Button, withStyles, Theme, Box, AppBar, Typography} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

import Login from './Login';
import Signup from './Signup';

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
    updateToken: string,
}

type AuthState = {
    loginModal: boolean,
    signupModal: boolean
}

export default class Auth extends Component<AcceptedProps, AuthState> {
    constructor (props: any) {
        super(props)
        this.state = {
            loginModal: false,
            signupModal: false
        }
    };

    signupModalHandler = () => {
        this.setState({
            signupModal: true
        })
    }

    loginModalHandler = () => {
        this.setState({
            loginModal: true
        })
    }

    exitHandler = (e: any) => {
        this.setState({
            loginModal: false,
            signupModal: false
        })
    }

    render() {
        return(
            <div>
                <AppBar>
                <Box display='flex' justifyContent='center' className='appBar'>
                <Box pt={3.5} pr={25} flexGrow= '4'>
                        <Typography>Daily Planner</Typography></Box>
                        <Box display='flex' flexGrow='7'>
                    <Box m={2} p={1} >
                    <ColorButton variant="contained" color='primary' onClick={this.signupModalHandler}>Sign Up</ColorButton></Box>
                    <Box m={2} p={1}>
                    <ColorButton variant="contained" onClick={this.loginModalHandler}>Login</ColorButton></Box>
                    </Box>
                </Box>
                </AppBar>
                {this.state.loginModal ? <Login updateToken={this.props.updateToken} exitHandler={this.exitHandler} loginModal={this.state.loginModal}/> : null}
                {this.state.signupModal ? <Signup updateToken={this.props.updateToken} exitHandler={this.exitHandler} signupModal={this.state.signupModal} /> : null}
            </div>
        )
    }
} 