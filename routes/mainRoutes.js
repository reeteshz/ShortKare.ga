const express = require('express');
const router = express.Router()
const controller = require('../controllers/mainController')

// @route GET /
// @desc Route for Homepage
router.get('/', controller.home);

// @route GET /:shortCode
// @desc Route to redirect short url request to mapped page
router.get('/:shortCode', controller.redirectTo);

module.exports = router;