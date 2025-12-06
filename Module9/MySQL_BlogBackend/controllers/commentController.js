const { Comment, User } = require("../models");

exports.createComment = async (req, res, next) => {
  try {
    const { userId, postId, text } = req.body;

    if (!userId || !postId || !text) {
      return res
        .status(400)
        .json({ message: "userId, postId and text are required" });
    }

    const comment = await Comment.create({ userId, postId, text });
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

exports.getCommentsForPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.findAll({
      where: { postId },
      include: [{ model: User, as: "author", attributes: ["id", "name"] }],
      order: [["createdAt", "ASC"]],
    });
    res.json(comments);
  } catch (err) {
    next(err);
  }
};
