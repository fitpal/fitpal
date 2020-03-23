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
            loginJwt: null,
            loginZipCode: null,
            loginWorkOutType: null,
            loginAvailability: null,
            signUpJwt: null,
            signUpZipCode: null,
            signUpWorkOutType: null,
            signUpAvailability: null,
        }
        this.handler = this.handler.bind(this)
        this.handler1 = this.handler1.bind(this)
    }

    handler(res) {
        console.log('jwt jwt jwt')
        this.setState ({
            loginJwt: res.data.tokens[0].token,
            loginZipCode: res.data.zipcode,
            loginWorkOutType: res.data.workoutType,
            loginAvailability: res.data.availability
        })
    }

    handler1(res) {
        console.log('JWT JWT JWT')
        console.log(res)
        this.setState ({
            signUpJwt: res.data.token,
            signUpZipCode: res.data.partner.zipcode,
            signUpWorkOutType: res.data.partner.workoutType,
            signUpAvailability: res.data.partner.availability
        });
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
                        {this.state.loginJwt !== null ? <Redirect to="/results" /> : <Login action={this.handler} />}
                    </Route>
                    <Route exact path="/signup" >
                        {this.state.signUpJwt !== null ? <Redirect to="/results" /> : <Signup action={this.handler1} />}
                    </Route>
                    <Route exact path="/results">

                        <Result 
                            loginToken={this.state.loginJwt} 
                            loginZip={this.state.loginZipCode}
                            loginWorkOut={this.state.loginWorkOutType}
                            loginAvail={this.state.loginAvailability}
                            signToken={this.state.signUpJwt}
                            signZip={this.state.signUpZipCode}
                            signWorkOut={this.state.signUpWorkOutType}
                            signAvail={this.state.signUpAvailability}
                        />
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;