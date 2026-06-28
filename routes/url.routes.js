const express = require('express');

const { handleGenerateShortURL } = require('../controllers/url.controller');

const router = express.Router();

router.post('/', handleGenerateShortURL);

module.exports = router;