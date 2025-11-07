const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => { // endpoint
    res.send('Hello World!')
})

router.get('/test2', (req, res) => {
    res.send('Second test - Hello World 2')
})

module.exports = router;

