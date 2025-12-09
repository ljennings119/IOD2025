import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./index.css";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/createLogin.css";
import "./assets/css/modal.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home"; 
import Login from "./pages/Login";
import CreateLogin from "./pages/CreateLogin";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";
import ViewPost from "./pages/posts/ViewPost";
import PostsList from "./pages/posts/PostsList";
import Axolotls from "./pages/Axolotls";
import Platypus from "./pages/Platypus";
import BlackPanther from "./pages/BlackPanther";
import SecretaryBird from "./pages/SecretaryBird";
import CoolFacts from "./pages/CoolFacts";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token validity on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token is valid by making a test request
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            setIsLoggedIn(true);
          } else {
            // Token is invalid, clear it
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          }
        })
        .catch(() => {
          // Token validation failed
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/posts"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PostsList />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/posts/create" 
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/posts/:id" 
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ViewPost />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/posts/:id/edit" 
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <EditPost />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/create-login" element={<CreateLogin />} />

        {/* Public pages */}
        <Route path="/axolotls" element={<Axolotls />} />
        <Route path="/platypus" element={<Platypus />} />
        <Route path="/blackpanther" element={<BlackPanther />} />
        <Route path="/secretarybird" element={<SecretaryBird />} />
        
        {/* Protected Cool Facts */}
        <Route 
          path="/cool-facts" 
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CoolFacts />
            </ProtectedRoute>
          } 
        />
      </Routes>

      <Footer isLoggedIn={isLoggedIn} />
    </Router>
  );
}