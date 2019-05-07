import React, { Component } from "react";
import "./navbar.css";
//CLICKING on sign in will change to sign out

class Navbar extends Component {
  state = {
    email: "cruzgerman216@yahoo.",
    password: "password",
    log: "Sign In"
  };
  sign = e => {
    if (this.state.log === "Sign In") {
      this.setState({
        log: "Sign Out"
      });
    } else {
      this.setState({
        log: "Sign In"
      });
    }
  };

  render() {
    //console.log(this.props);
    const { sign } = this.props;
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
            <a href="#">{sign}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
