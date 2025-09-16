const express = require('express');
const router = express.Router();
const { getSocialPosts } = require('../controllers/socialController');

router.get('/', getSocialPosts);

module.exports = router;
