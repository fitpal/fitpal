import React, { Component } from 'react';
import axios from 'axios'

import "../Signup.scss" 


class Signup extends Component {
  constructor(props) {
    super(props)
    this.handleSignIn = this.handleSignUp.bind(this)
  }

  handleSignUp(e) {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    const zipcode = e.target[2].value
    const contactEmail = e.target[3].value
    const workoutType = e.target[4].value
    const availability = e.target[5].value
    const user = {
      username, 
      password, 
      zipcode, 
      contactEmail, 
      workoutType, 
      availability
    }

    //  axios.post('/api/signup', { user })
    //     .then(res => {
    //       console.log('hello')
    //       console.log(res.data)
    //     })
    //     .catch(error => {
    //       console.log(error.response)
    //     })

    fetch('/api/signup', {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      response.json().then(body => {
        console.log(body)
      })
    })

  }
  render() {
      return(
          <div>
            <form onSubmit={ this.handleSignUp }>
              <label><input type="text" name="username" placeholder="User Name" /></label>
              <label><input type="password" name="password" placeholder="Password" /></label>
              <label><input type="text" name="zipcode" placeholder="Zipcode" /></label>
              <label><input type="text" name="contacts" placeholder="Contact Info" /></label>
              <label><input type="text" name="workoutType" placeholder="Workout Type" /></label>
              <label><input type="text" name="availability" placeholder="Availability" /></label>
              <button className="send">SEND</button>
            </form>
          </div>
      )
  }
}


export default Signup;