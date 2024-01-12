const slugify = require('slugify');
const asyncHander = require('express-async-handler');
const fs = require('fs')
const Product = require('../models/productModel')
const User = require('../models/userModel');
const validateMongoId = require('../utils/validateMongoDBId');
const cloudinaryImgUpload = require('../utils/cloudinary');

const createProduct = asyncHander(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const updateProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getProduct = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)
    }
})
const getAllProducts = asyncHander(async (req, res) => {
    try {
        // Filtering
        const queryObj = { ...req.query }
        const excludeFields = ['page', 'sort', 'limit', 'fields']
        excludeFields.forEach((el) => delete queryObj[el])
        // queryObj is our modified array
        // console.log(req.query, queryObj);
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        let query = Product.find(JSON.parse(queryStr))

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(" ");
            query = query.sort(sortBy)
        } else {
            query = query.sort("-createdAt")
        }


        // Limiting the fileds means hide some fileds from user
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(" ");
            query = query.select(fields)
        } else {
            query = query.select("-__v")
        }

        // Pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit)
        //  Validation for page
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("Page does not exit");
        }

        console.log(page, limit, skip)

        const product = await query;
        res.json(product);

    } catch (error) {
        throw new Error(error)
    }
})
const addToWishList = asyncHander(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id)
        let alreadyAdded = user.wishlist.find((id) => id.toString() === prodId)
        if (alreadyAdded) {
            const user = await User.findByIdAndUpdate(_id, {
                $pull: { wishlist: prodId },
            }, { new: true })
            res.json(user)
        } else {
            const user = await User.findByIdAndUpdate(_id, {
                $push: { wishlist: prodId },
            }, { new: true })
            res.json(user)
        }
    } catch (error) {
        throw new Error(error)
    }

})

const rating = asyncHander(async (req, res) => {
    const { _id } = req.user;
    const { star, comment, prodId } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find((userId) => userId.postedby.toString() === _id.toString());
        // If the user has already rated, update the existing rating
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated }
                },
                {
                    $set: { "ratings.$.star": star, "ratings.$.comment": comment }
                },
                {
                    new: true
                }
            )
            // res.json(updateRating)
        } else {
            // If the user hasn't rated, add a new rating to the product
            const ratedProduct = await Product.findByIdAndUpdate(prodId, {
                $push: {
                    ratings: {
                        star: star,
                        comment: comment,
                        postedby: _id
                    }
                }
            })
            // res.json(ratedProduct)
        }
        const getAllRatings = await Product.findById(prodId);
        let totalRating = getAllRatings.ratings.length;
        let ratingSum = getAllRatings.ratings.map((items) => items.star).reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingSum / totalRating)
        let findalProduct = await Product.findByIdAndUpdate(prodId, {
            totalRating: actualRating
        },
            { new: true }
        )
        res.json(findalProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const uploadImages = asyncHander(async (req, res) => {
    // console.log(req.files);
    const { id } = req.params;
    validateMongoId(id)
    try {
        const uploader = (path) => cloudinaryImgUpload(path, 'images');
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path)
            urls.push(newPath)
            // try {
            //     fs.unlinkSync(path);
            // } catch (unlinkError) {
            //     throw new Error(unlinkError);
            // }
        }
        const findProduct = await Product.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file
            })
        }, { new: true })
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    addToWishList,
    rating,
    uploadImages,
}