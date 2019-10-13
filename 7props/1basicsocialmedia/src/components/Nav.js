import React, { Component } from "react";

class Nav extends Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>{log}</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
