import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });

      console.log("Registration successful:", res.data);

      // Save token after successful registration
      localStorage.setItem("token", res.data.token);
      
      // Show success message
      alert("Account created successfully! Redirecting to login...");
      
      // Redirect to login
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      
      if (err.response?.status === 400 && err.response?.data?.message?.includes("already exists")) {
        setError("An account with this email already exists");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "1.5rem" }}>
        Create Your Account
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

        <div style={{ marginBottom: "1rem" }}>
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
            placeholder="At least 6 characters"
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
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Re-enter your password"
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
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p style={{ textAlign: "center", color: "#fff", marginTop: "1.5rem" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#53c1fc",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login here
        </Link>
      </p>
    </div>
  );
}