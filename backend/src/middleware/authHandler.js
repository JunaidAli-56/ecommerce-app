const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(' ')[1]
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.SECRET_KEY)
                const user = await User.findById(decoded.id)
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error('no token Exist. Login again')
        }
    }
    else {
        throw new Error('there is no token attached to headers')
    }
})

const adminHandler = asyncHandler(async (req, res, next) => {
    // console.log(req.user)
    const { email } = req.user;
    const adminUser = await User.findOne({ email })
    if (adminUser.role !== 'admin') {
        throw new Error('You are not an admin')
    } else {
        next();
    }
})

module.exports = {
    authMiddleware,
    adminHandler
};