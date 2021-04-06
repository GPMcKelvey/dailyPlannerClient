import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';

type AcceptedProps = {
    updateToken: any
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
                <div>
                    <button onClick={this.signupModalHandler}>Signup</button>
                    <button onClick={this.loginModalHandler}>Login</button>
                </div>
                {this.state.loginModal ? <Login updateToken={this.props.updateToken} exitHandler={this.exitHandler} loginModal={this.state.loginModal}/> : null}
                {this.state.signupModal ? <Signup updateToken={this.props.updateToken} exitHandler={this.exitHandler} signupModal={this.state.signupModal} /> : null}
            </div>
        )
    }
} 