import React from "react";

const Filter = ({ filter, setFilter }) => {
  const setthefilter = e => {
    setFilter(e.target.value);
    console.log(filter);
  };
  return (
    <div>
      <label>Search</label> <input onChange={setthefilter} />
    </div>
  );
};

export default Filter;
