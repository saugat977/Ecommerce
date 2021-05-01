exports.productValidation=(req,res,next)=>{
    req.check('product_name','product name is required').notEmpty()
    
    req.check('product_price','product price is required').notEmpty()
    .isNumeric()
    .withMessage('price only contains numeric value')
    
    req.check('product_quantity','product qantity is required').notEmpty()
    .isNumeric()
    .withMessage('quantity only contains numeric value')
    
    req.check('category','Category is required').notEmpty()
    req.check('product_description','product description is required').notEmpty()
    .isLength({
        min:25
    })
    .withMessage('Description must more than 25 characters')
    const errors=req.validationErrors();
	if(errors){
		const firstError=errors.map(error=>error.msg)[0];
		return res.status(400).json({error:firstError})
	}
	next();

}
