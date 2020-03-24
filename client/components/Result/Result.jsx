import React, { Component } from 'react';
import ResultRender from './ResultRender.jsx'

//import Navbar
import NavBar from "./Navbar.jsx"

//SCSS Import
import './Result.scss';


class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        // if condition to check if one jwt is null or not and then we would create another fetch
        if(this.props.loginToken !== null){
        fetch('/api/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.loginToken
            },
            body: JSON.stringify({zipcode: this.props.loginZip, workoutType: this.props.loginWorkOut, availability: this.props.loginAvail})
        })
        
        .then(response => response.json())
        .then(dataBack => {
            this.setState({ users: dataBack })
            console.log('this is databack', dataBack)
        })
        .catch(err => console.log(err))

        
        } else if (this.props.signToken !== null){
            fetch('/api/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.props.signToken
                },
                body: JSON.stringify({zipcode: this.props.signZip, workoutType: this.props.signWorkOut, availability: this.props.signAvail})
            })
            
            .then(response => response.json())
            .then(dataBack => {
                this.setState({ users: dataBack })
                console.log('this is databack', dataBack)
            })
            .catch(err => console.log(err))
    
        }
    }

    render() {
    const userArray = [];
    for(let i = 0; i < this.state.users.length; i++) {
        userArray.push(
            <ResultRender 
                key={'users' + `${i}`}
                users={this.state.users[i]}
            />
        )
    }
        return ( 
            <div className="results">
                <NavBar />
                <div>
                    {/* <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center"> */}
                        <h1>People that are around your area</h1>
                        <h1>that wants to workout with a friend</h1> 
                        <br />
                    {userArray}
                    {/* </div>
                    </div>
                    </div> */}
                </div>
            </div>
        );
    }
}


export default Result;
