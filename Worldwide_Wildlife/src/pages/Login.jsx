import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate("/posts");
    } catch {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        {/*  Close Button */}
        <button
          className="modal-close"
          onClick={() => navigate("/")}
        >
          ✕
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="modal-submit" type="submit">
            Login
          </button>
        </form>

        <p className="modal-footer-link">
          Don’t have an account?{" "}
          <Link to="/create-login">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}
