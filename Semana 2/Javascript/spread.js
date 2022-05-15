let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

arr2.push('d');

const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);
console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);
