import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Animal from "./Animal";

ReactDOM.render(<Animal />, document.getElementById("animalroot"));

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

const imageobject = {
  name: "Part 1 - Intro to HTML",
  id: 0,
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
};

function Test(IO) {
  return <img src={IO.url} key={IO.id} />;
}
ReactDOM.render(<Test image={imageobject} />, document.getElementById("test2"));
