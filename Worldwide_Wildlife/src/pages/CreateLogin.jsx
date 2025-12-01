import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password }
      );

      setSuccess("Account created! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Signup error:", err);

      if (err.response) {
        const msg =
          err.response.data?.message ||
          (err.response.status === 409
            ? "Email already exists"
            : "Signup failed with status " + err.response.status);

        setError(msg);
      } else if (err.request) {
        setError("Cannot reach server. Is the backend running on :5000?");
      } else {
        setError("Unexpected error: " + err.message);
      }
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={() => navigate("/")}>
          ✕
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Create Account
        </h2>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

        {success && (
          <p style={{ color: "green", textAlign: "center" }}>{success}</p>
        )}

        <form onSubmit={handleSignup}>
          <input
            type="email"
            className="modal-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="modal-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            className="modal-input"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button className="modal-submit" type="submit">
            Create Account
          </button>
        </form>

        <p className="modal-footer-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
