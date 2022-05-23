class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Player extends Persona {
  constructor(name, age, game) {
    super(name, age);

    this.game = game;
  }
}

const jogador = new Player('Daniel', 32, 'Super Mario Odyssey');
console.log(jogador);
