import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriends } from '../actions';
import './FriendsList.css'

class FriendsList extends Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
           
            <div>
                 {this.props.friends.map(friend => (
                     <div className="friends-container">
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    </div>
                    ))}
            </div>
             
        )
    }
}
const mapStateToProps = ({ friends, fetchingData }) => ({
    friends,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { fetchFriends }
    )(FriendsList)
);