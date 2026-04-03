import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDescription = () => {
  const user = useLoaderData();
  const {
    email,
    name,
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = user;

  const {userId} = useParams()
  // const params = useParams()
  // console.log(params);
  console.log(userId);
  
  

  const userStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <small>Phone : {phone}</small>
      <h5>{companyName}</h5>
      <p>{website}</p>
      <p>Email : {catchPhrase}</p>
      <small>Phone : {bs}</small>
    </div>
  );
};

export default UserDescription;
