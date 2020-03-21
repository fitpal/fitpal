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
    
    // componentDidMount(){
    //     fetch('/results')
    //         .then(response => response.json())
    //         .then(dataBack => {
    //             this.setState({ tweets: dataBack })
    //         })
    //         console.log(this.state.users)
    //         .catch(err => console.log(err))
    // }
    render() {
        return ( 
            <div className="results">
                <NavBar />
                hey
            </div>
        );
    }
}


export default Result;
