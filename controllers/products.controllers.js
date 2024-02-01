import Product from "../models/products.model.js";

export const createProducts = async (req, res) => {
    try {
        let newProduct = await Product.create(req.body)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getProducts = async (req, res) => {
    const { page } = req.query
    const LIMIT = 9
    const startIndex = (Number(page) - 1) * LIMIT; 
    const total = await Product.countDocuments({})

    try {
        let allProduct = await Product.find().sort({ createdAt: -1 }).limit(LIMIT).skip(startIndex)
        res.status(200).json({
            data: allProduct,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        let singleProduct = await Product.findById(req.params.id)
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
