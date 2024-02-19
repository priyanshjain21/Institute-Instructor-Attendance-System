# Institute Instructor Attendance System

This project is a backend system designed for educational institutes to track their instructors' check-in and check-out times throughout the day and view their total working hours on a monthly basis. It provides APIs for managing attendance records and generating aggregated monthly reports.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- MongoDB (https://www.mongodb.com/)

### Installing

1. Clone the repository to your local machine:
git clone https://github.com/yourusername/yourprojectname.git

2. Navigate to the project directory:
cd institute_instructor_attendance_system

3. Install the necessary dependencies:
npm install

4. Create a `.env` file in the root of the project and add the following content:
MONGO_URI=mongodb://localhost:27017/instructorAttendance
PORT=3000

Replace the `MONGO_URI` value with your MongoDB connection string if different.

5. Start the server:
npm start

## Usage

The system provides the following API endpoints:

- **POST /api/attendance/checkin**: Record an instructor's check-in time.
- **POST /api/attendance/checkout**: Record an instructor's check-out time.
- **GET /api/attendance/monthlyreport**: Retrieve a monthly report of total working hours for all instructors.

## Running the tests
POST request for clocking checkin date and time
url -: http://localhost:3000/api/attendance/checkin/
input -: 
{
  "instructorId": "507f1f77bcf86cd799439011", // Use any ObjectId for instructor
  "checkIn": "2024-02-19T08:00:00.000Z"
}

POST request for clocking checkout date and time
url -: http://localhost:3000/api/attendance/checkout/
input -: 
{
  "_id": "65d32e81ffeb9ba5b710ffd1",
  "checkOut": "2024-02-19T16:00:00.000Z"
}

GET request for getting the monthly records of attendance and total time instructor was present in the institute
url -: http://localhost:3000/api/attendance/monthlyreport?month=2&year=2024
output -:
[
    {
        "_id": "507f1f77bcf86cd799439011",
        "totalHours": 8
    }
]

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - The database used
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

## Authors

- **Priyansh Jain**  - [priyanshjain21](https://github.com/priyanshjain21)
