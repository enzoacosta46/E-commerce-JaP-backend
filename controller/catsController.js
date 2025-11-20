import fs from "fs";
import path from "path";

//Obtener categorías

export const obtenerCategorias = (req, res) => {
  try {
    const filePath = path.resolve("model/emercado-api/cats/cat.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
};

export const obtenerCategoriaPorId = (req, res) => {
  const { CATEGORY_ID } = req.params;
  const rutaArchivo = path.resolve(
    "model/emercado-api/cats_products/" + CATEGORY_ID
  );

  try {
    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }

    const categoria = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};
