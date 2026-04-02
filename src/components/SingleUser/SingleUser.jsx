import React from "react";
import { Link, NavLink } from "react-router";

const SingleUser = ({ user }) => {
  const { id, email, name, phone } = user;

  const userStyle = {
    border : "2px solid red",
    padding : "10px",
    borderRadius : "8px",
    marginBottom : "15px",
  

  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <small>Phone : {phone}</small>
      <br />
      <Link to={`/users/${id}`}>See description</Link>
    </div>
  );
};

export default SingleUser;
