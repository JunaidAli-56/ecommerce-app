const express = require('express')
const { adminHandler, authHandler } = require('../middleware/authMiddleware')
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishList, rating, uploadImages, deleteImages } = require('../controllers/productCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createProduct);
router.put('/wishlist', authHandler, addToWishList);
router.put('/rating', authHandler, rating);
router.put('/:id', authHandler, adminHandler, updateProduct);
router.delete('/:id', authHandler, adminHandler, deleteProduct);
router.get('/:id', getProduct);
router.get('/', getAllProducts);

module.exports = router;