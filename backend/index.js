const express = require('express');
const dbConnect = require('./src/config/dbConnect');
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000;


dbConnect()

app.use('/',(req, res)=> {
    res.send('Hello Jarviz')
})

app.listen(port, () => {
    console.log(`server on port no: ${port}`)
})
