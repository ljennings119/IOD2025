const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");

// Multer config — stores uploaded files in /uploads
const upload = multer({ dest: "uploads/" });

const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} = require("../controllers/postController");

// ---------- PUBLIC ROUTES ----------
router.get("/", getPosts);        // Get all posts
router.get("/:id", getPostById);  // Get a single post

// ---------- PROTECTED ROUTES ----------
router.post("/", protect, upload.single("media"), createPost);
router.put("/:id", protect, upload.single("media"), updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
