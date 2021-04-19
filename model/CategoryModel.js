const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    category_name:{
        type:String,
        required:true,
        //trim removes white spaces front and back,required:true means a value must be there
        trim:true
    }
},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema);