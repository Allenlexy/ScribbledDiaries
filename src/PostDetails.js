// PostDetails.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./PostDetails.css";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="centered-container">
        <div className="post-details">
          <button className="back-button" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
            Back to Home
          </button>

          <div className="allInfo">
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
