const express=require('express')
const { postProduct, productList, ProductById, read, deleteProduct, updateProduct } = require('../controller/Product')
const { productValidation } = require('../validation')
const router=express.Router()


router.post('/postproduct',productValidation,postProduct)
router.get('/productlist',productList)
router.param('/productid',ProductById)
router.get('/singleproduct/:productid',read)
router.delete('/deleteproduct/:productid',deleteProduct)
router.put('/updateproduct/:productId',updateProduct)


module.exports=router