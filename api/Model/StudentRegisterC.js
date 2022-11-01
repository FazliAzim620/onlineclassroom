const mongoose = require("mongoose");
const StudentRegisterCSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  coursename: {
    type: String,
    require: true,
  },
  instructorname: {
    type: String,
  },
  coursecode: {
    type: String,
  },
});
module.exports = mongoose.model("RegisterCourse", StudentRegisterCSchema);
