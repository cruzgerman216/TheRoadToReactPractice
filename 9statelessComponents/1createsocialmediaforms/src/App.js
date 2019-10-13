import React, { Component } from "react";
import Forms from "./Components/Forms";
import AddFriend from "./Components/AddFriend";
import "./index.css";
class App extends Component {
  state = {
    fullname: null,
    password: null,
    pic: null,
    log: "Enter",
    friends: []
  };

  handlelog = e => {
    if (this.state.log === "Enter") {
      this.setState({
        log: "Login"
      });
    }
  };

  handlesign = e => {
    if (this.state.log === "Enter") {
      this.setState({
        log: "Signup"
      });
    }
  };

  adduser = user => {
    this.setState({
      log: user.log,
      fullname: user.name,
      age: user.age,
      pic: user.pic
    });
  };

  addfriend = friend => {
    var friendslist = this.state.friends;
    friendslist.push(friend);
    this.setState({
      friends: friendslist,
      friendcount: this.state.friendcount + 1
    });
    console.log(this.state.friends);
  };
  render() {
    if (this.state.log === "Enter") {
      return (
        <div>
          <h2>Welcome to PersonBook</h2>
          <button onClick={this.handlelog}>Log in</button>
          <button onClick={this.handlesign}>Sign up</button>
        </div>
      );
    } else if (this.state.log === "Signup") {
      return (
        <div>
          <p>You are signing up</p>
          <Forms adduser={this.adduser} />
        </div>
      );
    } else if (this.state.log === "Login") {
      return (
        <div>
          <p>Hey you are logged in</p>
          <h2> {this.state.fullname}</h2>
          <img src={this.state.pic} />
          <AddFriend addfriend={this.addfriend} />
        </div>
      );
    }
  }
}
export default App;
