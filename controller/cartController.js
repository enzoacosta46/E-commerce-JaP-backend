import fs from "fs";
import path from "path";
import { createCarrito } from "../model/emercado-api/cart/cartModel.js";

export const obtenerCarritoPorUsuario = (req, res) => {
  const { USER_ID } = req.params;
  const rutaArchivo = path.resolve("model/emercado-api/user_cart/" + USER_ID);

  try {
    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuario = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const guardarCarritoPorUsuario = async (req, res) => {
  const Carrito_JSON = req.body.data;
  console.log(req.body.data);
  console.log("Datos recibidos para guardar el carrito:", Carrito_JSON);
  //Validar
  if (!Carrito_JSON) {
    console.log("Faltan parámetros: Carrito_JSON");
    return res
      .status(400)
      .json({ error: "Faltan parámetros", enviaste: req.body });
  }
  try {
    let resultado = await createCarrito({ data: Carrito_JSON });
    res.status(200).json({
      message: "Carrito guardado correctamente",
      id: resultado.data.id,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el carrito" });
  }
};
