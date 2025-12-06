import { Link } from "react-router-dom";

export default function ModalLogin({ show, onClose, onLogin }) {
  if (!show) return null;

  return (
    <div
      className="modal-login-overlay"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
      }}
    >
      <div
        className="modal-login-box"
        style={{
          background: "#ffffff",
          margin: "10% auto",
          padding: "2rem",
          width: "90%",
          maxWidth: "400px",
          borderRadius: "10px",
          textAlign: "center",
          color: "#000",
          position: "relative",
        }}
      >
        <button
  className="modal-close"
  onClick={onClose}
  style={{
    all: "unset",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",

    position: "absolute",
    top: "10px",
    right: "15px",

    width: "32px",
    height: "32px",
    background: "#ffffff",

    border: "2px solid #444",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",

    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    padding: 0,
    margin: 0,
    lineHeight: 0,
  }}
>
  ✕
</button>


        <h2 style={{ color: "#000" }}>Login</h2>

        <input
          type="text"
          placeholder="Enter Email"
          style={{
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            color: "#000",
            background: "#fff",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            color: "#000",
            background: "#fff",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={onLogin}
          style={{
            backgroundColor: "#53c1fc",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            width: "100%",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "1rem", color: "#000" }}>
          Don’t have an account?{" "}
          <Link
            to="/create-login"
            onClick={onClose}
            style={{ color: "#1a73e8", fontWeight: "bold" }}
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
}
