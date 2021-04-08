import React, {Component} from 'react';
import { Dialog } from '@material-ui/core';

type AcceptedProps = {
    updateToken: any,
    exitHandler: any,
    signupModal: boolean
}

type SignupState = {
    username: string,
    password: string,
    modal: boolean
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

    regEx = new RegExp (/[a-z]{1,10}[0-9]{1,10}/i);

    handleSubmit = (event: any) => {
        event.preventDefault();

        if(this.state.password.length<5){
            alert('Password needs to be more than 5 characters')
  
       } else if (this.state.username.length<4) {
            alert('Username needs to be more than 4 characters')
         } else if (this.regEx.test(this.state.username)){

        fetch(`http://localhost:3000/users/signup`,{
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
        this.setState({modal: false});
    } else {
        alert('Username needs a number')
      }
    }

    inputHandler = (e: any) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }

    // exitHandler = (e: any) => {
    //     this.setState({
    //         modal: false
    //     })
    // }

    render() {
        return (
            <div>
                <Dialog open={this.state.modal} className='signup'>  
               <div className= 'body'>
               <h1 className='header'>Sign Up</h1>
             <form className='form-inputs' onSubmit={this.handleSubmit}>              
                
                  <label> Username: </label>
                  <input id='username' name= 'username' type= 'text' onChange={this.inputHandler} value={this.state.username} >   
                  </input>
                  <br/>
                  <label> Password:</label>
                  <input id='password' name='password' type='password' onChange={this.inputHandler} value={this.state.password}>
                  </input>
                  <br />
                  <button className='form-input-btn' onClick={this.handleSubmit}>Submit</button>
                 <button className= 'form-input-btn' onClick={this.props.exitHandler}>Exit</button>
                  <br/>
              </form>
              </div>
          </Dialog>
            </div>
        )
    }
}