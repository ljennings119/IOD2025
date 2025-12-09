const { Like } = require("../models");

exports.likePost = async (req, res, next) => {
  try {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
      return res.status(400).json({ message: "userId and postId required" });
    }


    const existing = await Like.findOne({ where: { userId, postId } });
    if (existing) {
      return res.status(400).json({ message: "Already liked" });
    }

    const like = await Like.create({ userId, postId });
    res.status(201).json(like);
  } catch (err) {
    next(err);
  }
};

exports.unlikePost = async (req, res, next) => {
  try {
    const { userId, postId } = req.body;

    const existing = await Like.findOne({ where: { userId, postId } });
    if (!existing) {
      return res.status(404).json({ message: "Like not found" });
    }

    await existing.destroy();
    res.json({ message: "Unliked" });
  } catch (err) {
    next(err);
  }
};
