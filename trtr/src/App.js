import React, { Component } from "react";
import Navbar from "./Navbar";
import Login_Form from "./Login_Form";
//container
//app.js container -> navbar ui component, login_form container

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar email="testemail" password="passy" sign="Sign In" />
        <Login_Form />
      </div>
    );
  }
}

export default App;
