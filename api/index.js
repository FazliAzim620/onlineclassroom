const express = require("express");
const dotenv = require("dotenv");
const ConnectDB = require("./DB/connection");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

// routes
const authroutes = require("./routes/auth");
const createpost = require("./routes/post");
const createcourse = require("./routes/createcourse");
const createAttendance = require("./routes/attendance");
const createAssignment = require("./routes/assignment");
const createQuiz = require("./routes/quiz");
const app = express();

dotenv.config();
ConnectDB();
// middleware
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/images", express.static(__dirname + "/images"));
app.use(morgan("common")); //a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process
app.use(fileUpload());

app.use("/api/auth", authroutes);
app.use("/api/post/", createpost);
app.use("/api/createcourse", createcourse);
app.use("/api/attendance", createAttendance);
app.use("/api/assignment", createAssignment);
app.use("/api/quiz", createQuiz);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server listning on PORT:" + PORT);
});
