const asyncHander = require('express-async-handler');
const fs = require('fs')
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const validateMongoId = require('../utils/validateMongoDBId');
const cloudinaryImgUpload = require('../utils/cloudinary');


const createBlog = asyncHander(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})
const updateBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateBlog)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const delBlog = await Blog.findByIdAndDelete(id)
        res.json(delBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getBlog = asyncHander(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
        const getBlog = await Blog.findById(id).populate('likes').populate('disLikes')
        const updatedBlogViews = await Blog.findByIdAndUpdate(id, {
            $inc: { numViews: 1 }
        }, {
            new: true,
        });
        // res.json(updatedBlogViews)
        res.json(getBlog)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllBlogs = asyncHander(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs)
    } catch (error) {
        throw new Error(error)
    }
})

const likeBlog = asyncHander(async (req, res) => {
    const { blogId } = req.body;
    validateMongoId(blogId)
    // Find the blog which you want to like
    const blog = await Blog.findById(blogId)
    // Find the logged in user
    const loginUserId = req?.user?._id;
    // find if the user has liked the blog
    const isLiked = blog?.isLiked;
    // find if the user has disLiked the blog
    const alreadyDisLiked = blog?.disLikes?.find((
        (userId) => userId.toString() === loginUserId?.toString()
    ))
    if (alreadyDisLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            isDisLiked: false,
        }, { new: true }
        )
        res.json(blog)
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false,
        }, { new: true })
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            isLiked: true,
        }, { new: true })
        res.json(blog)
    }
})

const disLikeBlog = asyncHander(async (req, res) => {
    const { blogId } = req.body;
    validateMongoId(blogId)
    // Find the blog which you want to like
    const blog = await Blog.findById(blogId)
    // Find the logged in user
    const loginUserId = req?.user?._id;
    // find if the user has disliked the blog
    const isDisLiked = blog?.isDisLiked;
    // find if the user has Liked the blog
    const alreadyLiked = blog?.likes?.find((
        (userId) => userId.toString() === loginUserId?.toString()
    ))
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false,
        }, { new: true }
        )
        res.json(blog)
    }
    if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            isDisLiked: false,
        }, { new: true })
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { disLikes: loginUserId },
            isDisLiked: true,
        }, { new: true })
        res.json(blog)
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
            // fs.unlinkSync(path)
        }
        const findBlog = await Blog.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file
            })
        }, { new: true })
        res.json(findBlog);
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog,
    getAllBlogs,
    likeBlog,
    disLikeBlog,
    uploadImages,
}