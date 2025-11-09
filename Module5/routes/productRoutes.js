const express = require("express");
const router = express.Router();
const fetch = require("node-fetch"); 

// Fetch products from Fake Store API
router.get("/", async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Fetch single product by ID
router.get("/:id", async (req, res) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`);
    if (!response.ok) return res.status(404).json({ error: "Product not found" });
    const product = await response.json();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

module.exports = router;
