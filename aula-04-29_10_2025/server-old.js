import { Router } from "express";
import FilmeController from "../controllers/Filme.controller.js";
const filmes = Router();
// Rota raiz
filmes.get("/", (req, res) => {
  res.send("Bem-vindo à API Cinemateca (Versão Monolítica)!");
});
// GET /filmes - Listar todos os filmes
filmes.get("/filmes", FilmeController.listarTodos);
// GET /filmes/:id - Buscar filme por ID
filmes.get("/filmes/:id", FilmeController.buscarPorId);
export default filmes;