import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



//import routes
import Landing from './components/Landing.jsx';
import Result from './components/Result/Result.jsx'
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';



//css
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            jwt: null,
            jwt1: null,
        }
        this.handler = this.handler.bind(this)
        this.handler1 = this.handler1.bind(this)
    }

    handler(res) {
        console.log('jwt jwt jwt')
        this.setState ({
            jwt: res.data.tokens[0].token
        })
    }

    handler1(res) {
        console.log('JWT JWT JWT')
        console.log(res)
        this.setState ({
            jwt1: res.token
        })
    }
  
    // parent (App) state should hold the JWT
    // and pass a function to <Login> that'll
    // let <Login> set the parent token state


    render() {
        return ( 
            <div className="App">
                <Router>
                    {/*
                        TODO: if token is set already, redirect 
                        `/` or `/login` or `/signup` to `/results`
                    */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login">
                        {this.state.jwt !== null ? <Redirect to="/results" /> : <Login action={this.handler} />}
                    </Route>
                    <Route exact path="/signup" >
                        {this.state.jwt1 !== null ? <Redirect to="/results" /> : <Signup action={this.handler1} />}
                    </Route>
                    <Route exact path="/results" component={Result} />
                </Router>
            </div>
        );
    }
}

export default App;