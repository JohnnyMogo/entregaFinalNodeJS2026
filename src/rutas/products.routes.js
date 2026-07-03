import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controladores/products.controller.js";
import { authentication } from "../middleware/authentication.js";

router.get("/products", getAllProducts);

router.get("/product/:id", getProductById);

router.post("/products", authentication, createProduct);

router.put("/products/:id", authentication, updateProduct);

router.delete("/products/:id", authentication, deleteProduct);

export default router;
