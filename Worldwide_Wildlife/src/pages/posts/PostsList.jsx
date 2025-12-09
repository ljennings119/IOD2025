// ==================== PostsList.jsx - Instagram/Facebook Style with Interactions ====================
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState({});
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

  async function handleLike(postId) {
    try {
      setPosts(prev => prev.map(post => {
        if (post._id === postId) {
          const isLiked = post.isLikedByUser;
          return {
            ...post,
            likes: isLiked ? (post.likes || 1) - 1 : (post.likes || 0) + 1,
            isLikedByUser: !isLiked
          };
        }
        return post;
      }));
    } catch (err) {
      console.error("Like error:", err);
    }
  }

  async function handleCommentSubmit(postId) {
    const text = commentText[postId];
    if (!text || !text.trim()) return;

    try {
      const newComment = {
        _id: Date.now(),
        text: text.trim(),
        user: { email: "You" },
        createdAt: new Date().toISOString()
      };

      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment]
      }));

      setCommentText(prev => ({ ...prev, [postId]: "" }));

      setPosts(prev => prev.map(post => 
        post._id === postId 
          ? { ...post, commentCount: (post.commentCount || 0) + 1 }
          : post
      ));
    } catch (err) {
      console.error("Comment error:", err);
    }
  }

  function toggleComments(postId) {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }

  function handleShare(post) {
    const shareUrl = `${window.location.origin}/posts/${post._id}`;
    
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  }

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

  if (loading) {
    return (
      <div style={{ 
        maxWidth: "600px", 
        margin: "80px auto", 
        textAlign: "center", 
        color: "#fff" 
      }}>
        Loading posts...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        maxWidth: "600px", 
        margin: "80px auto", 
        textAlign: "center", 
        color: "red" 
      }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: "100vh",
      background: "#f5f5f5"
    }}>
      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto",
        padding: "80px 1rem 2rem"
      }}>
      {/* Header with Create Button */}
      <div style={{ 
        marginBottom: "2rem",
        padding: "1rem 0"
      }}>
        <h2 style={{ 
          color: "#000", 
          margin: "0 0 1rem 0",
          fontSize: "1.8rem",
          textAlign: "center"
        }}>
          Wildlife Feed
        </h2>
        <button
          onClick={() => navigate("/posts/create")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#53c1fc",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.95rem",
            transition: "background 0.2s",
            width: "100%"
          }}
          onMouseOver={(e) => e.target.style.background = "#3da5dc"}
          onMouseOut={(e) => e.target.style.background = "#53c1fc"}
        >
          + New Post
        </button>
      </div>

      {/* No Posts Message */}
      {posts.length === 0 && (
        <div style={{
          background: "#1a1a1a",
          padding: "3rem 2rem",
          borderRadius: "12px",
          textAlign: "center",
          color: "#999"
        }}>
          <p style={{ fontSize: "1.1rem", margin: 0 }}>
            No posts yet. Be the first to share!
          </p>
        </div>
      )}

      {/* Posts Feed */}
      {posts.map((post) => (
        <article
          key={post._id}
          style={{
            background: "#1a1a1a",
            borderRadius: "12px",
            marginBottom: "1.5rem",
            overflow: "hidden",
            border: "1px solid #2a2a2a",
          }}
        >
          {/* Post Header */}
          <div style={{
            padding: "1rem 1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #2a2a2a"
          }}>
            <div>
              <h3 style={{ 
                color: "#fff", 
                margin: 0,
                fontSize: "1.1rem",
                fontWeight: "600"
              }}>
                {post.title}
              </h3>
              {post.user?.email && (
                <p style={{
                  color: "#888",
                  fontSize: "0.85rem",
                  margin: "0.25rem 0 0 0"
                }}>
                  @{post.user.email.split('@')[0]}
                </p>
              )}
            </div>
            
            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => navigate(`/posts/${post._id}/edit`)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "transparent",
                  color: "#53c1fc",
                  border: "1px solid #53c1fc",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#53c1fc";
                  e.target.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#53c1fc";
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(post._id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "transparent",
                  color: "#ff4444",
                  border: "1px solid #ff4444",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#ff4444";
                  e.target.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#ff4444";
                }}
              >
                Delete
              </button>
            </div>
          </div>

          {/* Post Description */}
          {post.description && (
            <div style={{ 
              padding: "1.25rem", 
              color: "#e0e0e0",
              lineHeight: "1.6",
              fontSize: "0.95rem"
            }}>
              {post.description}
            </div>
          )}

          {/* Post Media - Full Width */}
          {post.mediaUrl && (
            <div style={{ 
              width: "100%",
              background: "#000"
            }}>
              {post.mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  controls
                  style={{
                    width: "100%",
                    display: "block",
                    maxHeight: "600px",
                    objectFit: "contain"
                  }}
                >
                  <source src={`http://localhost:5000${post.mediaUrl}`} />
                  Your browser does not support video playback.
                </video>
              ) : (
                <img
                  src={`http://localhost:5000${post.mediaUrl}`}
                  alt={post.title}
                  onError={(e) => {
                    console.error("Image failed to load:", post.mediaUrl);
                    e.target.style.display = 'none';
                  }}
                  style={{
                    width: "100%",
                    display: "block",
                    maxHeight: "600px",
                    objectFit: "contain"
                  }}
                />
              )}
            </div>
          )}
          
          {/* Also check for imageUrl field (backup) */}
          {!post.mediaUrl && post.imageUrl && (
            <div style={{ 
              width: "100%",
              background: "#000"
            }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                onError={(e) => {
                  console.error("Image failed to load:", post.imageUrl);
                  e.target.style.display = 'none';
                }}
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "600px",
                  objectFit: "contain"
                }}
              />
            </div>
          )}

          {/* Post Footer - Engagement Area */}
          <div style={{
            padding: "1rem 1.25rem",
            borderTop: "1px solid #2a2a2a",
          }}>
            <div style={{
              display: "flex",
              gap: "1rem",
              color: "#888",
              fontSize: "0.9rem"
            }}>
              <span 
                onClick={() => handleLike(post._id)}
                style={{ 
                  cursor: "pointer",
                  color: post.isLikedByUser ? "#ff4444" : "#888"
                }}
              >
                {post.isLikedByUser ? "❤️" : "🤍"} Like
                {post.likes > 0 && ` (${post.likes})`}
              </span>
              <span 
                onClick={() => toggleComments(post._id)}
                style={{ cursor: "pointer" }}
              >
                💬 Comment
                {post.commentCount > 0 && ` (${post.commentCount})`}
              </span>
            </div>

            {/* Comments Section */}
            {showComments[post._id] && (
              <div style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid #2a2a2a"
              }}>
                {comments[post._id]?.map((comment) => (
                  <div key={comment._id} style={{
                    marginBottom: "0.75rem",
                    padding: "0.75rem",
                    background: "#222",
                    borderRadius: "8px"
                  }}>
                    <div style={{ color: "#53c1fc", fontSize: "0.85rem", fontWeight: "600" }}>
                      {comment.user?.email || "You"}
                    </div>
                    <div style={{ color: "#e0e0e0", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                      {comment.text}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "0.75rem" }}>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText[post._id] || ""}
                    onChange={(e) => {
                      e.stopPropagation();
                      setCommentText(prev => ({
                        ...prev,
                        [post._id]: e.target.value
                      }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && commentText[post._id]?.trim()) {
                        e.preventDefault();
                        handleCommentSubmit(post._id);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    autoFocus
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "20px",
                      border: "1px solid #444",
                      background: "#222",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "0.5rem"
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCommentSubmit(post._id);
                    }}
                    disabled={!commentText[post._id]?.trim()}
                    style={{
                      padding: "0.6rem 1.5rem",
                      borderRadius: "20px",
                      border: "none",
                      background: commentText[post._id]?.trim() ? "#53c1fc" : "#444",
                      color: "#fff",
                      cursor: commentText[post._id]?.trim() ? "pointer" : "not-allowed",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      opacity: commentText[post._id]?.trim() ? 1 : 0.5,
                      display: "block"
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            )}
          </div>
        </article>
      ))}
      </div>
    </div>
  );
}