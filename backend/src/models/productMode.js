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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    brand: {
        type: String,
        enum: ["OnePlus", "Poco", "Realme"]
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0,
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        enum: ["Black", "Brown", "Red"]
    },
    ratings: [{
        star: Number,
        postedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }]
}, {
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Product', productSchema);