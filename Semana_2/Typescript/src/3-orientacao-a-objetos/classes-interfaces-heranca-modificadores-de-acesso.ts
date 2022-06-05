//classes e funções
class PersonaProfile {
  public name;
  public age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//static
class Player extends PersonaProfile {
  public game;
  constructor(name: string, age: number, game: string) {
    super(name, age);

    this.game = game;
  }

  sayLastGamePlayed() {
    return `Estou jogando no momento: ${this.game}`;
  }

  static whatTimeIsIt() {
    return Date();
  }
}

const jogador = new Player('Daniel', 32, 'Super Mario Odyssey');
console.log(jogador.sayLastGamePlayed());

//private, protected, public
//muda a forma que pode acessar o valor de alguma classe

class Jogo {
  private nome;
  //private, acessível apenas dentro da classe onde o campo foi criado.
  // protected acessível apenas dentro da classe e subclasses que o campo foi criado
  //public acessivel de forma geral, dentro e fora da classe
  constructor(nome: String) {
    this.nome = nome;
  }

  dizerNome() {
    return `O nome do jogo é ${this.nome}`;
  }
}

class JogoComDescricao extends Jogo {
  private descricao;

  constructor(nome: string, descricao: string) {
    super(nome);

    this.descricao = descricao;
  }

  dizerNomeComDescricao() {
    return `O nome do jogo é: ${this.nome}`;
  }
}

const ghost = new JogoComDescricao(
  'Ghost of Tsushima',
  'É um jogo muito bom, cheio de ação e sangue',
);
ghost.nome = 'The Sims';
console.log(ghost.dizerNome());
console.log(ghost.nome);

//interfaces
//formas de garantir campos, funções/métodos das classes
//semelhantes a type alias

interface IJogoComDescricao {
  //nome: string;
  descricao: string;
  dizerNomeComDescricao(): string;
}
//implements
/*class JogoComDescricao extends Jogo implements IJogoComDescricao {
  public descricao;

  constructor(nome: string, descricao: string) {
    super(nome);

    this.descricao = descricao;
  }

  dizerNomeComDescricao() {
    return `O nome do jogo é: ${this.nome}`;
  }
}
*/

//type alias não é tão comum quanto interfaces
/*
type TJogoComDescricao = {
  descricao: string;
  dizerNomeComDescricao(): string;
};

const obj: IJogoComDescricao = {
  descricao: 'descricao do jogo',
  dizerNomeComDescricao() {
    return '123';
  },
};
*/