const express = require('express');
const dbConnect = require('./config/dbConnect');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorHandlers');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute')
const prodCategoryRouter = require('./routes/prodCategoryRoute')
const blogCategoryRouter = require('./routes/blogCategoryRoute')
const brandRouter = require('./routes/brandRoute')
const couponRouter = require('./routes/couponRoute')
const colorRouter = require('./routes/colorRoute')
const contactRouter = require('./routes/contactRoute')
const uploadRouter = require('./routes/uploadRoute')
const port = process.env.PORT || 4000;
const app = express()


dbConnect()
app.use(morgan("dev"))
app.use(cors())
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
app.use('/api/brand', brandRouter)
app.use('/api/coupon', couponRouter)
app.use('/api/color', colorRouter)
app.use('/api/contact', contactRouter)
app.use('/api/upload', uploadRouter)

//error Handlers
app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server on port no: ${port}`)
})
