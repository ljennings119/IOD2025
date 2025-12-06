// postRoutes
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { protect } = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");


// CREATE POST (multipart/form-data)
router.post("/", protect, upload.single("image"), createPost);

// GET ALL POSTS
router.get("/", getPosts);

// GET 1 POST
router.get("/:id", getPostById);

// UPDATE
router.put("/:id", protect, upload.single("image"), updatePost);

// DELETE
router.delete("/:id", protect, deletePost);

module.exports = router;
