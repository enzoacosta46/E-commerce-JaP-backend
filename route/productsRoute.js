import express from "express";
import {
  obtenerProductos,
  obtenerComentariosPorProducto,
} from "../controller/productsController.js";
const router = express.Router();

// pruducts/id.json
router.get("/:PRODUCTS_ID", obtenerProductos);

// products/comments/ID.json
router.get("/comments/:PRODUCTS_ID", obtenerComentariosPorProducto);

export default router;
