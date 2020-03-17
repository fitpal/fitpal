import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



//import routes
import Landing from './components/Landing';
import Login from './components/Login';


//css
import "./App.scss";

class App extends Component {

    render() {
        return ( 
            <Router>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                </div>
            </Router>
        );
    }
}

export default App;