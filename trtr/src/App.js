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
  constructor(props) {
    super(props);
    this.state = {
      list,
      seriesList
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
    console.log("test");
    if (seriesList[0].click) {
      console.log("i'm in the click");
      dropbtn = {
        fontSize: "17px",
        border: "none",
        outline: "none",
        color: "grey",
        padding: "14px 16px",
        backgroundColor: "black",
        fontFamily: "inherit",
        margin: "0px"
      };
      dropdisplay = { display: "block" };
      seriesList[0].click = false;
    } else {
      dropbtn = {
        fontSize: "17px",
        border: "none",
        outline: "none",
        color: "grey",
        padding: "14px 16px",
        backgroundColor: "white",
        fontFamily: "inherit",
        margin: "0px"
      };
      dropdisplay = { display: "none" };

      seriesList[0].click = true;
    }
  }

  render() {
    //all declarations go outside of the return
    //jsx
    return (
      <div className="App">
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
        {this.state.seriesList.map(item => (
          <div key={item.objectID}>
            <button
              style={dropbtn}
              onClick={() => this.onDismiss(item.objectID)}
              type="button"
            >
              {item.title} <h1 style={dropdisplay}>Bleh</h1>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
