import React, { Component } from 'react';
import Login from './Login.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  loginHandler() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ?
            <div>
              Logged In!
            </div>
            :
            <Login
              toggleLogin={this.loginHandler.bind(this)}
            />
        }
      </div>
    )
  }
}