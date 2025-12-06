const Comment = require("../models/Comment");

// POST /api/comments
async function createComment(req, res) {
  try {
    const { text, userId, postId } = req.body;

    if (!text || !userId || !postId) {
      return res
        .status(400)
        .json({ message: "text, userId and postId are required" });
    }

    const comment = await Comment.create({
      text,
      author: userId,
      post: postId
    });

    res.status(201).json(comment);
  } catch (err) {
    console.error("Create comment error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /api/comments/post/:postId
async function getCommentsForPost(req, res) {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("author", "name")
      .sort({ createdAt: 1 });

    res.json(comments);
  } catch (err) {
    console.error("Get comments error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { createComment, getCommentsForPost };
