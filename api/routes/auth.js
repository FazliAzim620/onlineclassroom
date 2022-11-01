const route = require("express").Router();
const User = require("../Model/User");
const bcrypt = require("bcrypt");
const Post = require("../Model/Post");

route.post("/register", async (req, res) => {
  console.log(req.body.username);
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      category: req.body.category,
    });
    console.log(req.body)
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});
// login api
route.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("User Not Found");
    }
    const existPass = await user.password;
    if (req.body.password != existPass) {
      res.status(404).send("Invilid Password");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

// Get All Users
route.get("/all-users", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

// find user
route.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    res.status(200).json(user);
  } catch (e) {
    res.status(404).send(e);
  }
});
module.exports = route;
