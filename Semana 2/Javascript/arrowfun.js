function soma(x, y) {
  return x + y;
}

const multiplicacao = function (x, y) {
  return x * y;
};

//arrow function
const dividir = (x, y) => {
  return x / y;
};

const objeto = () => ({ nome: 'DC', sobrenome: 'Cirillo' });

console.log(soma(3, 4));
console.log(multiplicacao(5, 5));
console.log(dividir(4, 2));
