// commentRoutes
const express = require("express");
const router = express.Router();
const {
  createComment,
  getCommentsForPost
} = require("../controllers/commentController");

router.post("/", createComment);
router.get("/post/:postId", getCommentsForPost);

module.exports = router;
