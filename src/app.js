const express = require('express');
const connectDB = require('./config/db');
const attendanceRoutes = require('./routes/attendanceRoutes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
