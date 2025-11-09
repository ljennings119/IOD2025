// const express = require('express')
// const router = express.Router()

// router.get('/add', (req, res) => { //new route for adding two numbers
//     res.send('Add')
// })

// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
// })

// router.get('/add', (req, res) => {    //how to get data - functional add route performing addition on request parameters
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
// })

// router.get('/subtract', (req, res) => {    //how to get data - functional add route performing addition on request parameters
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
// })

const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/add", calculatorController.add);
router.get("/subtract", calculatorController.subtract);
router.get("/multiply", calculatorController.multiply);
router.get("/divide", calculatorController.divide);

module.exports = router;
