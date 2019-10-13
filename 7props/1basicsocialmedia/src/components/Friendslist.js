import React, { Component } from "react";

class Friendslist extends Component {
  state = {
    name: "Jimmy Dude",
    profilepic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qKnV_lbnDH1v1u5lGj4c_mvITgaHkGA-7TSje5004J5OMGdC",
    id: 1
  };
  render() {
    const { friends } = this.props;
    if (friends === this.state.id) {
      return (
        <div>
          <p>Name: {this.state.name}</p>
          <img src={this.state.profilepic} />
        </div>
      );
    } else {
      return (
        <div>
          <p>No friends</p>
        </div>
      );
    }
  }
}

export default Friendslist;
