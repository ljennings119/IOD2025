
const express = require("express");
const cors = require("cors");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/calculator", calculatorRoutes);

module.exports = app;
