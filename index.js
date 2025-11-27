import express from "express"; // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html
import catsRoute from "./route/catsRoute.js";
import productsRoute from "./route/productsRoute.js";
import cartRoute from "./route/cartRoute.js";
import userRoute from "./route/userRoute.js";
import cors from "cors";
import authMiddleware from "./middlewares/authMiddleware.js";

import dotenv from "dotenv";
dotenv.config();

const app = express(); // Crea una instancia de ExpressJS
const EXT_TYPE = ".json";

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization, Bearer",
  })
);

app.use(express.json());

// Rutas
app.use("/", userRoute);

// Middleware de autenticación
app.use("/products", authMiddleware);
app.use("/products", productsRoute);

app.use("/cats", authMiddleware);
app.use("/cats", catsRoute);

app.use("/user_cart", authMiddleware);
app.use("/user_cart", cartRoute);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
