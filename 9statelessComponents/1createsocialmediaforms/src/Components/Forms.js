import React, { Component } from "react";

class Forms extends Component {
  state = {
    name: null,
    password: null,
    pic: null,
    log: "Login"
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.adduser(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Password: </label>
          <input type="password" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Pic Url: </label>
          <input type="text" id="pic" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
