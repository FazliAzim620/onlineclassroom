const route = require("express").Router();
const Attendance = require("../Model/Attendance");

// Get ALL Attendance
route.get("/", async (req, res) => {
  try {
    const Assign = await Attendance.find({
      "attendances.attendance": "Taken",
    }).sort({ createdAt: -1 });
    res.status(200).json(Assign);
  } catch (e) {
    res.status(404).send(e);
  }
});

route.post("/", async (req, res) => {
  try {
    var attendance = req.body;
    arr_attendance = [];
    for (var i = 0; i < attendance.length; i++) {
      var items = {
        topic: attendance[i].topic,
        name: attendance[i].name,
        present: attendance[i].present,
        absent: attendance[i].absent,
        leave: attendance[i].leave,
        attendance: "Taken",
      };
      arr_attendance.push(items);
    }

    const attendances = new Attendance({
      attendances: arr_attendance,
    });

    await attendances.save();
    res.status(200).json(attendances);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
