const asyncHander = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const Brand = require('../models/brandModel');


const createBrand = asyncHander(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body)
        res.json(newBrand)
    } catch (error) {
        throw new Error(error)
    }
})
const updateBrand = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const updateBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updateBrand)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteBrand = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const deleteBrand = await Brand.findByIdAndDelete(id)
        res.json(deleteBrand)
    } catch (error) {
        throw new Error(error)
    }
})
const getBrand = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const getBrand = await Brand.findById(id)
        res.json(getBrand)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllBrand = asyncHander(async (req, res) => {
    try {
        const getAllBrand = await Brand.find()
        res.json(getAllBrand)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getAllBrand,
}