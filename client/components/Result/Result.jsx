import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axois from 'axios';


//import Navbar
import NavBar from "./Navbar.jsx"

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        axois.get('/results')
        .then(res => {
            console.log(hey)
        })
    }
    render() {
        return ( 
            <Router>
                <div className="results">
                    <NavBar />
                    hey
                </div>
            </Router>
        );
    }
}


export default Result;
