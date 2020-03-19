import React, { Component } from 'react';
import Signup from './Signup.jsx';
import Nav from './Nav.jsx';
import Login from './Login.jsx';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  // will the state live here? 
  // state = {
    // what will go in state?
    // id of the user from Mongo?
  // }

  render() {
      return(
        <Router>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <div className="App">
            <Nav />
          </div>
        </Router>
      )
  }
}


export default App;