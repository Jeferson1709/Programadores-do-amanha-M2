import express from 'express'

const app =  express(); 

app.use(express.json());

app.get("/",(req , res )=>{

})
let dbLivro = [
    { id: 1, titulo: "O Poderoso Chefão", ano: 1972 },
    { id: 2, titulo: "Interestelar", ano: 2014 }
];
let proximoId = 3;
class LicroController {

    listarTodos(req, res) {
        return res.status(200).json(dbLivro);
    }

    buscarPorId(req, res) {

        app
        // PEGA O ID PELA URL ATRAVÉS DE PARÂMETROS
        const { id } = req.params;
        // COM BASE NESSE ID, FILTRA O FILME NO BANCO
        const livro = dbLivro.find((value) => value.id === parseInt(id));

        if (!livro) {
            return res.status(404).json({ mensagem: "Livro não encontrado" });
        }

        return res.status(200).json(filme);
    }

    alterar(titulo , autor , anoDePublicacao ) {
        const {  titulo , autor , anoDePublicacao } = req.params;

        res.status(200).json(filme)

    }
}

