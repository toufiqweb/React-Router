import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  
  const navigate = useNavigate()

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
      <button onClick={()=> navigate(`/posts/${post.id}`)}> See Detail for : {post.id} </button>
    </div>
  );
};

export default Post;
