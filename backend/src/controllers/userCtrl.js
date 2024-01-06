const generateToken = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        // Create the User.
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        // User Already Exist
        throw new Error("User Already Exist")
    }
}
)
// login Route/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),

        })
    } else {
        // informtaion not match
        throw new Error("invalid credentials")
    }
}
)

// Get all users.
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUser = await User.find()
        res.json(getUser);
    }
    catch (error) {
        throw new Error(error)
    }
})

// Get a Single User 
const getSingleUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const getUser = await User.findById(id)
        res.json(getUser);
    } catch (error) {
        throw new Error(error)
    }
})

// Update a Single User 
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoId(_id)
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
            password: req?.body?.password,
        }, { new: true })
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error)
    }
})

// Block User.
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true
        }, {
            new: true
        })
        res.json(block)
    } catch (error) {
        throw new Error(error)
    }
})
// Un-Block User.
const unBlockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const unBlock = await User.findByIdAndUpdate(id, {
            isBlocked: false
        }, {
            new: false
        })
        res.json({
            messgae: "User is  Un-Blocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})
// Delete a Single User 
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const delteUser = await User.findByIdAndDelete(id)
        res.json(delteUser);
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createUser,
    loginUser,
    getAllUser,
    getSingleUser,
    updateUser,
    blockUser,
    unBlockUser,
    deleteUser,
}

