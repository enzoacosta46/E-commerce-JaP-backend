import fs from "fs";
import path from "path";

export const obtenerCarritoPorUsuario = (req, res) => {
  const { USER_ID } = req.params;
  const rutaArchivo = path.resolve("model/emercado-api/user_cart/" + USER_ID);

  try {
    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const producto = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};
