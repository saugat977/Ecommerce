const express =require('express');
const { getHello, postCategory,getAllCategory, CategoryById, getsingleCategory, deleteCategory, updateCategory } = require('../controller/Category');
const router=express.Router();

//get is used to get data getHello is calling the function
router.get('/hello',getHello)
router.post('/postcategory',postCategory)
router.get('/categorylist',getAllCategory)
router.param('categoryId',CategoryById)
router.get('/read/:categoryId',getsingleCategory)
router.delete('/deletecategory/:categoryId',deleteCategory)
router.put('/updatecategory/:categoryId',updateCategory)

module.exports=router