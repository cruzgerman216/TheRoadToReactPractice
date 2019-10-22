import React, { useState } from "react";
import blogService from "./../services/blogs";

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false);

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
  return (
    <div>
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
      </div>
    </div>
  );
};
export default Blog;
