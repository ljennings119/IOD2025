const Post = require("../models/Post");
const Comment = require("../models/Comment");

// CREATE POST: POST /api/posts
async function createPost(req, res) {
  try {
    const { title, description, imageUrl, authorId } = req.body;

    if (!title || !description || !authorId) {
      return res.status(400).json({
        message: "title, description, and authorId are required"
      });
    }

    const post = await Post.create({
      title,
      description,
      imageUrl: imageUrl || "",
      author: authorId
    });

    res.status(201).json(post);
  } catch (err) {
    console.error("Create post error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// READ ALL POSTS: GET /api/posts
async function getPosts(req, res) {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .populate("likes", "name")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    console.error("Get posts error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// READ SINGLE POST: GET /api/posts/:id
async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "name email")
      .populate("likes", "name");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comments = await Comment.find({ post: post._id })
      .populate("author", "name")
      .sort({ createdAt: 1 });

    res.json({ post, comments });
  } catch (err) {
    console.error("Get post error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE POST: PUT /api/posts/:id
async function updatePost(req, res) {
  try {
    const { title, description, imageUrl } = req.body;

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error("Update post error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE POST: DELETE /api/posts/:id
async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Optionally delete related comments
    await Comment.deleteMany({ post: post._id });

    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error("Delete post error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// LIKE / UNLIKE POST: POST /api/posts/:id/like
async function toggleLike(req, res) {
  try {
    const { userId } = req.body; // ID of the user who likes

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const alreadyLiked = post.likes.some(
      (u) => u.toString() === userId.toString()
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (u) => u.toString() !== userId.toString()
      );
    } else {
      post.likes.push(userId);
    }

    await post.save();

    res.json({
      message: alreadyLiked ? "Like removed" : "Post liked",
      likesCount: post.likes.length
    });
  } catch (err) {
    console.error("Toggle like error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  toggleLike
};
