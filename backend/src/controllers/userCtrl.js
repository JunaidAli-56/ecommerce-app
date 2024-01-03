const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')

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

module.exports = {
    createUser
}