import React, { Component } from "react";
class Profile extends Component {
  render() {
    const { name, age, pic } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <img src={pic} />
      </div>
    );
  }
}
export default Profile;
