import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    //all declarations go outside of the return
    let helloworld = "welcome to the jungle!";
    const fullname = {
      fname: "German",
      lname: "Cruz"
    };
    const list = [
      {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0
      },
      {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ];

    const todos = [
      {
        title: "Today I'm going to talk to stevethecameraman",
        ID: 0
      },
      {
        title: "Going to code in react today",
        ID: 1
      }
    ];
    const todoItems = todos.map((todo, index) => (
      // Only do this if items have no stable IDs
      <li key={todos.ID}>{todo.text}</li>
    ));
    //jsx
    return <div className="App">{todoItems.title}</div>;
  }
}

export default App;
