import express from "express";
import cors from "cors";
import productRouter from "./src/rutas/products.routes.js";
import "dotenv/config";
import { authentication } from "./src/middleware/authentication.js";
import loginRoute from "./src/rutas/auth.routes.js"

const app = express();

app.use(cors());

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authotization"],
};

app.use(cors(corsOptions));

//Convierte JSON a Object
app.use(express.json());

app.use((req, rest, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
});

//RUTA PARA AUTENTICARSE
app.use("/auth", loginRoute);

//RUTAS
app.use("/api", productRouter);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta inválida.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
