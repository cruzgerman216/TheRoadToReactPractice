import React from "react";
import "./navbar.css";
//CLICKING on sign in will change to sign out
//ui components you don't use classes to create these
const Navbar = ({ sign }) => {
  //console.log(this.props);
  function log() {
    sign = "sign out";
  }
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

        <li onClick={log()} className="signfloat">
          <a href="#">{sign}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
