import { createProducts, getProducts, getProduct } from "../controllers/products.controllers.js";
import express from "express";

const router = express.Router()

router.post("/create", createProducts)
router.get("/get-all", getProducts)
router.get("/get/:id", getProduct)

export default router;