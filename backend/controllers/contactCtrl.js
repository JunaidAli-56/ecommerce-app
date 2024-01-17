const asyncHander = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const Contact = require('../models/contactModel');


const createContactus = asyncHander(async (req, res) => {
    try {
        const newContactus = await Contact.create(req.body)
        res.json(newContactus)
    } catch (error) {
        throw new Error(error)
    }
})
const updateContactus = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const updateContactus = await Contact.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updateContactus)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteContactus = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const deleteContactus = await Contact.findByIdAndDelete(id)
        res.json(deleteContactus)
    } catch (error) {
        throw new Error(error)
    }
})
const getContactus = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const getContactus = await Contact.findById(id)
        res.json(getContactus)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllContactus = asyncHander(async (req, res) => {
    try {
        const getAllContactus = await Contact.find()
        res.json(getAllContactus)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createContactus,
    updateContactus,
    deleteContactus,
    getContactus,
    getAllContactus,
}