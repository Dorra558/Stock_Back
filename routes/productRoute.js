const express = require('express')
const router = express.Router()
const product = require('../controller/productController');

router.post('/addProducts', product.addProduct)
router.get('/getProducts', product.getProduct)

router.delete('/:id', product.deleteProduct)
router.put('/:id', product.updateProduct)



module.exports = router