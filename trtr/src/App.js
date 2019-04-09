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
        title: "I'm streaming with tarminx and aj",
        ID: 0,
        URL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      },
      {
        title: "Going to code in react today",
        ID: 1,
        URL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      },
      {
        title: "Dude where's my car?",
        ID: 2,
        URL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      }
    ];
    const getstyle = {
      backgroundColor: "grey"
    };
    const todoItems = todos.map(todo => (
      <li key={todo.ID} style={getstyle}>
        {todo.title} <img key={todo.ID} src={todo.URL} />
      </li>
    ));
    console.log(todoItems);
    //jsx
    return <div className="App">{todoItems}</div>;
  }
}

export default App;
