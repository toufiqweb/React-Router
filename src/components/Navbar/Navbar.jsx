import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>This is Navbar</h2>
      {/* <a href="/">Home</a>
      <a href="/blogs">Blogs</a>
      <a href="/about">About</a>
      <a href="/settings">Settings</a> */}

      {/* <ul>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </ul> */}
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </ul>


    </div>
  );
};

export default Navbar;
