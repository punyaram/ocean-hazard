const express = require('express');
const router = express.Router();
const { addAidStatus, getAidStatus } = require('../controllers/aidController');

router.post('/add', addAidStatus);
router.get('/', getAidStatus);

module.exports = router;

