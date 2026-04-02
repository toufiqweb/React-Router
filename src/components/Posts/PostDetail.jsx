import React from "react";
import { useLoaderData } from "react-router";

const PostDetail = () => {
  const post = useLoaderData();
  const { title, body } = post;

  const postDetailStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  };
  return (
    <div style={postDetailStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;
