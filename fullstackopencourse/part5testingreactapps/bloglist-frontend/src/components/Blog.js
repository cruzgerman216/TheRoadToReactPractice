import React, { useState } from "react";
import blogService from "./../services/blogs";

const Blog = ({ blog, username }) => {
  const [visible, setVisible] = useState(false);
  const [hide, sethide] = useState(false);
  const closedblog = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    display: visible ? "none" : ""
  };

  const openblog = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 3,
    marginBottom: 5,
    display: visible ? "" : "none"
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const clickLike = () => {
    const copyblog = blog;
    copyblog.likes += 1;
    console.log("blog", copyblog);
    blogService.update(copyblog.id, copyblog);
  };
  const clickDelete = () => {
    console.log("test");
    console.log("this is blog id", blog.id);
    if (window.confirm("remove blog" + blog.title + " by " + blog.author)) {
      blogService.deleteblog(blog.id);
      sethide(true);
    } else {
      console.log("no");
    }

    //hide this if it gets deleted
  };
  const gethide = { display: hide ? "none" : "" };
  const getdelete =
    username === blog.user.username ? (
      <button onClick={clickDelete}>Delete</button>
    ) : (
      ""
    );
  return (
    <div style={gethide}>
      {console.log("this is the user logged in", username)}
      <div onClick={toggleVisibility} style={closedblog}>
        {blog.title}
      </div>
      <div onClick={toggleVisibility} style={openblog}>
        {blog.title}
        <div>
          <a href={blog.url}>{blog.url}</a>
        </div>
        <div>
          {blog.likes} likes <button onClick={clickLike}>like</button>
        </div>
        <div> added by {blog.author}</div>
        {getdelete}
      </div>
    </div>
  );
};
export default Blog;
