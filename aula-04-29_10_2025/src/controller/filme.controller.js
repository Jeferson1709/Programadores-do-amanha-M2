let dbFilmes = [
  { id: 1, titulo: "", ano: "", genero: "" },
  { id: 1, titulo: "", ano: "", genero: "" },
];

let proximoId = 3;

class FilmeController {
 
    listarTodos(req, res) {
    return res.status(200).json();
  }

  buscarPorId(req, res) {
    const { id } = res.params;
    const filme = dbFilmes.find((value) => value.id === parseInt(id));

    if (!filme) {
        return req.status(404).json({message: "Filme não encontrado!"}); 
    }
    return res.status(200).json(filme);
  }


}
//singleton 
export default new FilmeController();


