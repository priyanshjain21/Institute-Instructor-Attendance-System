const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Additional fields as needed
});

module.exports = mongoose.model('Instructor', InstructorSchema);
