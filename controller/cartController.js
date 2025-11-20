import fs from "fs";
import path from "path";

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
