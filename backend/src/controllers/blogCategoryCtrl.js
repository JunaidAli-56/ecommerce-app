const asyncHander = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const BlogCategory = require('../models/blogCategoryModel');


const createBlogCategory = asyncHander(async (req, res) => {
    try {
        const newCategory = await BlogCategory.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const updateBlogCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const updateCategory = await BlogCategory.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updateCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteBlogCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await BlogCategory.findByIdAndDelete(id)
        res.json(deleteCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const getBlogCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const getCategory = await BlogCategory.findById(id)
        res.json(getCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllBlogCategory = asyncHander(async (req, res) => {
    try {
        const getAllCategory = await BlogCategory.find()
        res.json(getAllCategory)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogCategory,
    getAllBlogCategory,
}