import React, { Component } from "react";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
class App extends Component {
  state = {
    name: "German Cruz",
    log: "Log in",
    profilepic:
      "https://cdn.guidingtech.com/media/assets/WordPress-Import/2012/10/Smiley-Thumbnail.png",
    aboutme:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    friends: 1
  };

  deleteFriend = e => {
    this.setState({
      friends: 0
    });
  };
  render() {
    return (
      <div className="App">
        <Nav log={this.state.log} />
        <Profile
          name={this.state.name}
          profilepic={this.state.profilepic}
          aboutme={this.state.aboutme}
          friends={this.state.friends}
        />
        <button onClick={this.deleteFriend}>Delete Friend</button>
      </div>
    );
  }
}

export default App;
