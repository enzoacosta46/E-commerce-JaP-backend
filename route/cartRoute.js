import express from "express";
import { obtenerCarritoPorUsuario } from "../controller/cartController.js";
const router = express.Router();

router.get("/:USER_ID", obtenerCarritoPorUsuario);

export default router;
