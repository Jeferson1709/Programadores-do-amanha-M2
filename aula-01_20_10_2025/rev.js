// Array
const nome = ["Daniel", 27, true];
console.log(nome[1]);
nome.pop("");
nome.push("");
nome.unshift("");
nome.shift("");

const numeros = [1, 2, 3, 4, 5];

// Filtro
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

// Transformação
const numerosDobrados = numeros.map((num) => num * 2);
console.log(numerosDobrados);

// Reduzindo
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma);

// Filtrando o 1º
const encontrado = numeros.find((num) => num > 3);
console.log(encontrado);

// Iteração
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach((fruta) => console.log(fruta));

// Spread Operator
const maisFrutas = [...frutas, "kiwi", "manga"];
console.log(maisFrutas);

// Desestruturação
const [primeiro, segundo, ...resto] = frutas;
console.log({ primeiro, segundo, resto });

// OBJETOS

// Objeto literal
const pessoa = {
  nome: "João",
  idade: 30,
  saudar() {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.saudar());
console.log(pessoa.idade);

// Reatribuição de valor e adição de propriedade
pessoa.idade = 31;
pessoa.profissao = "Dev";

// Desestruturação
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa);

// FUNÇÕES
// Notação literal
function soma2(a, b) {
  return a + b;
}

// Arrow Functions
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4));

// Arrow Funtion com bloco
const dividir = (a, b) => {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
};

// Função com rest operator
const somarTodos = (...numeros) => {
  return numeros.reduce((acc, num) => acc + num, 0);
};

console.log(somarTodos(1, 2, 3, 4, 5));

// Callback
const processar = (array, callback) => {
  return array.map(callback);
};

console.log(processar([1, 2, 3], (num) => num * 3));
console.log(processar([1, 2, 3], (num) => num - 2));

console.log(`\n =======================`);
// POO
// Classe abstrata
class Animal {
  constructor(nome, tipo) {
    if (new.target === Animal) {
      throw new Error("Classe Animal não pode ser instanciada diretamente");
    }
    this.nome = nome;
    this.tipo = tipo;
  }

  fazerSom() {}
}

// Herança
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome, "Cachorro"); // Chama o construtor da classe Pai, setando o valor tipo como "Cachorro" por padrão
    this.raca = raca;
  }

  // Polimorfismo caso a classe pai não seja abstrata
  fazerSom() {}
}

const Rex = new Cachorro("Rex", "Pitbull");

// Encapsulamento
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
    return "Valor inválido";
  }

  #aplicarNaSelic() {}

  get saldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria("Dan");
console.log(conta.depositar(100));
console.log("Saldo", conta.saldo);
