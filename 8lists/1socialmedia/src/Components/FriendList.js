import React, { Component } from "react";
var size = { width: "200px", height: "200px" };
var count = 0;
class FriendList extends Component {
  render() {
    const { friends } = this.props;

    const FriendsList = friends.map(friend => {
      return (
        <div key={friend.id}>
          <h3>{friend.fullname}</h3>
          <img style={size} src={friend.pic} />
        </div>
      );
    });
    return (
      <div>
        <h4>Friends</h4>
        {FriendsList}
      </div>
    );
  }
}

export default FriendList;
