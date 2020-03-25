import React, { Component } from 'react';
import axios from 'axios';

//SCSS import
import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.action)
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const zipcode = e.target[2].value;
    const contactEmail = e.target[3].value;
    const workoutType = e.target[4].value;
    const availability = e.target[5].value;
    const user = {
      username,
      password,
      zipcode,
      contactEmail,
      workoutType,
      availability,
    };

    axios
      .post('/api/signup', user)
      .then((res) => {
        //console.log('hello')
        // console.log(`HI ${res}`)
        // console.log(`PROPS: ${this.props}`)
        this.props.action(res);
      })
      .catch((error) => {
        console.log(`THIS IS THE ERROR ${error.response}`);
      });

    // fetch('/api/signup', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    // .then(response => {
    //   response.json().then(body => {
    //    console.log(body)
    //    this.props.action(body)
    //   })
    // })
  }
  render() {
    return (
      <div className="signup">
        <div className="darkoverlay signup-inner">
          <div className="container">
            <div className="signup-row">
              <div className="col-md-8 m-auto">
                <h1 className="display-3 mb-4 signup-h1">Sign Up</h1>
                <form onSubmit={this.handleSignUp}>
                  <div className="form-group">
                    Username
                    <input
                      type="text"
                      className="form-control form-congrol-lg"
                      name="username"
                    />
                  </div>
                  <div className="form-group">
                    Password
                    <input
                      type="password"
                      className="form-control form-congrol-lg"
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    Zipcode
                    <input
                      type="text"
                      className="form-control form-congrol-lg"
                      name="zipcode"
                    />
                  </div>
                  <div className="form-group">
                    Email
                    <input
                      type="text"
                      className="form-control form-congrol-lg"
                      name="contacts"
                    />
                  </div>
                  <div className="form-group">
                    Workout Type
                    <input
                      type="text"
                      className="form-control form-congrol-lg"
                      name="workoutType"
                    />
                  </div>
                  <div className="form-group">
                    Availability
                    <input
                      type="text"
                      className="form-control form-congrol-lg"
                      name="availability"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-lg btn-secondary form-control form-congrol-lg">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
