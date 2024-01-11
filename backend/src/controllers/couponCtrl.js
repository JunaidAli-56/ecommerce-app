const asyncHander = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const Coupon = require('../models/couponModel');


const createCoupon = asyncHander(async (req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body)
        res.json(newCoupon)
    } catch (error) {
        throw new Error(error)
    }
})
const updateCoupon = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updateCoupon)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteCoupon = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const deleteCoupon = await Coupon.findByIdAndDelete(id)
        res.json(deleteCoupon)
    } catch (error) {
        throw new Error(error)
    }
})
const getCoupon = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const getCoupon = await Coupon.findById(id)
        res.json(getCoupon)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllCoupon = asyncHander(async (req, res) => {
    try {
        const getAllCoupon = await Coupon.find()
        res.json(getAllCoupon)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createCoupon,
    updateCoupon,
    deleteCoupon,
    getCoupon,
    getAllCoupon,
}