const asyncHander = require('express-async-handler');
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const validateMongoId = require('../utils/validateMongoDBId');


const createBlog = asyncHander(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})
const updateBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateBlog)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const delBlog = await Blog.findByIdAndDelete(id)
        res.json(delBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const getBlog = await Blog.findById(id);
        const updatedBlogViews = await Blog.findByIdAndUpdate(id, {
            $inc: { numViews: 1 }
        }, {
            new: true,
        });
        res.json(updatedBlogViews)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllBlogs = asyncHander(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog,
    getAllBlogs,
}