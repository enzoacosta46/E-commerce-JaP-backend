import express from "express";
import {
  obtenerCarritoPorUsuario,
  guardarCarritoPorUsuario,
} from "../controller/cartController.js";
const router = express.Router();

router.get("/:USER_ID", obtenerCarritoPorUsuario);

router.post("/cart", guardarCarritoPorUsuario);

export default router;
