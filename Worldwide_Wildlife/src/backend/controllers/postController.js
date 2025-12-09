const Post = require("../models/Post");

// CREATE POST
async function createPost(req, res) {
  try {
    const { title, description } = req.body;
    
    // If a file was uploaded via multer, use its path
    let mediaUrl = null;
    if (req.file) {
      // You'll need to serve this as a static file or upload to cloud storage
      mediaUrl = `/uploads/${req.file.filename}`;
    }

    const post = await Post.create({
      title,
      description,
      mediaUrl,
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
    const posts = await Post.find()
      .populate("user", "email")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("Get Posts Error:", err);
    res.status(500).json({ message: "Server error fetching posts" });
  }
}

// GET SINGLE POST BY ID
async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id)
      .populate("user", "email");

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
    const { title, description } = req.body;
    
    const updateData = { title, description };
    
    // If new file uploaded, update mediaUrl
    if (req.file) {
      updateData.mediaUrl = `/uploads/${req.file.filename}`;
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Server error updating post" });
  }
}

// DELETE POST
async function deletePost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Optional: Check if user owns the post
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only delete your own posts" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted", post });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Server error deleting post" });
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
};