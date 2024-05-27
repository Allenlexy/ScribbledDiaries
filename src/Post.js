import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="cover-container">
          <img className="coverImg" src={post.coverPhoto.url} alt="Cover" />
        </div>
        <div className="txt">
          <h2 className="title">{post.title}</h2>
          <div className="author">
            <img className="avatar" src={post.author.avatar.url} alt="Avatar" />
            <strong>
              <p>{post.author.name}</p>
            </strong>
            <p className="date">{post.datePublished}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
