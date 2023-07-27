const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const mongodbURI = process.env.MONGODB_URI
console.log(mongodbURI)

async function connectToMongoDB(){
  try {
    await mongoose.connect(mongodbURI)
    console.log('Connected to database!')
  } catch (err){
    console.error(`DB Connection error: ${err.message}`)
  }
}

module.exports = connectToMongoDB