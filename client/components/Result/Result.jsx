import React, { Component } from 'react';
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
        fetch('/api/results')
            .then(response => response.json())
            .then(dataBack => {
                this.setState({ users: dataBack })
            })
            .catch(err => console.log(err))
    }
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
