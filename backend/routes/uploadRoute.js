const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { uploadImages, deleteImages } = require('../controllers/uploadCtrl');
const { uploadPhoto, productImageSize } = require('../middleware/uploadImageMiddleware');

const router = express.Router();

router.post('/upload/', authHandler, adminHandler, uploadPhoto.array("images", 10), productImageSize, uploadImages)
router.delete('/delete-image/:id', authHandler, adminHandler, deleteImages);

module.exports = router;