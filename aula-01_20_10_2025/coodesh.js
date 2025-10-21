// [[5, 4, 2, 9],[7, 9, 15],[6, 9, 11, 17],];
// => 2+7+6
// => 15
const somaMenor = (array) => {
  let resultado = 0;

  for (let i = 0; i < array.length; i++) {
    resultado += Math.min(...array[i]);
    console.log(resultado);
  }

  return resultado;
};
console.log(
  somaMenor([
    [5, 4, 2, 9],
    [7, 9, 15],
    [6, 9, 11, 17],
  ])
);
