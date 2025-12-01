import { useNavigate } from "react-router-dom";

export default function Footer({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <footer id="footer">
      <div className="inner">
        <h3>Stay Connected</h3>

        {!isLoggedIn && (
          <button 
            className="subscribe-btn" 
            onClick={() => navigate("/create-login")}
          >
            Subscribe
          </button>
        )}

        <ul className="social-icons">
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

