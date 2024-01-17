const express = require('express');
const { authHandler, adminHandler } = require('../middleware/authMiddleware');
const { createContactus, updateContactus, deleteContactus, getContactus, getAllContactus } = require('../controllers/ContactCtrl');
const router = express.Router()

router.post('/', createContactus);
router.put('/:id', updateContactus);
router.delete('/:id', deleteContactus);
router.get('/:id', getContactus);
router.get('/', getAllContactus);

module.exports = router;