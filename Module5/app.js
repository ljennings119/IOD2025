const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/calculator/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 + num2 });
});

app.get("/calculator/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 - num2 });
});

app.get("/calculator/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 * num2 });
});

app.get("/calculator/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0)
    return res.status(400).json({ error: "Cannot divide by zero" });
  res.json({ result: num1 / num2 });
});

module.exports = app;
