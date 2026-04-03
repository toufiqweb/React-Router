import React, { Suspense, useState } from "react";
import { Link, NavLink } from "react-router";
import ShowInfo from "./ShowInfo";

const SingleUser = ({ user }) => {
  const { id, email, name, phone } = user;


  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

  const [showInfo , setShowInfo] = useState(false)
  const userStyle = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  };


  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <small>Phone : {phone}</small>
      <br />
      <Link to={`/users/${id}`}>See description</Link>

      <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide' : 'Show'}  info</button>
      {
        showInfo && <Suspense fallback={<p>Loading....</p>}>
            <ShowInfo userPromise={userPromise}></ShowInfo>
        </Suspense>
      }
    </div>
  );
};

export default SingleUser;
