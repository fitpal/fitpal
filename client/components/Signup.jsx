import React, { Component } from 'react';

import "../Signup.scss" 


class Signup extends Component {

  render() {
      return(
          <div>
            <form action="/signup" method="POST">
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