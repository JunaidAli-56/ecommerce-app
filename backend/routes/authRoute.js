const express = require('express');
const { createUser, loginUser, getAllUser, getSingleUser, deleteUser, updateUser, blockUser, unBlockUser, handleRefreshToken, handleLogout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAddress, addToCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus, getAllOrders } = require('../controllers/userCtrl');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/admin-login', loginAdmin)
router.post('/cart', authHandler, addToCart)
router.post('/cart/apply-coupon', authHandler, applyCoupon)
router.post('/cart/cash-order', authHandler, createOrder)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put('/update-order/:id', authHandler, adminHandler, updateOrderStatus)
router.put('/password', authHandler, updatePassword)
router.get('/all-users', getAllUser)
router.get('/refresh', handleRefreshToken)
router.get('/logout', handleLogout)
router.get('/get-orders', authHandler, getOrders)
router.get('/get-allorders', authHandler, adminHandler, getAllOrders)
router.get('/wishlist', authHandler, getWishList)
router.get('/cart', authHandler, getUserCart)
router.get('/:id', authHandler, adminHandler, getSingleUser)
router.put('/update-user', authHandler, updateUser)
router.put('/save-address', authHandler, saveAddress)
router.put('/block-user/:id', authHandler, adminHandler, blockUser)
router.put('/unblock-user/:id', authHandler, adminHandler, unBlockUser)
router.delete('/empty-cart', authHandler, emptyCart)
router.delete('/:id', deleteUser)

module.exports = router;