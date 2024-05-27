import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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
  );
};

export default PostList;
