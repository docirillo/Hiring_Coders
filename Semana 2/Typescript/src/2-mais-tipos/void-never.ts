//valores que não tem retorno explicitamente
function main(): void {
  console.log('executando');
}

main();

function functionThatNeverReturns(): never {
  while (true) {}
}

functionThatNeverReturns();

//laços de repetição infinitos
//ou funções que disparam erros
function functionThatNeverReturns2(): never {
  throw new Error('hello');
}

functionThatNeverReturns2();
