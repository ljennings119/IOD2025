import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [currentMediaUrl, setCurrentMediaUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
        setCurrentMediaUrl(post.mediaUrl || "");
      } catch {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id, token]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      
      // Only append media if a new file was selected
      if (media) {
        formData.append("media", media);
      }

      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update post");
    }
  }

  if (loading) {
    return <p style={{ color: "#fff", textAlign: "center", marginTop: "3rem" }}>Loading post...</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Edit Post</h2>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", color: "#fff", marginBottom: "0.5rem" }}>
          Title:
        </label>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />

        <label style={{ display: "block", color: "#fff", marginBottom: "0.5rem" }}>
          Description:
        </label>
        <textarea
          placeholder="What's happening in the wildlife world?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        />

        {/* Show current media if it exists */}
        {currentMediaUrl && (
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ color: "#fff", marginBottom: "0.5rem" }}>Current media:</p>
            {currentMediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                controls
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  display: "block",
                }}
              >
                <source src={`http://localhost:5000${currentMediaUrl}`} />
              </video>
            ) : (
              <img
                src={`http://localhost:5000${currentMediaUrl}`}
                alt="Current media"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            )}
          </div>
        )}

        <label style={{ display: "block", color: "#fff", marginBottom: "0.5rem" }}>
          Upload New Photo/Video (optional):
        </label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files[0])}
          style={{
            marginBottom: "1rem",
            color: "#fff",
          }}
        />
        {media && (
          <p style={{ color: "#53c1fc", fontSize: "0.9rem", marginBottom: "1rem" }}>
            New file selected: {media.name}
          </p>
        )}

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              background: "#53c1fc",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Update Post
          </button>

          <button
            type="button"
            onClick={() => navigate("/posts")}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              background: "#666",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}