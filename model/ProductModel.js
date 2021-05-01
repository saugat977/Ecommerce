const mongoose=require('mongoose')
//the primary key id in category model is taken here as object id which is a foreign key here
const {ObjectId}=mongoose.Schema

const productSchema=new mongoose.Schema({
product_name:{
    type:String,
    required:true,
    trim:true, //trim removes white space
    
},
product_price:{
    type:Number,
    required:true,
},
product_description:{
    type:String,
    required:true
},
category:{
    type:ObjectId,
    required:true,
    ref:'Category' //the name Category here should be same as the value at mongoose.exports.. at category model
},
product_rating:{
    type:Number,
    default:0,
    max:5
},
sold_quantity:{
    type:Number,
    default:0
},
product_image:{
    type:String,
    required:true
}


},{timestamps:true})

module.exports=mongoose.model('product',productSchema)