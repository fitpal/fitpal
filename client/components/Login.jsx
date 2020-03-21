import React, { Component } from 'react';
import axios from 'axios'



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
      // axios.post('/api/login', { user })
      //   .then(res => {
      //     console.log('hello')
      //     console.log(res.data)
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //   })

      fetch('/api/login', { 
        method: 'post', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(user)
      }) 
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log('hi')
      })
  }

  render() {
      return(
          <div>
            <form onSubmit={ this.handleLogIn } >
              <input type="text" name="username" placeholder="User Name" />
              <input type="password" name="password" placeholder="Password" />
              <button className="send">SEND</button>
            </form>
          </div>
      )
  }
}


export default Login;