const express = require('express');
const dbConnect = require('./src/config/dbConnect');
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000;
const authRouter = require('./src/routes/authRoute');
const bodyParser = require('body-parser');

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use('/', (req, res) => {
//     res.send('Hello Jarviz')
// })
app.use('/api/user', authRouter)

app.listen(port, () => {
    console.log(`server on port no: ${port}`)
})
