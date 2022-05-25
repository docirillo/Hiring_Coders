type JogoAssertion = {
  nome: string;
  descricao: string;
};

//Forma 1
/*
let jogo = {} as JogoAssertion;
jogo.nome = 'hahahahaha';
jogo.descricao = 'Descricao do jogo';
*/

//Forma 2
let jogo = <JogoAssertion>{};
jogo.nome = 'hahahahaha';
jogo.descricao = 'Descricao do jogo';
