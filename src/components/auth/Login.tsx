import React, {Component} from 'react';
import './AuthStyle.css';
import APIURL from '../../helpers/environment';

import {Dialog, Button, withStyles, Theme, Box} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

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
    updateToken: (newToken: string) => void,
    exitHandler: () => void,
    loginModal: boolean,
}

type LoginState = {
    username: string,
    password: string,
    modal: boolean
}

export default class Login extends Component<AcceptedProps, LoginState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            modal: props.loginModal
        }
    }

    
    handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        fetch(`${APIURL}/users/login`, {
             method: 'POST',
             body: JSON.stringify({
                 user:{
                     username: this.state.username, 
                     password: this.state.password 
                    }}),
             headers: new Headers({
                  'Content-Type': 'application/json'
             })
         })
        .then(response => response.json())
        .then(data => {
            console.log(data);
   
            this.props.updateToken(data.sessionToken);
        })
        this.props.exitHandler();
    }

    inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }


    render() {
        return (
            <div>
                <Dialog open={this.state.modal} className='login'>  
                    <div id='loginDiv'>
                        <h1 className='header'>Login</h1>
                            <form className='form-inputs' onSubmit={this.handleSubmit}>    
                                <label> Username: </label>
                                <Box>
                                    <input id='username' name= 'username' type= 'text' onChange={this.inputHandler} value={this.state.username} >   
                                    </input></Box>
                                <br/>
                                <label> Password:</label>
                                <Box>
                                    <input id='password' name='password' type='password' onChange={this.inputHandler} value={this.state.password}>
                                    </input></Box>
                                <br />
                                <Box display='flex'>
                                <Box m={1} p={1}>
                                <ColorButton className='form-input-btn' onClick={this.handleSubmit}>Submit</ColorButton>
                                </Box>
                                <Box m={1} p={1}>
                                <ColorButton className= 'form-input-btn' onClick={this.props.exitHandler}>Exit</ColorButton>
                                </Box>
                                </Box>
                            </form>
                    </div>
                </Dialog>
            </div>
        )
    }
}