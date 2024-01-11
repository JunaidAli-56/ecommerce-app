const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupon } = require('../controllers/couponCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createCoupon);
router.put('/:id', authHandler, adminHandler, updateCoupon);
router.delete('/:id', authHandler, adminHandler, deleteCoupon);
router.get('/:id', getCoupon);
router.get('/', getAllCoupon);

module.exports = router;