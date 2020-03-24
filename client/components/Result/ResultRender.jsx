import React, { Component } from 'react';




class ResultRender extends Component{
    render() {
        return(

            <div className="resultRender">
                Name: {this.props.users.username} || Workout Type: {this.props.users.workoutType} || Availability: {this.props.users.availability}
            </div>
        )
    }
}


export default ResultRender;