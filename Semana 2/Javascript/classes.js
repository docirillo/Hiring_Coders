class Matematica {
  soma(valorA, valorB) {
    return valorA + valorB;
  }
  divisao(valorA, valorB) {
    return valorA / valorB;
  }
  multiplicacao(valorA, valorB) {
    return valorA * valorB;
  }
  subtracao(valorA, valorB) {
    return valorA - valorB;
  }
  resto(valorA, valorB) {
    return valorA % valorB;
  }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.multiplicacao(4, 2);
console.log(resultado);
