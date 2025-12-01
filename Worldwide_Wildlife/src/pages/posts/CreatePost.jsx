import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to create a post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (media) formData.append("media", media);

      const res = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess("Post created successfully!");
      setTitle("");
      setContent("");
      setMedia(null);

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to create post");
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "80px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Create New Post</h2>

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}

      {success && (
        <p style={{ color: "green", textAlign: "center" }}>{success}</p>
      )}

      <form onSubmit={handleSubmit} className="post-form">
        <label>Title:</label>
        <input
          type="text"
          className="modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content:</label>
        <textarea
          className="modal-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
<br />
        <label>Upload Photo/Video:</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files[0])}
        />

        <button className="modal-submit" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}
