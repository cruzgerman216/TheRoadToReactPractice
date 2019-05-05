import React, { Component } from "react";
import "./navbar.css";
//CLICKING on sign in will change to sign out

class Navbar extends Component {
  state = {
    name: "Ryu",
    age: 30,
    sign: "Sign In"
  };
  sign = e => {
    if (this.state.sign === "Sign In") {
      this.setState({
        sign: "Sign Out"
      });
    } else {
      this.setState({
        sign: "Sign In"
      });
    }
  };

  render() {
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

          <li onClick={this.sign} className="signfloat">
            <a href="#">{this.state.sign}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
