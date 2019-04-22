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

const testingfunction = {
  gettest(dude) {
    return <h1>Where is my {dude}</h1>;
  }
};
const getstyle = {
  backgroundColor: "blue"
};
var dropbtn = {
  fontSize: "17px",
  border: "none",
  outline: "none",
  color: "grey",
  padding: "14px 16px",
  backgroundColor: "white",
  fontFamily: "inherit",
  margin: "0px"
};
var dropdisplay = {
  display: "none"
};
const seriesList = [
  {
    title: "HTML Series",
    ObjectID: 0,
    click: true
  },
  {
    title: "CSS Series",
    ObjectID: 1
  },
  {
    title: "Javascript Series",
    ObjectID: 2
  }
];
class App extends Component {
  state = {
    name: "Ryu",
    age: 30
  };

  handleClick(e) {
    //console.log(e.target);
    console.log(state);
  }

  handleMouseOver(e) {
    console.log(e.target, e.pageX);
  }
  handleCopy(e) {
    console.log("try being original for once");
  }
  render() {
    return (
      <div className="app-content">
        <h1>Hey, Dudes</h1>
        <p>
          My name is {this.state.name} and i am {this.state.age}
        </p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>hover Me</button>
        <p onCopy={this.handleCopy}> What we think, we become</p>
      </div>
    );
  }
}

export default App;
