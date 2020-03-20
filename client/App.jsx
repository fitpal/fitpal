import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



//import routes
import Landing from './components/Landing.jsx';
import Result from './components/Result/Result.jsx'



//css
import "./App.scss";

class App extends Component {

    render() {
        return ( 
            <Router>
                <div className="App">
                    <Route exact path="/" component={Result} />
                </div>
            </Router>
        );
    }
}

export default App;