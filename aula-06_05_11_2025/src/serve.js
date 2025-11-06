import express from "express";
import { logger } from "./middlewares/logger.midleware.js";

const app = express();
const PORT = 3000;
app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Servidor Vivo" });
});

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando na Porta${PORT}.`);
});
