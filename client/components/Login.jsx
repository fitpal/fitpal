import React, { Component } from 'react';
import './App.css'


class Login extends Component {

  render() {
      return(
          <div>
            <form action="/login" method="POST">
              <label><input type="text" name="username" placeholder="User Name" /></label>
              <label><input type="password" name="password" placeholder="Password" /></label>
              <button class="send">SEND</button>
            </form>
          </div>
      )
  }
}


export default Login;