import { useEffect, useState } from "react";

import {
  NavLink,
  Outlet,
  useParams,
  useMatch
} from "react-router-dom";

import { getUserPosts } from "../api/users";

function UserPosts() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const postDetail = useMatch("/users/:id/posts/:postId");

  useEffect(() => {
    getUserPosts(id)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>Loading posts...</h2>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2 style={{ color: "red" }}>{error}</h2>
      </div>
    );
  }

  if (postDetail) {
    return <Outlet />;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#111827",
          marginBottom: "25px",
        }}
      >
        User Posts
      </h1>

      {posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No posts found.
        </p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                color: "#111827",
                marginTop: 0,
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.6",
              }}
            >
              {post.body}
            </p>

            <NavLink
              to={`${post.id}`}
              style={{
                display: "inline-block",
                padding: "10px 15px",
                background: "#2563eb",
                color: "white",
                textDecoration: "none",
                borderRadius: "7px",
                fontWeight: "bold",
              }}
            >
              View Post
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
}
export default UserPosts;