import React, { Component } from "react";
var passtemp = "";
class Login_Form extends Component {
  state = {
    email: "cruzgerman216@yahoo.",
    password: "password",
    sign: "Sign In"
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handlePassword = e => {
    passtemp = e.target.value;
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
    if (passtemp === this.state.password) {
      console.log("correct");
    } else {
      console.log("try again");
    }
  };
  render() {
    return (
      <div>
        <h1> My name is {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input
            name="password"
            type="password"
            onChange={this.handlePassword}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Login_Form;
