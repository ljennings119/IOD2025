import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get("http://localhost:5000/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [token]);

  
  async function handleDelete(postId) {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setPosts((prev) => prev.filter((p) => p._id !== postId));
    } catch (err) {
      alert("Failed to delete post");
    }
  }

  if (loading) return <p style={{ color: "#fff" }}>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Wildlife Feed</h2>

      <button
        onClick={() => navigate("/posts/create")}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          background: "#53c1fc",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        + Create New Post
      </button>

      {posts.length === 0 && (
        <p style={{ color: "#fff" }}>No posts yet. Be the first to share!</p>
      )}

      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            background: "#222",
            color: "#fff",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.description}</p>

          {post.imageUrl && (
            <div style={{ margin: "0.5rem 0" }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}

          <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
            <Link
              to={`/posts/${post._id}`}
              style={{
                padding: "0.3rem 0.7rem",
                borderRadius: "4px",
                background: "#53c1fc",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              View
            </Link>

            <button
              onClick={() => navigate(`/posts/edit/${post._id}`)}
              style={{
                padding: "0.3rem 0.7rem",
                borderRadius: "4px",
                background: "#28a745",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(post._id)}
              style={{
                padding: "0.3rem 0.7rem",
                borderRadius: "4px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
