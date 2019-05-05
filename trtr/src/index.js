import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Roadmap from "./Roadmap";
import "./index.css";
import Navbar from "./Navbar";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<Navbar />, document.getElementById("root2"));

ReactDOM.render(<Roadmap />, document.getElementById("root"));
