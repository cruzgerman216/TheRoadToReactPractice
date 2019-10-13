import React, { Component } from "react";
import Friendslist from "./Friendslist";
class Profile extends Component {
  render() {
    const { name, profilepic, aboutme, friends } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <img src={profilepic} />
        <p>About me: {aboutme}</p>
        <h3>Friends: {friends}</h3>
        <Friendslist friends={friends} />
      </div>
    );
  }
}

export default Profile;
