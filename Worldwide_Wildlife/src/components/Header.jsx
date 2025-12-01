import { Link } from "react-router-dom";
import { useState } from "react";
import ModalLogin from "./ModalLogin";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    closeMenu();
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
              <li><Link to="/posts" onClick={closeMenu}>Home</Link></li>
               </>
          )}

          <li><Link to="/axolotls" onClick={closeMenu}>Axolotls</Link></li>
          <li><Link to="/platypus" onClick={closeMenu}>Platypus</Link></li>
          <li><Link to="/blackpanther" onClick={closeMenu}>Black Panther</Link></li>
          <li><Link to="/secretarybird" onClick={closeMenu}>Secretary Bird</Link></li>

          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={() => setShowLogin(true)}>Login</button>
            )}
          </li>
        </ul>
      </nav>

      {/* LOGIN MODAL */}
      <ModalLogin
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    </>
  );
}
