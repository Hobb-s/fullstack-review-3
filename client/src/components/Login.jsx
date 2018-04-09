import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('Login current state: ', this.state);
  }

  onLoginHandler() {
    axios.get(`/api/user/signup/${this.state.username}/${this.state.password}`)
      .then(response => {
        response.status === 202 && this.props.toggleLogin();
      })
      .catch(error => {
        console.log('Server error: ', error);
      })
  }

  onSignUpHandler() {
    const payload = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/api/user/signup', payload)
      .then(response => console.log('Server replied with...', response))
      .catch(error => console.log('Server error: ', error));
  }

  render() {
    return (
      <div>
        <div>Please login or sign up to continue!</div>
        <div>Username:</div>
        <input
          name="username"
          onChange={this.onChangeHandler.bind(this)}
        />
        <div>Password:</div>
        <input
          name="password"
          type="password"
          onChange={this.onChangeHandler.bind(this)}
        />
        <br />
        <br />
        <button onClick={this.onLoginHandler.bind(this)}>
          Login
        </button>
        <br />
        <button onClick={this.onSignUpHandler.bind(this)}>
          Sign Up
        </button>
      </div>
    )
  }
}