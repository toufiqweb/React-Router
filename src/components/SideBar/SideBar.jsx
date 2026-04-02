import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div className="">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
