const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog } = require('../controllers/blogCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createBlog);
router.put('/:id', authHandler, adminHandler, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authHandler, adminHandler, deleteBlog);
module.exports = router;