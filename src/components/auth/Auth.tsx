import React, { Component } from 'react';
import {IUser} from '../Interfaces';

import { Button, withStyles, Theme, Box, AppBar } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Login from './Login';
import Signup from './Signup';
import dailyPlanner from '../assets/dailyPlanner.png';

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
    updateToken: (data: IUser) => void;
}

type AuthState = {
    loginModal: boolean;
    signupModal: boolean;
}

export default class Auth extends Component<AcceptedProps, AuthState> {
    constructor (props: AcceptedProps) {
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

    exitHandler = () => {
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
                <Box pt={2} pr={40} flexGrow= '1'>
                    <img src={dailyPlanner} style={{maxHeight: '75%'}}></img>
                        {/* <Typography>Daily Planner</Typography> */}
                        </Box>
                        <Box display='flex' flexGrow='7' alignSelf= 'center' justifySelf='center'>
                    <Box m={2} p={1} >
                    <ColorButton variant="contained" color='primary' onClick={this.signupModalHandler}>Sign Up</ColorButton></Box>
                    <Box m={2} p={1}>
                    <ColorButton variant="contained" onClick={this.loginModalHandler}>Login</ColorButton></Box>
                    </Box>
                </Box>
                </AppBar>
                {this.state.loginModal ? <Login updateToken={this.props.updateToken} exitHandler={this.exitHandler} loginModal={this.state.loginModal} /> : null}
                {this.state.signupModal ? <Signup updateToken={this.props.updateToken} exitHandler={this.exitHandler} signupModal={this.state.signupModal} /> : null}
            </div>
        )
    }
} 