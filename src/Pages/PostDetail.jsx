
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPostById } from "../api/users";
function PostDetail() {
  const { id, postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setPost(null);

    getPostById(postId)
      .then((data) => {
       
        if (!data || !data.id) {
          setError("This post does not exist.");
          setLoading(false);
          return;
        }

        if (data.userId !== Number(id)) {
          setError("This post does not belong to this user.");
          setLoading(false);
          return;
        }

        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setError("This post does not exist.");
        setLoading(false);
      });
  }, [postId, id]);

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#ffffff",
        }}
      >
        Loading post...
      </h2>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <h2
          style={{
            color: "#ef4444",
            marginBottom: "20px",
          }}
        >
          {error}
        </h2>

        <NavLink
          to={`/users/${id}/posts`}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Back to Posts
        </NavLink>
      </div>
    );
  }


  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "20px auto 40px",
        padding: "35px 25px",
        backgroundColor: "#f8fafc",
        border: "2px solid #2563eb",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#0f172a",
          textTransform: "capitalize",
          fontSize: "26px",
          lineHeight: "1.4",
          margin: "0 0 15px 0",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          color: "#475569",
          lineHeight: "1.6",
          fontSize: "16px",
          margin: "0 0 25px 0",
        }}
      >
        {post.body}
      </p>

      <NavLink
        to=".."
        relative="path"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        Back to Posts
      </NavLink>
    </div>
  );
}
export default PostDetail;

