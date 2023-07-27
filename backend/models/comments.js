const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
  value: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Videos'
  }
})

module.exports = mongoose.model('Comments', commentsSchema)