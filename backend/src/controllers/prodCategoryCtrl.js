const asyncHander = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const ProductCategory = require('../models/prodCategoryModel');


const createProductCategory = asyncHander(async (req, res) => {
    try {
        const newCategory = await ProductCategory.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const updateProductCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const updateCategory = await ProductCategory.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updateCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteProductCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await ProductCategory.findByIdAndDelete(id)
        res.json(deleteCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const getProductCategory = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const getCategory = await ProductCategory.findById(id)
        res.json(getCategory)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllProductCategory = asyncHander(async (req, res) => {
    try {
        const getAllCategory = await ProductCategory.find()
        res.json(getAllCategory)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createProductCategory,
    updateProductCategory,
    deleteProductCategory,
    getProductCategory,
    getAllProductCategory,
}