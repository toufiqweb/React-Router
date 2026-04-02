import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  };
  return (
    <div style={postStyle}>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}><button>See detail</button></Link>
    </div>
  );
};

export default Post;
