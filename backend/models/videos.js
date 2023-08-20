const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  title: String,
  url: String,
  img: String,
  products: Array,
});

module.exports = mongoose.model("Videos", videosSchema);
