const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  image: String,
});

module.exports = mongoose.model("Users", usersSchema);
