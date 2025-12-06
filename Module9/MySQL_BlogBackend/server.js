// server.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { syncModels } = require("./models");

dotenv.config();

const app = express();

// connect DB
connectDB().then(syncModels);

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// health check
app.get("/", (req, res) => {
  res.json({ message: "Blog MySQL API is running" });
});

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));

// error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
