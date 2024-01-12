const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Category',
    },
    brand: {
        type: String,
        required: true,
        // enum: ["OnePlus", "Poco", "Realme"]
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0,
        // select: false,   
    },
    images: [],
    color: {
        type: String,
        required: true,
        // enum: ["Black", "Brown", "Red"]
    },
    ratings: [{
        star: Number,
        comment:String,
        postedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }],
    totalRating: {
        type: String,
        default: 0,
    }
}, {
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Product', productSchema);