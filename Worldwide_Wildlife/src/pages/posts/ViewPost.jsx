import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ViewPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPost(res.data);
      } catch {
        setError("Failed to load post");
      }
    }

    fetchPost();
  }, [id, token]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!post) return <p style={{ color: "#fff" }}>Loading...</p>;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "1rem",
        background: "#222",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={() => navigate("/posts")}
        style={{
          marginBottom: "1rem",
          padding: "0.4rem 0.8rem",
          borderRadius: "4px",
          border: "none",
          background: "#444",
          color: "#fff",
          cursor: "pointer",
          fontSize: "0.85rem",
        }}
      >
        ← Back to Feed
      </button>

      <h2>{post.title}</h2>

      <p style={{ marginBottom: "1rem" }}>{post.description}</p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}
    </div>
  );
}
