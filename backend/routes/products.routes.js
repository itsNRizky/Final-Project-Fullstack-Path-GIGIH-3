const express = require('express')
const router = express.Router()
const productsControllers = require('./../controllers/products.controllers')

router.get('/', productsControllers.getProducts)
router.post('/', productsControllers.createProduct)
router.put('/', productsControllers.updateProduct)
router.delete('/:id', productsControllers.deleteProduct)
router.get('/:id', productsControllers.getProductById)

module.exports = router