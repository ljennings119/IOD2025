const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");


router.post("/", createPost);     // CREATE
router.get("/", getPosts);        // READ all
router.get("/:id", getPostById);  // READ one
router.put("/:id", updatePost);   // UPDATE
router.delete("/:id", deletePost);// DELETE

module.exports = router;
