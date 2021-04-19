const express=require('express')
const { postProduct, productList, ProductById, read, deleteProduct } = require('../controller/Product')
const router=express.Router()

router.post('/postproduct',postProduct)
router.get('/productlist',productList)
router.param('/productid',ProductById)
router.get('/singleproduct/:productid',read)
router.delete('/deleteproduct/:productid',deleteProduct)


module.exports=router