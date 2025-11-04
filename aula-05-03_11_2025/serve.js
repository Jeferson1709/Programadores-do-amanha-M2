import express from "express";
import {logger }from './logger.js';
const app = express();

const PORT = 3000;
app.use(logger);
app.use(express.json());

// app.use("/api/:id",(req , rs , next)=>{
// console.log("Primeiro middlerawe");
// // const {id } = req.params;
// next();//Chama o Proximo.

// })

app.post("/api/users/:userId/posts/:postId", (req, res) => {
  // Headers

  const contentType = req.headers["content-type"];
  const authorization = req.headers["authorization"];
  const useAgent = req.headers["user-agent"];

  console.log("Hearders: ", { contentType, authorization, useAgent });
  const { userId, postId } = req.params;
  console.log("Params: ", {
    userId,
    postId,
  });

  const { title, content, tags } = req.body;

  console.log("Body: ", {
    title,
    content,
    tags,
  });

  const { page, limit, sort } = req.query;

  console.log("Body: ", {
    page,
    limit,
    sort,
  });
  res.json({
    message: "Requisição processada com sucesso !",
    headers: { contentType, authorization, useAgent },
    params: { userId, postId },
    body: { title, content, tags },
    query: { page, limit, sort },
  });
});

app.listen(PORT, () => {
  console.log(`Servidor MONOLÍTICO rodando em http://localhost:${PORT}`);
});
