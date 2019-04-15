import React, { Component } from "react";

class Test extends Component {
  getGreeting() {
    return "welcome to react";
  }

  render() {
    return (
      <div>
        <h1>{this.getGreeting()}</h1>
      </div>
    );
  }
}

export default Test;
