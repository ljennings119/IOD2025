
const { Post, User, Comment, Like } = require("../models");

// CREATE post
exports.createPost = async (req, res, next) => {
  try {
    const { userId, title, description, imageUrl } = req.body;

    if (!userId || !title || !description) {
      return res
        .status(400)
        .json({ message: "userId, title and description are required" });
    }

    const post = await Post.create({ userId, title, description, imageUrl });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// READ all posts (with author + comments + like count)
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: "author", attributes: ["id", "name", "email"] },
        { model: Comment, as: "comments" },
        { model: Like, as: "likes" },
      ],
      order: [["createdAt", "DESC"]],
    });

    const withLikeCount = posts.map((p) => ({
      ...p.toJSON(),
      likeCount: p.likes?.length || 0,
    }));

    res.json(withLikeCount);
  } catch (err) {
    next(err);
  }
};

// READ single post by id
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, as: "author", attributes: ["id", "name", "email"] },
        { model: Comment, as: "comments" },
        { model: Like, as: "likes" },
      ],
    });

    if (!post) return res.status(404).json({ message: "Post not found" });

    const result = {
      ...post.toJSON(),
      likeCount: post.likes?.length || 0,
    };

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// UPDATE post 
exports.updatePost = async (req, res, next) => {
  try {
    const { title, description, imageUrl } = req.body;
    const post = await Post.findByPk(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.title = title ?? post.title;
    post.description = description ?? post.description;
    post.imageUrl = imageUrl ?? post.imageUrl;

    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// DELETE post
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await post.destroy();
    res.json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
};
