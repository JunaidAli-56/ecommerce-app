const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createColor, updateColor, deleteColor, getColor, getAllColor } = require('../controllers/colorCtrl');
const router = express.Router()

router.post('/', authHandler, adminHandler, createColor);
router.put('/:id', authHandler, adminHandler, updateColor);
router.delete('/:id', authHandler, adminHandler, deleteColor);
router.get('/:id', getColor);
router.get('/', getAllColor);

module.exports = router;