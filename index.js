import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/products.routes.js"
import cors from "cors";

dotenv.config()
const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error.message))


app.use(express.json())

  app.use(cors())

  app.use("/api/prodcuts", productRoutes)

app.listen(port, () => console.log(`server is runding on port no.${port}`))