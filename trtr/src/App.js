import React, { Component } from "react";
import "./App.css";
import Ninjas from "./components/Ninjas";

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <h1>My First React app</h1>
        <p>Welcome</p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
