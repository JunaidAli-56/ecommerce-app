const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory, getAllBlogCategory } = require('../controllers/blogCategoryCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createBlogCategory);
router.put('/:id', authHandler, adminHandler, updateBlogCategory);
router.delete('/:id', authHandler, adminHandler, deleteBlogCategory);
router.get('/:id', getBlogCategory);
router.get('/', getAllBlogCategory);

module.exports = router;