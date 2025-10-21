const nome = ["Jeferson", 21, true];

console.log(nome[1]);

nome.pop("");
nome.push("");
nome.unshift("");
nome.shift("");

const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter((num) => num % 2 == 0);
console.log(numerosPares);

const numerosDobrados = numeros.map((num) => num * 2);
console.log(numerosDobrados);

const somaDosElementos = numeros.reduce((acc, num) => acc + num, 0);
console.log(somaDosElementos);

const encontrado = numeros.find((num) => num > 3);
console.log(encontrado);

const frutas = ["Maça", "banana", "laranja"];
frutas.forEach((fruta) => console.log(fruta));

const maisFrutas = [...frutas, "Kiwi", "manga"];
console.log(maisFrutas);

const [primeiro, segundo, ...resto] = frutas;
console.log({ primeiro, segundo, resto });

//Objetos

//Objetos Literal.

const pessoa = {
  nome: "Jeferson",
  idade: 21,
  saudar() {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.saudar());
console.log(pessoa.idade);

// Reatribuição de valor e adição de propriedade.
pessoa.idade = 31;
pessoa.profissao = "Dev";

//Desestruturação
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa);

//Funções.
//Notação literal.
function soma(a, b) {
  return a + b;
}

console.log(soma(13, 23));

//Arrow Functions.
const multiplicacao = (a, b) => a * b;
console.log(multiplicacao(12, 5));

//Arrow Function com bloco.

const dividir = (a, b) => {
  if (b === 0) return "Erro:  divisão por zero.";

  return a / b;
};

const somaTodos = (...numeros) => {
  return numeros.reduce((acc, num) => acc + num, 0);
};

const processar = (array, callback) => {
  return array.map(callback);
};

console.log(processar([1, 2, 3], (num) => num * 3));
console.log(processar([1, 2, 3], (num) => num - 3));

// POO

class Animal {
  constructor(nome, tipo) {
    if (new.target === Animal)
      throw new Error("Classe Animal não pode ser instanciada diretamente.");

    this.nome = nome;
    this.tipo = tipo;
  }
  fazerSom(){
    
  }
}

// const leao = new Animal("Rex" , "Leão");
// leao.fazerSom();

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome, "Cachorro"); // Chama o construtor da classe Pai, setando o valor tipo como "Cachorro".
    this.raca = raca;
  }
  //Polinmorfismo caso a classe pai não seja abstrata. 
  fazerSom(){
    
  }
}

const Rex = new Cachorro("Rex", "Pitbull");

//Encapsulamento
class ContaBancaria {
  #saldo = 0;
  constructor(titular) {
    this.titular = titular;
  }
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return `Depositado: R$ ${valor}`;
    }
    return "Valor Inválido"; 
  }
  get saldo(){
    return this.#saldo;
  }
  #aplicarNaSelic(){

  }
}

const conta  = new ContaBancaria("Carlos"); 
console.log(conta.depositar(100));
console.log("Saldo" ,conta.saldo);
