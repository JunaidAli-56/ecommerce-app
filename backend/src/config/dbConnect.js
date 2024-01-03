const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.DATABASE_URL)
        console.log("DB Connection Successful")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;