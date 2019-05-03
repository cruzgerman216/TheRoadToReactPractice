import React, { Component } from "react";
import "./navbar.css";
//CLICKING on sign in will change to sign out

class Navbar extends Component {
  render() {
    var sign = "Sign In";
    return (
      <div>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>

          <li className="signfloat">
            <a href="#">{sign}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
