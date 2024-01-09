const express = require('express');
const dbConnect = require('./src/config/dbConnect');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const { notFound, errorHandler } = require('./src/middleware/errorHandlers');
const authRouter = require('./src/routes/authRoute');
const productRouter = require('./src/routes/productRoute');
const blogRouter = require('./src/routes/blogRoute')
const prodCategoryRouter = require('./src/routes/prodCategoryRoute')
const blogCategoryRouter = require('./src/routes/blogCategoryRoute')
const port = process.env.PORT || 4000;
const app = express()


dbConnect()
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use('/', (req, res) => {
//     res.send('Hello Jarviz')
// })

// routes
app.use('/api/user', authRouter)
app.use('/api/product', productRouter)
app.use('/api/blog', blogRouter)
app.use('/api/category', prodCategoryRouter)
app.use('/api/blog-category', blogCategoryRouter)

//error Handlers
app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server on port no: ${port}`)
})
