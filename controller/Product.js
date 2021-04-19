const Product=require('../model/ProductModel')

exports.postProduct=(req,res)=>{
    let product=new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_quantity:req.body.product_quantity,
        product_rating:req.body.product_rating,
        category:req.body.category,
        product_description:req.body.product_description
    })
product.save((error,products)=>{
    if (error|| !products){
        return res.status(400).json({error:"something went wrong"})
    }
    res.json({products})
})
}

exports.productList=(req,res)=>{
    Product.find().exec((error,products)=>{
        if(error||! products){
            return res.status(400).json({error:"Product not found"})

        }
        res.json({products})
    })
}

//product by id
exports.ProductById=(req,res,next,id)=>{
    Product.find().exec((error,product)=>{
        if(error||!product){
            return res.status(400).json({error:"product not found"})
        }
        req.product=product
        next()
    })
}

//to show single product
exports.read=(req,res)=>{
    res.join(req.product)
}

//to delete products
exports.deleteProduct=(req,res)=>{
    const product=req.productproduct.remove((error,result)=>{
        if(error ||! result){
            return res.status(400).json({error:"failed to delete product"})
        }
        res.json({message:"product deleted"})
    })
}
//to update product
exports.updateProduct=(req,res)=>{
 let product=req.product
 product.product_name=req.pody.product_name,
 product.product_price=req.body.product_price,
 product.product_quantity=req.body.product_quantity,
 product.product_description=req.body.product_description,
 product.category=req.body.category

 product.save((error,result)=>{
     if(error|| !result){
         return res.status(400).json({error:"failed to update product"})
     }
     res.json({product})
 })
}