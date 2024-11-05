import React, { useState } from "react";

const dropDown = () => {
  const [list, setList] = useState([
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqr",
    "stu",
    "vwx",
    "yz",
  ]);

  const [selectedItem, setSelectedItem] = useState("Not Selected");

  return (
    <div>
      <h1>Drop Down</h1>
      <h2>{selectedItem}</h2>
      <select onChange={(e) => setSelectedItem(e.target.value)}>
        <option>Select an option</option>
        {list.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default dropDown;
