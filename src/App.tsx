import React, { Component } from 'react';
import { Login } from './Login'
import { proxy } from './Proxy';
import { Main } from './Main';

export default class App extends Component {
  state = { loginSuccessful: false }

  componentDidMount() {
      proxy.addEventListener("login", () => this.setState({ loginSuccessful: true}), this);
  }

  render() {
    return (
      <div className="app">
        { this.state.loginSuccessful ? <Main /> : <Login /> }
      </div>
    );
  }
}
