import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/likebutton">Like Button</Link>
        </li>
        <li>
          <Link to="/loginstatus">Login Status</Link>
        </li>
        <li>
          <Link to="/tasklist">Task List</Link>
        </li>
        <li>
          <Link to="/productlist">Product List</Link>
        </li>
        <li>
          <Link to="/eventregistrationform">Event Registration Form</Link>
        </li>
        <li>
          <Link to="/userregistrationform">User Registration Form</Link>
        </li>
        <li>
          <Link to="/dropdown">Drop Down</Link>
        </li>
        <li>
          <Link to="/userData">User Data</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
