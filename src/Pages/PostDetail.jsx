import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPostById } from "../api/users";

function PostDetail() {
  const { id, postId } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPostById(postId)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading post...
      </h2>
    );
  }

  if (error) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "red",
        }}
      >
        {error}
      </h2>
    );
  }

  if (!post) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Post not found
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          color: "#111827",
          textTransform: "capitalize",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          color: "#555",
          lineHeight: "1.7",
          fontSize: "17px",
        }}
      >
        {post.body}
      </p>

      <NavLink
        to={`/users/${id}/posts`}
        style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "7px",
          fontWeight: "bold",
        }}
      >
        Back to Posts
      </NavLink>
    </div>
  );
}

export default PostDetail;