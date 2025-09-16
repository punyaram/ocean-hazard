const express = require('express');
const router = express.Router();
const { submitReport, getReports } = require('../controllers/reportController');

router.post('/submit', submitReport);
router.get('/', getReports);

module.exports = router;
