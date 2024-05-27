import React from "react";
import Header from "./Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const PostDetails = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="centered-container">
        <div className="post-details">
          <div className="cover-container">
            <img
              className="cover-image"
              src={post.coverPhoto.url}
              alt="Cover"
            />
          </div>
          <div className="allInfo">
            <div className="author-info">
              <img
                className="avatar"
                src={post.author.avatar.url}
                alt="Author Avatar"
              />
              <p className="aname">{post.author.name}</p>
            </div>
            <p className="datep">{post.datePublished}</p>
          </div>
          <h2 className="ptitle">{post.title}</h2>

          <div
            className="content-container"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
