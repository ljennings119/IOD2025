import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="componentBox" style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/bitcoin">Bitcoin Rates</Link>
    </nav>
  );
}
