import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  if (message === "deleteerror") {
    //deleteerror blah blah sentence less than characters
    return <div className="error">Name already deleted</div>;
  } else {
    var copym = message;
    var copym = copym.split(" ");
    console.log("this test works ");

    if (copym.includes("name")) {
      return <div className="error">{message}</div>;
    } else {
      return <div className="added">{message}</div>;
    }
  }
};

export default Notification;
