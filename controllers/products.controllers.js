import Product from "../models/products.model.js";

export const createProducts = async (req, res) => {
    try {
      let newProduct =  await Product.create(req.body)
      res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getProducts = async (req, res) =>{
    try {
        let allProduct = await Product.find().sort({createdAt: -1})
         res.status(200).json(allProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getProduct = async (req, res) => {
    try {
        let singleProduct = await Product.findById(req.params.id)
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
