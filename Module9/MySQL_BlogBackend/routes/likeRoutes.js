const express = require("express");
const router = express.Router();
const { likePost, unlikePost } = require("../controllers/likeController");

router.post("/", likePost);
router.delete("/", unlikePost);

module.exports = router;
