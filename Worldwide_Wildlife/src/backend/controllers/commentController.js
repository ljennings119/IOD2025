const Comment = require("../models/Comment");

// GET /api/comments/post/:postId
async function getCommentsForPost(req, res) {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("user", "email")
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error("Get comments error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// POST /api/comments/post/:postId  (protected)
async function createComment(req, res) {
  try {
    const { text } = req.body;

    if (!text) return res.status(400).json({ message: "Text is required" });

    const comment = await Comment.create({
      text,
      post: req.params.postId,
      user: req.user._id
    });

    res.status(201).json(comment);
  } catch (err) {
    console.error("Create comment error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// PUT /api/comments/:id  (owner only)
async function updateComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only edit your own comments" });
    }

    comment.text = req.body.text ?? comment.text;

    const updated = await comment.save();
    res.json(updated);
  } catch (err) {
    console.error("Update comment error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /api/comments/:id  (owner only)
async function deleteComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only delete your own comments" });
    }

    await comment.deleteOne();
    res.json({ message: "Comment deleted" });
  } catch (err) {
    console.error("Delete comment error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getCommentsForPost,
  createComment,
  updateComment,
  deleteComment
};
