import React, { useState, useEffect } from "react";
import blogService from "./../services/blogs";
import Notifcation from "../Notification";
import { useField } from "../hooks";
const Form = ({ blogs, setBlogs, user }) => {
  const newtitle = useField("text");
  const newauthor = useField("text");
  const newurl = useField("text");
  const [blognotification, setBlogNotification] = useState(null);

  const addBlog = event => {
    event.preventDefault();
    const blogObject = {
      title: newtitle.value,
      author: newauthor.value,
      url: newurl.value
    };

    blogService
      .create(blogObject)
      .then(data => {
        const blogdup = {
          title: newtitle.value,
          author: newauthor.value,
          url: newurl.value,
          user: {
            username: user.username
          }
        };
        setBlogs(blogs.concat(blogdup));
        console.log("this si the new blogs", blogs);
        setBlogNotification("addblog");
        setTimeout(() => {
          setBlogNotification(null);
          newtitle.reset();
          newauthor.reset();
          newurl.reset();
        }, 5000);
      })
      .catch(error => console.log(error));
  };
  return (
    <form onSubmit={addBlog}>
      <h2>Create New Blog</h2>
      <Notifcation
        message={blognotification}
        blogobject={{ title: newtitle.value, author: newauthor.value }}
      />
      title:{" "}
      <input
        type="text"
        value={newtitle.value}
        name="title"
        onChange={newtitle.onChange}
      />
      author:{" "}
      <input
        type="text"
        value={newauthor.value}
        name="author"
        onChange={newauthor.onChange}
      />
      url:{" "}
      <input
        type="text"
        value={newurl.value}
        name="url"
        onChange={newurl.onChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
