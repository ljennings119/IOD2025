import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* 👇 The homepage switches depending on login state */}
        <Route
          path="/"
          element={isLoggedIn ? <PostsList /> : <Home />}
        />

        {/* Posts */}
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

        {/* Public animal pages */}
        <Route path="/axolotls" element={<Axolotls />} />
        <Route path="/platypus" element={<Platypus />} />
        <Route path="/blackpanther" element={<BlackPanther />} />
        <Route path="/secretarybird" element={<SecretaryBird />} />
        <Route path="/cool-facts" element={<CoolFacts />} />
      </Routes>

      <Footer />
    </Router>
  );
}
