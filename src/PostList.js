// PostList.js
import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import Loader from "./Loader"; // Complex Loader

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://api-ap-south-1.hygraph.com/v2/clv2e59av2e6907wbbujvcaji/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                posts {
                  id
                  title
                  datePublished
                  slug
                  content {
                    html
                  }
                  author {
                    name
                    avatar {
                      url
                    }
                  }
                  coverPhoto {
                    url
                  }
                }
              }
            `,
          }),
        }
      );
      const data = await response.json();
      setPosts(data.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="abstract-background">
      <div className="post-list">
        {posts.map((post) => (
          <Link
            key={post.id}
            style={{ textDecoration: "none" }}
            to={`/posts/${post.id}`}
            state={{ post }}
          >
            <Post key={post.id} post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
