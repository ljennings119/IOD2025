import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    
    // Update login state
    setIsLoggedIn(false);
    
    // Close menu
    closeMenu();
    
    // Redirect to home page
    navigate("/");
  };

  const handleLoginClick = () => {
    closeMenu();
    navigate("/login");
  };

  return (
    <>
      {/* LOGO */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          Worldwide <span>Wildlife</span>
        </Link>
      </div>

      {/* FLOATING HAMBURGER */}
      <button className="menu-float" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
        <span>Menu</span>
      </button>

      {/* SLIDE-OUT NAV */}
      <nav id="menu" className={menuOpen ? "active" : ""}>
        <ul className="links">
          {!isLoggedIn && (
            <>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li><Link to="/posts" onClick={closeMenu}>Wildlife Feed</Link></li>
            </>
          )}

          <li><Link to="/axolotls" onClick={closeMenu}>Axolotls</Link></li>
          <li><Link to="/platypus" onClick={closeMenu}>Platypus</Link></li>
          <li><Link to="/blackpanther" onClick={closeMenu}>Black Panther</Link></li>
          <li><Link to="/secretarybird" onClick={closeMenu}>Secretary Bird</Link></li>
          <li><Link to="/cool-facts" onClick={closeMenu}>Cool Facts</Link></li>

          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </button>
            ) : (
              <button onClick={handleLoginClick} style={{ cursor: "pointer" }}>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}