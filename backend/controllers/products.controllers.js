const Product = require('./../models/products')
const Video = require('./../models/videos')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().exec()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findById(productId).exec()
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getProductsByUser = async (req, res) => {
  try {
    const userId = req.body.id
    const products = await Product.find({user_id: userId}).exec()
    res.status(200).json(products)
  } catch (err){
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const createProduct = async (req, res) => {
  try {
    const { name, img, price, user_id } = req.body
    await Product.create({name, img, price, user_id})
    res.status(200).json({msg: `Product added!!`})
  } catch (err) {
    res.status(500).json({msg: `Error adding new product to database: ${err.message}`})
  }
}

const updateProduct = async (req, res) => {
  try{
    const { _id, name, img, price } = req.body
    await Product.findByIdAndUpdate(_id, {name, img, price} ).exec()
    res.status(200).json({msg: 'Product updated!'})
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const videos = await Video.find({products: { $in : [productId]}}).exec()
    if (videos.length !== 0){
      res.status(200).json({msg: `Data is still stored in: ${videos[0].title}`})
    } else {
      await Product.findByIdAndDelete(productId).exec()
      res.status(200).redirect('/')
    }
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

module.exports = { getProducts, getProductById, getProductsByUser, createProduct, updateProduct, deleteProduct }