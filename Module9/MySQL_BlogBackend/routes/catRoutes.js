const express = require("express");
const router = express.Router();

const {
  getCatFact,
  getCatBreeds,
  getBreedDetail
} = require("../controllers/catController");

// GET random cat fact
router.get("/fact", getCatFact);

// GET cat breeds 
router.get("/breeds", getCatBreeds);

// GET breed detail 
router.get("/breed/:name", getBreedDetail);

module.exports = router;
