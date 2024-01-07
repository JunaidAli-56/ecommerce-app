const express = require('express');
const dbConnect = require('./src/config/dbConnect');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./src/middleware/errorHandlers');
const authRouter = require('./src/routes/authRoute');
const port = process.env.PORT || 4000;
const app = express()


dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use('/', (req, res) => {
//     res.send('Hello Jarviz')
// })

// routes
app.use('/api/user', authRouter)

//error Handlers
app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server on port no: ${port}`)
})
