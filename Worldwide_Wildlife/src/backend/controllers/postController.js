const Post = require("../models/Post");

// CREATE POST
async function createPost(req, res) {
  try {
    const { title, content, imageUrl } = req.body;

    const post = await Post.create({
      title,
      content,
      imageUrl: imageUrl || null,
      user: req.user._id
    });

    res.status(201).json(post);
  } catch (err) {
    console.error("Create Post Error:", err);
    res.status(500).json({ message: "Server error while creating post" });
  }
}

// GET ALL POSTS
async function getPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("Get Posts Error:", err);
    res.status(500).json({ message: "Server error fetching posts" });
  }
}

// 🔥 THIS WAS MISSING — GET SINGLE POST BY ID
async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error("Get Post Error:", err);
    res.status(500).json({ message: "Server error fetching post" });
  }
}

// UPDATE POST
async function updatePost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(post);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Server error updating post" });
  }
}

// DELETE POST
async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted", post });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Server error deleting post" });
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,   // <-- REQUIRED
  updatePost,
  deletePost
};
