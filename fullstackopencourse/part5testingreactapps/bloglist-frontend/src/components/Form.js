import React, { useState, useEffect } from "react";
import blogService from "./../services/blogs";
import Notifcation from "../Notification";
const Form = ({ blogs, setBlogs, user }) => {
  const [newtitle, settitle] = useState("");
  const [newauthor, setauthor] = useState("");
  const [newurl, seturl] = useState("");
  const [blognotification, setBlogNotification] = useState(null);

  const addBlog = event => {
    event.preventDefault();
    const blogObject = {
      title: newtitle,
      author: newauthor,
      url: newurl
    };

    blogService
      .create(blogObject)
      .then(data => {
        const blogdup = {
          title: newtitle,
          author: newauthor,
          url: newurl,
          user: {
            username: user.username
          }
        };
        setBlogs(blogs.concat(blogdup));
        console.log("this si the new blogs", blogs);
        setBlogNotification("addblog");
        setTimeout(() => {
          setBlogNotification(null);
          settitle("");
          setauthor("");
          seturl("");
        }, 5000);
      })
      .catch(error => console.log(error));
  };
  return (
    <form onSubmit={addBlog}>
      <h2>Create New Blog</h2>
      <Notifcation
        message={blognotification}
        blogobject={{ title: newtitle, author: newauthor }}
      />
      title:{" "}
      <input
        type="text"
        value={newtitle}
        name="title"
        onChange={({ target }) => settitle(target.value)}
      />
      author:{" "}
      <input
        type="text"
        value={newauthor}
        name="author"
        onChange={({ target }) => setauthor(target.value)}
      />
      url:{" "}
      <input
        type="text"
        value={newurl}
        name="url"
        onChange={({ target }) => seturl(target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
