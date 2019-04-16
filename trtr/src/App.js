import React, { Component } from "react";
import "./App.css";
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

const todo = [
  {
    item: "clean my car",
    ObjectID: 0
  },
  {
    item: "clean the room",
    ObjectID: 1
  }
];
const testingfunction = {
  gettest(dude) {
    return <h1>Where is my {dude}</h1>;
  }
};
const getstyle = {
  backgroundColor: "blue"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      todo: todo
    };
  }

  render() {
    //all declarations go outside of the return
    //jsx
    return (
      <div className="App">
        {testingfunction.gettest(<h1>idk</h1>)}
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}
        {this.state.todo.map(Item => (
          <h2 key={Item.objectID} style={getstyle}>
            {Item.item}
          </h2>
        ))}
        <h1>{this.state.todo[0].item} TESTING THE TEST</h1>
      </div>
    );
  }
}

export default App;
