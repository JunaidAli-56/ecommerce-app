const generateToken = require('../config/jwtToken');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoId = require('../utils/validateMongoDBId');
const generateRefreshToken = require('../config/refreshToken');

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
        const refreshToken = generateRefreshToken(findUser?.id)

        // findUser.refreshToken = refreshToken;
        // await findUser.save();

        // You don't need to update the user again with findByIdAndUpdate
        const updateUserId = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken
        },
            {
                new: true,
            })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
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

// Handle Refresh Token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No refresh token in Cookie')
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) throw new Error('No refresh token present in db or match ')
    jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('There is something wrong with refresh token')
        }
        const accessToken = generateToken(user?.id)
        res.json({ accessToken })
    })
    res.json(user)
})
//Logout function
const handleLogout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No refresh token in Cookie')
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        })
        return res.sendStatus(204)
    }
    // user.refreshToken = '';
    // await user.save();

    // console.log('User logged out successfully');

    await User.findByIdAndUpdate(refreshToken, {
        refreshToken: "",
    })
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    })
    res.sendStatus(204) // forebidden

})

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


const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const newPassword = req.body.password;
    validateMongoId(_id);
    const user = await User.findById(_id)
    console.log(newPassword)
    if (newPassword) {
        user.password = newPassword;
        const updatedPassword = await user.save();
        res.json(updatedPassword)
    } else {
        res.json(user)
    }
})
const resetPassword = asyncHandler(async (req, res) => {

})
const forgotPassword = asyncHandler(async (req, res) => {

})

module.exports = {
    createUser,
    loginUser,
    handleRefreshToken,
    handleLogout,
    getAllUser,
    getSingleUser,
    updateUser,
    blockUser,
    unBlockUser,
    deleteUser,
    updatePassword,
}

