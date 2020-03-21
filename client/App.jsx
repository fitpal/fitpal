import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



//import routes
import Landing from './components/Landing.jsx';
import Result from './components/Result/Result.jsx'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';



//css
import "./App.scss";

class App extends Component {

    render() {
        return ( 
            <div className="App">
                <Router>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Router>
            </div>
        );
    }
}

export default App;