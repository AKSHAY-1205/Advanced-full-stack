var express = require("express");
var path = require("path");
var app = express();
var env = require('dotenv');
var mdb = require("mongoose");
var User = require("./models/users");
var Feedback = require("./models/feedback");
var cors = require("cors");

const PORT = 3000;

env.config()
app.use(express.json());
app.use(cors());

mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });



app.get("/", (req, res) => {
  res.send("Welcome to Backend Server");
});



app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend ", url: "localhost", port: "PORT" });
});



app.get("/static", (req, res) => {
  console.log("Running");
  res.sendFile(path.join(__dirname, "index.html"));
});



app.post("/signup", (req, res) => {
  try {
    var newUser = new User(req.body).save();
    console.log(req.body.password);
    res.status(200).send("User Added Successfully");
  } catch (err) {
    console.log(err);
  }
});



app.get("/getsignup", async (req, res) => {
  try {
    var allSignupRecords = await User.find();
    res.json(allSignupRecords);
    console.log("Fetched Successfully");
  } catch (err) {
    console.log("Cannot able to read the records");
    console.log(err);
    res.send(err);
  }
});



app.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var existingUser = await User.findOne({ email: email });
    //console.log(existingUser)
    if (existingUser) {
      if (existingUser.password !== password) {
        res.json({ message: "Invalid Credentials", isLoggedIn: false });
      } else {
        res.json({ message: "Login Successful", isLoggedIn: true });
      }
    } else {
      res.json({ message: "Login Failed", isLoggedIn: false });
    }
  } catch (err) {
    console.log("Some error");
  }
});



app.post("/feedback", async (req, res) => {
  const { name, email, feedback } = req.body;
  try {
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error submitting feedback", error: err });
  }
});


app.get("/feedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.find();
    res.status(200).json(allFeedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving feedback", error: err });
  }
});


app.listen(PORT, () => {
  console.log(`Backend Server Running... \nUrl:http://localhost:${PORT}`);
});
