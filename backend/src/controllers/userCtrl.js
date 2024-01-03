const User = require('../models/userModel');

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = User.findOne(email);
    if (!findUser) {
        // Create the User.
        const newUser = User.create(req.body)
        res.json(newUser)
    } else {
        // User Already Exist
        res.json({
            msg: 'User Already Exist',
            success: false
        })
    }
}

module.exports = {
    createUser
}