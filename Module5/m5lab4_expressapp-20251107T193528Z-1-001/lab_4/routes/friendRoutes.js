const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");

//GET
router.get("/", friendController.getAllFriends);

// Filter route
router.get("/filter", friendController.filterFriends);

// Info route
router.get("/info", friendController.getRequestInfo);

//get by ID
router.get("/:id", friendController.getFriendById);

// POST 
router.post("/", friendController.createFriend);

// PUT 
router.put("/:id", friendController.updateFriend);

// DELETE 
router.delete("/:id", friendController.deleteFriend);

module.exports = router;
