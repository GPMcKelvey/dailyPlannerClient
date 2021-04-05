import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';

type AcceptedProps = {
    updateToken: any,
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
            modal: true
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/users/login`,{
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
        this.setState({modal:false});
    }

    inputHandler = (e: any) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }

    exitHandler = (e: any) => {
        this.setState({
            modal: false
        })
    }

    render() {
        return (
            <div>
                <Modal open={this.state.modal} className='signup'>  
               <div className= 'body'>
               <h1 className='header'>Login</h1>
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
                 <button className= 'form-input-btn' onClick={this.exitHandler}>Exit</button>
                  <br/>
              </form>
              </div>
          </Modal>
            </div>
        )
    }
}