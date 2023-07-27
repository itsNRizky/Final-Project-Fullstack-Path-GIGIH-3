const mongoose = require('mongoose')

const videosSchema = new mongoose.Schema({
  title: String,
  url: String,
  img: String,
  products: Array,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }
})

module.exports = mongoose.model('Videos', videosSchema)