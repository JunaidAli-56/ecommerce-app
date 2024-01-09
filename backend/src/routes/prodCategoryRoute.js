const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createProductCategory, updateProductCategory, deleteProductCategory, getProductCategory, getAllProductCategory } = require('../controllers/prodCategoryCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createProductCategory);
router.put('/:id', authHandler, adminHandler, updateProductCategory);
router.delete('/:id', authHandler, adminHandler, deleteProductCategory);
router.get('/:id', authHandler, getProductCategory);
router.get('/', authHandler, getAllProductCategory);

module.exports = router;