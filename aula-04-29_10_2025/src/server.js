import express from "express";
import filmes from "./routes/filmes.route.js";
const app = express();
const PORT = 8080;
// Middleware para parsear JSON
app.use(express.json());
app.use(filmes);
// -----------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// -----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Servidor MONOLÍTICO rodando em http://localhost:${PORT}`);
});

// Requisitos:
// O servidor deve rodar na porta 8080.
// Configure o —watch para este projeto a fim de ter hot-reload no servidor.
// Crie três rotas GET distintas:
// / (Home): Deve retornar a mensagem "Bem-vindo(a) à nossa loja!"
// /produtos: Deve retornar a mensagem "Confira nossa lista de produtos incríveis!"
// /carrinho: Deve retornar a mensagem "Seu carrinho de compras está vazio. "
// Use o Postman, Insomnia ou Thunder Client (extensão do VS Code) para testar todas as três rotas e verificar se elas retornam as mensagens corretas e o status HTTP 200 OK.
