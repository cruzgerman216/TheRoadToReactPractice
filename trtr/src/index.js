import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Animal from "./Animal";
import Test from "./Test";
ReactDOM.render(<Animal />, document.getElementById("animalroot"));
ReactDOM.render(<Test />, document.getElementById("testroot"));

ReactDOM.render(<App />, document.getElementById("root"));

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById("test"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("ticking"));
}
setInterval(tick, 1000);
