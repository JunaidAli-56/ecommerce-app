const express = require('express');
const { createUser, loginUser, getAllUser, getSingleUser, deleteUser, updateUser } = require('../controllers/userCtrl');
const authMiddleware = require('../middleware/authHandler');

const router = express.Router();

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/:id', authMiddleware, getSingleUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;