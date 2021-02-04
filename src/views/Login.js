import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/login';

class Login extends Component {
  constructor() {
    super();
    this.usernameRef = createRef(null);
    this.passwordRef = createRef(null);
  }
  login = () => {
    let username = this.usernameRef.current.value;
    let password = this.passwordRef.current.value;
    this.props.login(username, password);
  };
  logout = () => {
    this.props.logout();
  };
  LoginFrom = () => {
    return (
      <>
        <form action="">
          <label>用户名: </label>
          <input ref={this.usernameRef} />
          <label>密码: </label>
          <input ref={this.passwordRef} />
          <button onClick={this.login}>登陆</button>
        </form>
      </>
    );
  };
  LogoutFrom = () => {
    return (
      <>
        <form action="">
          <label>用户名: </label>
          {this.props.token}
          <button onClick={this.logout}>登出</button>
        </form>
      </>
    );
  };
  render() {
    return <>{this.props.username ? this.LogoutFrom() : this.LoginFrom()}</>;
  }
}

export default connect((state) => state.user, actions)(Login);
