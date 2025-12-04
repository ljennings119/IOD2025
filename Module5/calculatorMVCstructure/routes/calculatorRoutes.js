const express = require("express");
const router = express.Router();
const controller = require("../controllers/calculatorController");

router.get("/add", controller.add);
router.get("/subtract", controller.subtract);
router.get("/multiply", controller.multiply);
router.get("/divide", controller.divide);

module.exports = router;
