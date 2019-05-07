import React, { Component } from "react";
import InfoContainer from "./AppDataComponents/InfoContainer";
class AppData extends Component {
  state = {
    container: [
      { title: "html 1", imgurl: "url", id: 1 },
      { title: "html 2", imgurl: "url", id: 2 },
      { title: "html 3", imgurl: "url", id: 3 }
    ]
  };
  render() {
    return (
      <div className="">
        <InfoContainer containers={this.state.container} />
      </div>
    );
  }
}

export default AppData;
