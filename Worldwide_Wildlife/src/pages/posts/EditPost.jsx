import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const post = res.data;
        setTitle(post.title);
        setDescription(post.description);
        setImageUrl(post.imageUrl || "");
      } catch {
        setError("Failed to load post");
      }
    }

    fetchPost();
  }, [id, token]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        { title, description, imageUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/posts");
    } catch {
      setError("Failed to update post");
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Edit Post</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#53c1fc",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
