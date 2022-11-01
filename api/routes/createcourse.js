const router = require("express").Router();
const CreateCourse = require("../Model/CreateCourse");
const RegisterCourse = require("../Model/StudentRegisterC");
//  ***************** Create course
router.post("/", async (req, res) => {
  const newCourse = new CreateCourse(req.body);
  try {
    await newCourse.save();
    res.status(200).send(newCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});
//*****************         get courses */
router.get("/courses", async (req, res) => {
  try {
    const courses = await CreateCourse.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ******************** join course
router.get("/course", async (req, res) => {
  console.log(req.query.id);
  try {
    const post = await CreateCourse.find({ accesscode: req.query.id });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
//  ***************** Register course
router.post("/registerc", async (req, res) => {
  const regC = new RegisterCourse(req.body);
  try {
    await regC.save();
    res.status(200).send(regC);
  } catch (err) {
    res.status(500).json(err);
  }
});
//**************************** Show Register Courses  */
router.get("/showcourses", async (req, res) => {
  try {
    const courses = await RegisterCourse.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
