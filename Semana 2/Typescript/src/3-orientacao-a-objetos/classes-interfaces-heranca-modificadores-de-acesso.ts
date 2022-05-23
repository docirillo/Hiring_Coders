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
