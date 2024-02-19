const Attendance = require('../models/Attendance');

exports.checkIn = async (req, res) => {
  const { instructorId, checkIn } = req.body;

  try {
    let attendance = new Attendance({
      instructorId,
      checkIn,
    });

    await attendance.save();

    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.checkOut = async (req, res) => {
  const { _id, checkOut } = req.body;

  try {
    let attendance = await Attendance.findById(_id);

    if (!attendance) {
      return res.status(404).json({ msg: 'Attendance record not found' });
    }

    // Additional validation to ensure checkOut is after checkIn can be added here

    attendance.checkOut = checkOut;

    await attendance.save();

    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getMonthlyReport = async (req, res) => {
  const { month, year } = req.query;
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  try {
    const report = await Attendance.aggregate([
      {
        $match: {
          checkIn: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: "$instructorId",
          totalHours: {
            $sum: {
              $divide: [{ $subtract: ["$checkOut", "$checkIn"] }, 1000 * 60 * 60],
            },
          },
        },
      },
    ]);

    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
