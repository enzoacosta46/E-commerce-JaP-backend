import express from "express";
import {
  obtenerProductos,
  obtenerComentariosPorProducto,
} from "../controller/productsController.js";
const router = express.Router();

// pruducts/id.json
router.get("/products/:PRODUCTS_ID", obtenerProductos);

// products_comments/ID.json
router.get("/products_comments/:PRODUCTS_ID", obtenerComentariosPorProducto);

export default router;
