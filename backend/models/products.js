const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  } 
})

module.exports = mongoose.model('Products', productsSchema)