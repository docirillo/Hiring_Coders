const pessoa = {
  nome: 'Daniel',
  sobrenome: 'Cirillo',
  idade: 32,
  profissao: 'Tradutor',
};

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao);
