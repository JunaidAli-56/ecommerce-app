const express = require('express');
const { createUser, loginUser, getAllUser, getSingleUser, deleteUser, updateUser, blockUser, unBlockUser } = require('../controllers/userCtrl');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/:id', authHandler, adminHandler, getSingleUser)
router.put('/update-user', authHandler, updateUser)
router.put('/block-user/:id', authHandler, adminHandler, blockUser)
router.put('/unblock-user/:id', authHandler, adminHandler, unBlockUser)
router.delete('/:id', deleteUser)

module.exports = router;