import React, { Component } from "react";
import "./App.css";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";
class App extends Component {
  state = {
    ninjas: [
      { name: "ryu", age: 30, belt: "black", id: 1 },
      { name: "yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };
  render() {
    return (
      <div className="app-content">
        <h1>My First React app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
