import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["Red", "Blue", "Green", "Yellow", "Orange", "Brown"];
  const randomcolor = colours[Math.floor(Math.random() * 5)];

  var color = { color: randomcolor };
  return props => {
    return (
      <div style={color}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
