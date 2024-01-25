import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    featured:{
        type: Boolean, 
        default:false,
    },
    descriptions:{
        type: String,
        required: true
    }
})

export default mongoose.model("Product", productSchema)