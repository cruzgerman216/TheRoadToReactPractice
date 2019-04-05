import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    //all declarations go outside of the return
    var helloworld = "welcome to the jungle!";
    var fullname = {
      fname: "German",
      lname: "Cruz"
    };
    const test = <h1>hey</h1>;
    //jsx
    return (
      <div className="App">
        <h1>tes</h1>
      </div>
    );
  }
}

export default App;
