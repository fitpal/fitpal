import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router-dom';
 


class Nav extends Component {
    render() {
        return (
        <nav>
            <ul>
                <Link to="/signup">
                    <li>Sign Up</li>
                </Link>
                <Link to="/login">
                    <li>Log In</li>
                </Link>
            </ul>
        </nav>
        )
    }
}

export default Nav;