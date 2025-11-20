import express from "express"; // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html
import catsRoute from "./route/catsRoute.js";
import productsRoute from "./route/productsRoute.js";
import cartRoute from "./route/cartRoute.js";

const app = express(); // Crea una instancia de ExpressJS
const EXT_TYPE = ".json";
app.use(express.json());

// Rutas
app.use("/cats", catsRoute);
app.use("/", productsRoute);
app.use("/user_cart", cartRoute);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
