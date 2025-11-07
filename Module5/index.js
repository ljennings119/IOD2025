// const express = require('express')
// const testRoutes = require('./routes/myTestRoutes');
// const calculatorRoutes = require('./routes/calculatorRoutes') // link to calculatorRoutes.js
// const userRoutes = require('./routes/userRoutes')

// const app = express()
// const port = 3000

// app.use(express.json()) // must be first to post correctly

// app.use('/', express.static('public')) // '/' means root
// app.use('/mytest', testRoutes); // endpoints for routes

// app.use('/calculator', calculatorRoutes) 

// app.use('/users', userRoutes)  // for dynamic parameters




// // app.get('/test', (req, res) => {
// // res.send('Hello World!')
// // })

// app.listen(port, () => {
// console.log(`Example app listening at
// http://localhost:${port}`)
// })


// import the app
// const app = require('./app');
// const port = 3000
// // start the app to listen on the right port
// app.listen(port, () => {
// console.log(`Example app listening at
// http://localhost:${port}`)
// })

const app = require('./app'); // import the app
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// const swaggerUi = require('swagger-ui-express');
// swaggerDocument = require('./swagger.json');
// app.use(
// '/api-docs',
// swaggerUi.serve,
// swaggerUi.setup(swaggerDocument)
// );