var valores = [5, 8, 10, 22, 38, 45, 60, 75, 80];

function busca(num) {
  for (let i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    }
  }
  return -1;
}

//usando a nossa ferramenta de busca

console.log(busca(10));
console.log(busca(45));
