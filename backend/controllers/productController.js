const Product = require('../models/Product');

// Get all products
exports.getProducts = async(req, res)=>{
    try{
        const products = await Product.find({userid: req.user._id});
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({error: 'Failed to fetch products'});
    }
};

// Add product
exports.addProduct = async(req, res)=>{
    const { title, desc, image } = req.body;
    try{
        const product = new Product({title, desc, image, userid: req.user._id });
        await product.save();
        res.status(201).json(product);
    } catch(error){
        res.status(400).json({error: 'Failed to add product'});
    }
};

// Update product
exports.updateProduct = async(req, res)=>{
    try {
        const product = await Product.findOneAndUpdate(
            {_id: req.params.id, userid: req.user._id },
            req.body,
            { new: true }
        );
        if(!product) return res.status(404).json({message: 'Product not found'});
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({error: 'Failed to update product'});
    }
};

// Delete product
exports.deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findOneAndDelete({ _id: req.params.id, userid: req.user._id});
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    }catch (error){
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
