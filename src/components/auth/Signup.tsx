import React, {Component} from 'react';
import './AuthStyle.css'
import APIURL from '../../helpers/environment';
import {IUser} from '../Interfaces';

import { Dialog, Button, withStyles, Theme, Box } from '@material-ui/core';
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
    updateToken: (data: IUser) => void;
    exitHandler: () => void;
    signupModal: boolean;
}

type SignupState = {
    username: string;
    password: string;
    modal: boolean;
}

export default class Signup extends Component<AcceptedProps, SignupState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            modal: props.signupModal
        }
    }

    regEx: RegExp = new RegExp (/[a-z]{1,10}[0-9]{1,10}/i);

    handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();

        if(this.state.password.length<5){
            alert('Password needs to be more than 5 characters')
  
       } else if (this.state.username.length<4) {
            alert('Username needs to be more than 4 characters')
         } else if (this.regEx.test(this.state.username)){

        fetch(`${APIURL}/users/signup`,{
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
            this.props.updateToken(data);
        })
        this.props.exitHandler();
    } else {
        alert('Username needs a number')
      }
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
                <Dialog open={this.state.modal} className='signup'>  
               <div id='signupDiv'>
               <h1 className='header'>Sign Up</h1>
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
                  <ColorButton className='form-input-btn' onClick={this.handleSubmit}>Submit</ColorButton></Box>
                  <Box m={1} p={1}>
                 <ColorButton className= 'form-input-btn' onClick={this.props.exitHandler}>Exit</ColorButton></Box>
                 </Box>
              </form>
              </div>
          </Dialog>
            </div>
        )
    }
}