const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// GET 
router.get("/", movieController.getAllMovies);

// GET movie by ID
router.get("/:id", movieController.getMovieById);

// POST 
router.post("/", movieController.createMovie);

// PUT 
router.put("/:id", movieController.updateMovie);

// DELETE 
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
