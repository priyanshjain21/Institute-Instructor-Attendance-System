const express = require('express');
const router = express.Router();
const { checkIn, checkOut, getMonthlyReport } = require('../controllers/attendanceController');

router.post('/checkin', checkIn);
router.post('/checkout', checkOut);
router.get('/monthlyreport', getMonthlyReport);

module.exports = router;
