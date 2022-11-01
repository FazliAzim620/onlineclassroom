const mongoose = require("mongoose");
const AttendanceSchema = new mongoose.Schema(
  {
    attendances: [
      {
        topic: { type: String },
        name: { type: String },
        present: { type: String },
        absent: { type: String },
        leave: { type: String },
        attendance: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Attendance", AttendanceSchema);
