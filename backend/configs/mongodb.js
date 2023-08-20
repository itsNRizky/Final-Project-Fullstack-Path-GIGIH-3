const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongodbURI = process.env.MONGODB_URI;
console.log(mongodbURI);

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://nrizky:novian123@study.9ysim6p.mongodb.net/finalterm/?retryWrites=true&w=majority"
    );
    console.log("Connected to database!");
  } catch (err) {
    console.error(`DB Connection error: ${err.message}`);
  }
}

module.exports = connectToMongoDB;
