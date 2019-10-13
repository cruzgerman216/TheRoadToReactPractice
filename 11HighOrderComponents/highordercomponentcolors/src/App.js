import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
      </div>
    </BrowserRouter>
  );
}

export default App;
