import express from "express"; // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html
import catsRoute from "./route/catsRoute.js";
import productsRoute from "./route/productsRoute.js";
import cartRoute from "./route/cartRoute.js";
import userRoute from "./route/userRoute.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express(); // Crea una instancia de ExpressJS
const EXT_TYPE = ".json";

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(express.json());

// Rutas
app.use("/cats", catsRoute);
app.use("/", productsRoute);
app.use("/user_cart", cartRoute);
app.use("/", userRoute);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
