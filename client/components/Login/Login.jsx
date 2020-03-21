import React, { Component } from 'react';
import axios from 'axios';

//SCSS Import
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props) 
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn(e){
    // everytime we click submit it won't do the refresh to look for method and action 
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    const user = { 
      username, 
      password 
    }

      axios.post('/api/login', user)
        .then(res => {
          console.log('hello')
          console.log(res.data)
        })
        .catch(error => {
          console.log(error.response)
        })

      // fetch('/api/login', { 
      //   method: 'post', 
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }, 
      //   body: JSON.stringify(user)
      // })
      // .then(response => {
      //   response.json().then(body =>
      //     console.log(body)
      //   )
      // })
  }

  render() {
      return(
          <div className="login">
            <div className="dark_overlay login-inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4 login-h1">Login</h1>
                    <form onSubmit={ this.handleLogIn } >
                      <div className="form-group">
                        Username
                        <input type="text" className="form-control form-congrol-lg" name="username"/>
                      </div>
                      <div className="form-group">
                        Password
                        <input type="password" className="form-control form-congrol-lg" name="password"/>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-lg btn-dark mr-2">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }
}


export default Login;