import express from "express";
//CRIANDO UMA INSTÂNCIA DO EXPRESS.
const app = express();

//PERMITE QUE A GENTE TRABALHE COM COMUNCAÇÃO JSON.
app.use(express.json());

//CRIANDO UM RECURSO NO SERVIDOR -> ROTAS (PATH/ CAMINHO DO RECURSO), TAMBÉM CHAMADO DE ENDPOINT.

//RECURSO DO TIPO GET.
app.get("/", (req, res) => {
  res.json({
    message: "Olá, seja bem vindo!",
    data: new Date().toLocaleString("pt-BR"),
  });
});

//Abrindo o servidor.
app.listen(3000, () => {
  console.log("O servidor está rodando na Porta 3000");
});
