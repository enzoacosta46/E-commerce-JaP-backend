// GET - cats/cat.json

import express from "express";
import {
  obtenerCategorias,
  obtenerCategoriaPorId,
} from "../controller/catsController.js";

const router = express.Router();

router.get("/cat.json", obtenerCategorias);

// GET - /cats_products/102.json
// CATEGORY_ID = 102.json

router.get("/cats_products/:CATEGORY_ID", obtenerCategoriaPorId);

export default router;
