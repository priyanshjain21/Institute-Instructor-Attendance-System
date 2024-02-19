const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
  },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
