// Post.js
import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-title">{post.title}</div>

      <div className="post-author">
        <img
          className="avatar"
          src={post.author.avatar.url}
          alt={post.author.name}
        />
        <div className="Postauthorname">{post.author.name}</div>
      </div>
      <p className="post-date">{post.datePublished}</p>
    </div>
  );
};

export default Post;
