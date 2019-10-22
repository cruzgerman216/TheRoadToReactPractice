import React from "react";
const Notification = ({ message, blogobject }) => {
  if (message === null) {
    return null;
  } else if (message === "addblog") {
    return (
      <div className="addedblog">
        a new blog {blogobject.title}! by {blogobject.author}
      </div>
    );
  }

  return <div className="error">{message}</div>;
};

export default Notification;
