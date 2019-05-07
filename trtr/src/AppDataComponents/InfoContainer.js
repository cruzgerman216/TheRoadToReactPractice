import React, { Component } from "react";
//CLICKING on sign in will change to sign out

class InfoContainer extends Component {
  render() {
    //console.log(this.props);
    console.log("test");
    const { containers } = this.props;
    const containerslist = containers.map(container => {
      return <div key={container.id}>{container.title}</div>;
    });
    return <div>{containerslist}</div>;
  }
}

export default InfoContainer;
