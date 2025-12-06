const express = require("express");
const cors = require("cors");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/calculator", calculatorRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
