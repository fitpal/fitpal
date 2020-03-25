import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">FitPal</h1>
                <p className="lead"> created by Team Goblin Shark</p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-dark mr-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-lg btn-secondary">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
