import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Form from "./components/Form";
import Notification from "./Notification";
import "./index.css";
import Togglable from "./components/Togglable";
const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [userblogs, setUserBlogs] = useState([]);
  useEffect(() => {
    blogService.getAll().then(initialBlogs => {
      return setBlogs(initialBlogs);
    });
  }, []);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedblogappUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    } else {
      console.log("not logged in");
    }
  }, []);

  const rows = () => {
    console.log("these are already blogs", blogs);
    console.log("this is use", user);
    const filterblogs = blogs.filter(
      blog =>
        blog.user.username === user.username || blog.username === user.username
    );
    console.log("this is filtered", filterblogs);
    return filterblogs.map(blog => {
      return <Blog blog={blog} key={blog.id} />;
    });
  };

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      const filterblogs = blogs.filter(
        blog => blog.user.username === user.username
      );
      setBlogs(filterblogs);

      window.localStorage.setItem("loggedblogappUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password{" "}
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  return (
    <div>
      <h1>Blogs</h1>
      <Notification message={errorMessage} />

      <h2>Login</h2>
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <Togglable buttonLabel="new blog">
            <Form blogs={blogs} setBlogs={setBlogs} user={user} />
          </Togglable>

          {rows()}
          {
            <button
              onClick={() => {
                window.localStorage.removeItem("loggedblogappUser");
                setUser(null);
              }}
            >
              Log Out
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default App;
