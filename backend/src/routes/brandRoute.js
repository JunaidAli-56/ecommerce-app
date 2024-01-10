const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createBrand, updateBrand, deleteBrand, getBrand, getAllBrand } = require('../controllers/brandCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createBrand);
router.put('/:id', authHandler, adminHandler, updateBrand);
router.delete('/:id', authHandler, adminHandler, deleteBrand);
router.get('/:id', getBrand);
router.get('/', getAllBrand);

module.exports = router;