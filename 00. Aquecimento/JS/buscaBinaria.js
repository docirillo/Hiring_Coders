var valores = [0, 10, 20, 30, 45, 60, 65, 70, 80, 90, 100, 233, 444];

function buscaBin(num) {
  let inicio, fim;
  let meio;
  let passos = 0;
  inicio = 0;
  fim = 12;

  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2);
    passos = passos + 1;
    if (num == valores[meio]) {
      console.log('achei em ' + passos + ' passos');
      return meio;
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  }
  console.log('nao achei em ' + passos + ' passos');
  return -1;
}

//usando buscaBinaria

console.log(buscaBin(10));
console.log(buscaBin(20));
console.log(buscaBin(444));
