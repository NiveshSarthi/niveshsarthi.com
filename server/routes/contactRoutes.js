const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

const authMiddleware = require('../utils/authMiddleware');

router.post('/', contactController.submitContactForm);
router.get('/', authMiddleware, contactController.getContacts);

module.exports = router;
