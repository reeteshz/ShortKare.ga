const express = require('express');
const router = express.Router()
const controller = require('../controllers/shortURLController')

// @route POST /shorten
// @params {longUrl: string}
// @desc Route to short url or fetch if already shorten
router.post('/', controller.shorten);

module.exports = router;