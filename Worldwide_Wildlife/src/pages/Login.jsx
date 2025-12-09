import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", res.data);

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);
      
      // Update login state
      setIsLoggedIn(true);
      
      // Redirect to posts page
      navigate("/posts");
    } catch (err) {
      console.error("Login error:", err);
      
      // Show user-friendly error message
      if (err.response?.status === 401) {
        setError("Login or password incorrect");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "1.5rem" }}>
        Login to Worldwide Wildlife
      </h2>

      {error && (
        <div
          style={{
            background: "#f8d7da",
            color: "#721c24",
            padding: "12px",
            borderRadius: "6px",
            marginBottom: "1rem",
            border: "1px solid #f5c6cb",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              color: "#fff",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              color: "#fff",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            background: loading ? "#999" : "#53c1fc",
            color: "#fff",
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", color: "#000000ff", marginTop: "1.5rem" }}>
        Don't have an account?{" "}
        <Link
          to="/create-login"
          style={{
            color: "#53c1fc",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
}