const asyncHander = require('express-async-handler');
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const validateMongoId = require('../utils/validateMongoDBId');


const createBlog = asyncHander(async (req, res) => {

})

module.exports = {
    createBlog,
}