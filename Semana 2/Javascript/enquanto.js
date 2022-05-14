var achou = false;

var numeroSorteado = 3;
var possivelValor = 0;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado === possivelValor) {
    achou = true;
  } else {
    console.log(`${possivelValor} não corresponde ao número sorteado`);
  }
}
