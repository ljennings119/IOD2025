const express = require("express");
const router = express.Router();
const {
  getCommentsForPost,
  createComment,
  updateComment,
  deleteComment
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

// public: view comments for a post
router.get("/post/:postId", getCommentsForPost);

// protected: CRUD
router.post("/post/:postId", protect, createComment);
router.put("/:id", protect, updateComment);
router.delete("/:id", protect, deleteComment);

module.exports = router;
