const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, disLikeBlog, uploadImages } = require('../controllers/blogCtrl');
const { uploadPhoto, blogImageSize } = require('../middleware/uploadImageMiddleware');
const router = express.Router()

router.post('/', authHandler, adminHandler, createBlog);
router.put('/upload/:id', authHandler, adminHandler, uploadPhoto.array("images", 2), blogImageSize, uploadImages)
router.put('/likes', authHandler, likeBlog);
router.put('/dislikes', authHandler, disLikeBlog);
router.put('/:id', authHandler, adminHandler, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authHandler, adminHandler, deleteBlog);
module.exports = router;