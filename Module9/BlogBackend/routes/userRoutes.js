const express = require("express");
const router = express.Router();

const { loginUser, createUser, getUsers } = require("../controllers/userController");

// Register new user
router.post("/register", createUser);

// Login
router.post("/login", loginUser);

// Get all users
router.get("/", getUsers);

module.exports = router;
