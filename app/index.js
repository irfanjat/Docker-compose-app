const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo:27017/devops", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const schema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", schema);

app.get("/", async (req, res) => {
  await User.create({ name: "DevOps Engineer" });
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
