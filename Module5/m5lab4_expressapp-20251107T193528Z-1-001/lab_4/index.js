const express = require("express"); // import express
const friendRoutes = require("./routes/friendRoutes");
const movieRoutes = require("./routes/movieRoutes"); 

const app = express(); 
const port = 3000;

// middleware
app.use(express.json());
app.use("/", express.static("public"));

// use routes
app.use("/friends", friendRoutes);
app.use("/movies", movieRoutes); 

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

