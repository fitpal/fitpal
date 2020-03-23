import React, { Component } from 'react';
import axios from 'axios';


//import Navbar
import NavBar from "./Navbar.jsx"

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }
    
    // componentDidMount() {
    //     axios.get('/api/results')
    //       .then(res => {
    //           console.log("HELLOOOO")
              
    //       })
    //   }
    componentDidMount(){
        fetch('/api/results')
            .then(response => response.json())
            .then(dataBack => {
                console.log("does this go through")
                this.setState({ users: dataBack })
                console.log(dataBack)
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
