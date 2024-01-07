const Product = require('../models/productModel')
const asyncHander = require('express-async-handler');
const slugify = require('slugify')

const createProduct = asyncHander(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const updateProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)
    }
})
const getAllProducts = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const getAllProducts = await Product.find()
        res.json(getAllProducts);
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
}