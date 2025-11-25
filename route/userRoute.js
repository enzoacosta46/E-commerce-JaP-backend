import express from "express";
const router = express.Router();
import { loginUsuario } from "../controller/userController.js";

router.post("/login", loginUsuario);

export default router;
